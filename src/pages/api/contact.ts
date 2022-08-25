import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  console.log(req.body);
  if (method != "POST") {
    res.status(400).json({ success: false });
    return;
  }

  const { name, email, message } = JSON.parse(req.body);

  const data = {
    name,
    email,
    message,
  };

  await fetch(`${process.env.API_URL}/contact`, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  res.status(200).json({ success: true });
}
