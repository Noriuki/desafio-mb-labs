// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";
import { IPost } from "../../../src/components/types/interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const { slug } = req.query;
    const jsonPath = path.join(process.cwd(), "json") + "/db.json";
    const data = await fs.readFile(jsonPath, "utf8");
    const parsedJson = JSON.parse(data);
    const post = parsedJson?.eventos.filter(
      (evento: IPost) => evento.slug === slug
    );

    return res.status(200).json(post[0]);
  }
}
