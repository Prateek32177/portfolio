import { platform, webhooksecret } from "../flags";
import { NextResponse } from "next/server";

export const GET = async () => {
  const platformValue = await platform();
  const webhookSecretValue = await webhooksecret();
  
  console.log("Platform:", platformValue);
  console.log("Webhook Secret:", webhookSecretValue);
  
  return NextResponse.json({ 
    platform: platformValue, 
    webhooksecret: webhookSecretValue 
  });
};