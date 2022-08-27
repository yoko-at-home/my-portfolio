import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "yoko-portfolio",
  apiKey: process.env.PORTFOLIO_API_KEY!,
});
