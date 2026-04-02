import { expect } from "@playwright/test";
// const data = require("../../valueTest/dataAdactin.json");
import data from "../../testData/adactinTestData.json";

export class LoginPage1 {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.submitBtn = page.locator('[name="login"]');
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async loginMethod(UN, Pwd) {
    await this.username.fill(UN);
    await this.password.fill(Pwd);
    await this.submitBtn.click();
    // await Promise.all([this.page.waitForNavigation(), this.submitBtn.click()]);
    await expect(this.page).toHaveTitle("Adactin.com - Search Hotel");
  }
}
