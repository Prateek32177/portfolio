import { createWebhookHandler } from "@hookflo/tern/nextjs";
import { platform, webhooksecret } from "../flags";

export const POST = async (request: Request) => {
  const platformValue = await platform();
  const webhookSecretValue = await webhooksecret();
  let errorMessage;
  const handler = createWebhookHandler({
    platform: platformValue as
      | "stripe"
      | "polar"
      | "clerk"
      | "razorpay"
      | "github",
    secret: typeof webhookSecretValue === "string" ? webhookSecretValue : "",
    onError: (error) => {
      errorMessage = JSON.stringify(error);
      console.log("error", JSON.stringify(error));
    },
    handler: async (payload) => {
      console.log("Payload", JSON.stringify(payload, null, 2));
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
