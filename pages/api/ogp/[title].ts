import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import { OgTemplate } from "../../../components/ogTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { createElement } from "react";
import ReactDOMServer from "react-dom/server";
import { useRouter } from "next/router";

type Params = {
  params: {
    title: string;
  };
};
const isDev = process.env.NODE_ENV !== "production";

const getHtml = ({ title }: { title: string }): string => {
  const elem = createElement(OgTemplate, { title });
  return ReactDOMServer.renderToString(elem);
};

const Image = async (req: NextApiRequest, res: NextApiResponse) => {
  const title: string | string[] | undefined = req.query["title"];
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: { width: 1200, height: 675 },
      executablePath: isDev
        ? "/home/murasame/test/test-nextjs-ogimage/node_modules/puppeteer/.local-chromium/linux-961656/chrome-linux/chrome"
        : await chromium.executablePath,
      headless: chromium.headless,
    });
    console.log("[API]OGP: Running...");
    let html: string;
    if (typeof title === "string") {
      html = getHtml({ title });
      const page = await browser.newPage();
      console.log("[API]OGP: Running......");
      await page.setContent(html, { waitUntil: "domcontentloaded" });
      console.log("[API]OGP: Running.........");
      const buffer = await page.screenshot({ type: "png" });
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/png");
      res.setHeader(
        "Cache-Control",
        "public, s-maxage=31536000, max-age=31536000"
      );
      res.end(buffer);
    }
  } catch (e) {
    res.statusCode = 500;
    console.error(e);
  }
};

export default Image;
