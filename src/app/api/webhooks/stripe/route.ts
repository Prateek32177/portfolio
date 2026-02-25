import { createWebhookHandler } from "@hookflo/tern/nextjs";
import { createTernControls } from "@hookflo/tern/upstash";
import { platform, webhooksecret } from "../flags";

// ─── Controls (for DLQ + replay testing) ─────────────────────────
const controls = createTernControls({
  token: process.env.QSTASH_TOKEN!,
});

// ─── POST — webhook receiver + processor (same route) ────────────
export const POST = async (request: Request) => {
  const platformValue = await platform();
  const webhookSecretValue = await webhooksecret();
  let errorMessage: string | undefined;

  const handler = createWebhookHandler({
    platform: platformValue as
      | "stripe"
      | "polar"
      | "clerk"
      | "razorpay"
      | "github",
    secret: typeof webhookSecretValue === "string" ? webhookSecretValue : "",

    // ── Queue config ──────────────────────────────────────────────
    // Option A — reads QSTASH_TOKEN, QSTASH_CURRENT_SIGNING_KEY,
    //            QSTASH_NEXT_SIGNING_KEY from env automatically
    queue: true,

    // Option B — explicit (comment out queue: true above to test this)
    // queue: {
    //   token: process.env.QSTASH_TOKEN!,
    //   signingKey: process.env.QSTASH_CURRENT_SIGNING_KEY!,
    //   nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY!,
    //   retries: 3, // optional — remove to use QStash plan default
    // },

    onError: (error) => {
      errorMessage = JSON.stringify(error);
      console.log("❌ Webhook error:", JSON.stringify(error));
    },

    // ── Handler — runs when QStash delivers back to this route ────
    // To test Case 3 (retries): uncomment the throw below
    handler: async (payload) => {
      // ── TEST CASE 3: Simulate failure → triggers QStash retries ──
      // throw new Error("Simulated failure — check QStash console for retries")

      console.log("✅ Handler executed — payload:", JSON.stringify(payload, null, 2));
      return { received: true };
    },
  });

  try {
    const response = await handler(request);
    return response;
  } catch (error) {
    console.error("Webhook handler error:", errorMessage || error);
    return new Response(
      JSON.stringify({ error: errorMessage || String(error) }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
};

// ─── GET — inspect DLQ (test Case 4) ─────────────────────────────
// curl http://localhost:3000/api/webhooks
export const GET = async () => {
  try {
    const failed = await controls.dlq();
    console.log("📋 DLQ events:", JSON.stringify(failed, null, 2));
    return Response.json({ count: failed.length, events: failed });
  } catch (error) {
    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }
};

// ─── PATCH — replay a failed event from DLQ (test Case 4) ────────
// curl -X PATCH http://localhost:3000/api/webhooks \
//   -H "Content-Type: application/json" \
//   -d '{"messageId": "msg_xxx"}'
export const PATCH = async (request: Request) => {
  try {
    const { messageId } = await request.json();

    if (!messageId) {
      return Response.json(
        { error: "messageId is required" },
        { status: 400 }
      );
    }

    const result = await controls.replay(messageId);
    console.log("🔁 Replayed event:", JSON.stringify(result, null, 2));
    return Response.json(result);
  } catch (error) {
    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }
};