import { createClient } from "microcms-js-sdk";

export const clientBlog = createClient({
  apiKey: process.env.BLOG_API_KEY!,
  serviceDomain: "yoko-blog",
});
