import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

export const platform = flag({
  key: 'platform',
  adapter: vercelAdapter(),
});

export const webhooksecret = flag({
  key: 'webhooksecret',
  adapter: vercelAdapter(),
});