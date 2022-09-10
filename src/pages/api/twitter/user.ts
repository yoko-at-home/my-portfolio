import { NextApiRequest, NextApiResponse } from "next";
import { twClient } from "src/lib/axios";
import { TwitterTweetProps } from "src/types";
import { encodeUrl } from "src/utils/converter";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;

  const { data } = await twClient.get<TwitterTweetProps>(
    `?${encodeUrl(query)}`
  );

  return res.status(200).json(data);
};

export default getUser;
