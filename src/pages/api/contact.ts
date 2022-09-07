import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "./portfolio/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);
    await client.create({
      content: req.body,
      endpoint: "contact",
    });
    res.status(200).json("OK");
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
