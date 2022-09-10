import { NextApiRequest, NextApiResponse } from "next";
import { twClient } from "src/lib/axios";
import { TwitterUserProps } from "src/types";
import { encodeUrl } from "src/utils/converter";

const getTweet = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;

  const { data } = await twClient.get<TwitterUserProps>(
    `tweets?${encodeUrl(query)}`
  );

  return res.status(200).json(data);
};

export default getTweet;
