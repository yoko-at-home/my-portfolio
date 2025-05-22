import { createClient } from "microcms-js-sdk";

export const client = createClient({
  apiKey: process.env.PORTFOLIO_API_KEY ?? "",
  serviceDomain: "yoko-portfolio",
});
