// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { clientBlog } from "./clientBlog";

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
