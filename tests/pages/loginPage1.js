import { expect } from "@playwright/test";
const data = require("../../valueTest/dataAdactin.json");

export class LoginPage1 {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.submitBtn = page.locator('[name="login"]');
  }

  async navigate() {
    await this.page.goto("https://adactinhotelapp.com/");
  }

  async loginMethod() {
    await this.username.fill(data.UN);
    await this.password.fill(data.Pwd);
    await Promise.all([this.page.waitForNavigation(), this.submitBtn.click()]);
    // await expect(this.page).toHaveTitle("Adactin.com - Search Hotel");
  }
}
