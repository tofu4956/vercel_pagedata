import { NextApiRequest, NextApiResponse } from "next";
import { getOGPdata } from "../../lib/api";

const CardOGP = async (req: NextApiRequest, res: NextApiResponse) => {
  const url: string | string[] | undefined = req.query["url"];
  res.setHeader("Cache-Control", "public, s-maxage=1209600, max-age=1209600");
  res.status(200).json(await getOGPdata(String(url)));
};

export default CardOGP;
