import puppeteer from "puppeteer";
import { readFileSync, readdirSync } from "fs";

(async () => {
  // Create a browser instance
  const browser = await puppeteer.launch({ headless: "new" });

  // Create a new page
  const page = await browser.newPage();

  const html = readFileSync("./out/index.html", "utf-8");

  const cssDirPath = "./out/_next/static/css/";
  const cssFileName = readdirSync(cssDirPath, "utf-8")[0];
  const css = readFileSync(cssDirPath + cssFileName, "utf-8");

  await page.setContent(html, { waitUntil: "domcontentloaded" });
  await page.addStyleTag({ content: css });

  //To reflect CSS used for screens instead of print
  await page.emulateMediaType("screen");

  // Downlaod the PDF
  await page.pdf({
    path: "GeoffreyOlsonJr.pdf",
    margin: { top: "50px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A4",
  });

  await browser.close();
})();
