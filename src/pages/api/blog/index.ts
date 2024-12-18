// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "microcms-js-sdk";
import type { NextApiRequest, NextApiResponse } from "next";

export const clientBlog = createClient({
  apiKey: process.env.BLOG_API_KEY!,
  serviceDomain: "yoko-blog",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);
    await clientBlog.create({
      content: req.body,
      endpoint: "blog",
    });
    res.status(200).json("OK");
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
