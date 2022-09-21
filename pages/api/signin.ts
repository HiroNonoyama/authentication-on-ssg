import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      name: string;
    }
  | {
      message: string;
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body;
  if (email === "test@gmail.com" && password === "11111111") {
    res.status(200).json({ name: "Hiro Nonoyama" });
    return;
  }
  res.status(401).json({ message: "wrong" });
}
