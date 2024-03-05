import { NextApiRequest, NextApiResponse } from "next";
const puppeteer = require("puppeteer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const urlProfile = req.query.url;

    // Launch the browser
    const browser = await puppeteer.launch({ headless: false });

    // Create a page
    const page = await browser.newPage();

    // Go to your site
    await page.goto(urlProfile);

    page.on('console', msg => console.log('Console message from the page:', msg.text()));
    await page.screenshot({ path: 'screenshot.png' });

    const closeButtonSelector = await page.locator('button').wait();
    console.log("closeButtonSelector", closeButtonSelector);
    // await page.waitForSelector(closeButtonSelector, { timeout: 10000 });
    // const closeButton = await page.$(closeButtonSelector);
    // await closeButton.click();
    // await page.waitForTimeout(2000); // Aguarda um curto período de tempo para garantir que a ação seja concluída

    // Close browser.
    await browser.close();
    res.json({  });
    res.statusCode = 200;
    res.end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
