import { test } from "@playwright/test";
import { LoginPage1 } from "../tests/pages/loginPage1";
import logindata from "../testData/dataDrivenTestData.json";
import data from "../testData/adactinTestData.json";

for (let DD of logindata) {
  test(`DataDriven Testing using ${DD.UN} and ${DD.Pwd}`, async ({ page }) => {
    const logObj1 = new LoginPage1(page);

    await logObj1.navigate(data.url);
    await logObj1.loginMethod(DD.UN, DD.Pwd);
  });
}
