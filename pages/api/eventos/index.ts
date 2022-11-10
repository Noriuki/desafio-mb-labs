// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const jsonPath = path.join(process.cwd(), "json") + "/db.json";
    const data = await fs.readFile(jsonPath, "utf8");
    return res.status(200).json(JSON.parse(data));
  }
}
