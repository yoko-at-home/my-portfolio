import type { NextApiRequest, NextApiResponse } from "next";
import { BlogProps } from "src/types";

import { client } from "./client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const data = await client.getList<BlogProps>({
    endpoint: "portfolio",
    queries: {
      limit: Number(query.limit) ?? 10,
      offset: Number(query.offset) ?? 0,
    },
  });
  res.status(200).json({ contents: data.contents });
};

export default handler;
