import { NextApiRequest, NextApiResponse } from "next";
const puppeteer = require("puppeteer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const urlProfile = req.query.url;

    const screenshot = "test.png";

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(urlProfile, { waitUntil: "networkidle2", timeout: 0 });
    // await page.screenshot({ path: screenshot });
    // pega título
    let title = await page.title();
    // botão login
    // await page.click("button.authwall-join-form__form-toggle--bottom");
    // botão fecha modal
    await page.click("button.modal__dismiss");
    // pega conteúdo sobre
    await page.waitForSelector(".core-section-container__content");
    let elementSobre = await page.$(".core-section-container__content");
    let sobre = await page.evaluate((el) => el.textContent, elementSobre);

    // pega conteúdo função
    const funcao = await page.evaluate(() => {
      const span = document.querySelector(".top-card-layout__headline");
      if (span) {
        return span.textContent.trim();
      }
      return null;
    });

    const localizacao = await page.evaluate(() => {
      const span = document.querySelector(
        "div.not-first-middot span:first-child"
      );
      if (span) {
        return span.textContent.trim();
      }
      return null;
    });

    const experiencias = await page.evaluate(() => {
      const experienceItems = document.querySelectorAll(
        'section[data-section="experience"] .experience-item'
      );
      const experiencesArray = [];

      experienceItems.forEach((item) => {
        const empresa = item
          .querySelector(".experience-item__subtitle")
          .textContent.trim();
        const duracao = item.querySelector(".date-range").textContent.trim();
        const localizacao = item
          .querySelectorAll(".experience-item__meta-item")[1]
          .textContent.trim();
        const descricao = item
          .querySelector(".show-more-less-text__text--less")
          .textContent.trim();

        experiencesArray.push({
          empresa,
          duracao,
          localizacao,
          descricao,
        });
      });

      return experiencesArray;
    });

    // await page.waitForSelector(".top-card-layout__headline");
    // let elementFuncao = await page.$(".top-card-layout__headline");
    // let funcao = await page.evaluate((el) => el.textContent, elementFuncao);

    await browser.close();

    // // Launch the browser
    // const browser = await puppeteer.launch({ headless: false });

    // // Create a page
    // const page = await browser.newPage();

    // // Go to your site
    // await page.goto(urlProfile);

    // page.on('console', msg => console.log('Console message from the page:', msg.text()));
    // await page.screenshot({ path: 'screenshot.png' });

    // const closeButtonSelector = await page.locator('button').wait();
    // console.log("closeButtonSelector", closeButtonSelector);
    // await page.waitForSelector(closeButtonSelector, { timeout: 10000 });
    // const closeButton = await page.$(closeButtonSelector);
    // await closeButton.click();
    // await page.waitForTimeout(2000); // Aguarda um curto período de tempo para garantir que a ação seja concluída

    // Close browser.
    await browser.close();
    res.json({ title, sobre, funcao, localizacao, experiencias });
    res.statusCode = 200;
    res.end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
