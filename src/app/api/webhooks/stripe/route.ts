import { createWebhookHandler } from "@hookflo/tern/nextjs";
import { platform , webhooksecret} from "../flags";

export const POST = async () => {
  const platformValue = await platform();
  const webhookSecretValue = await webhooksecret();

  return createWebhookHandler({
    platform: platformValue as "stripe" | "polar" | "clerk" | "razorpay" | "github",
    secret: typeof webhookSecretValue === "string" ? webhookSecretValue : "",
    onError: (error) => {
      console.log("error", JSON.stringify(error));
    },
    handler: async (payload) => {
      console.log("Payload", JSON.stringify(payload, null, 2));
      return { received: true };
    },
  });
};