import { createClient } from "microcms-js-sdk";

export const clientBlog = createClient({
  serviceDomain: "yoko-blog",
  apiKey: process.env.BLOG_API_KEY!,
});
