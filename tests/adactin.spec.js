import { test } from "@playwright/test";
import { LoginPage1 } from "./pages/loginPage1";
import { SearchHotel1 } from "./pages/searchPage1";

test("adactin", async ({ page }) => {
  const loginPage = new LoginPage1(page);
  const searchPage = new SearchHotel1(page);

  await loginPage.navigate();
  await loginPage.loginMethod();
  //await searchPage.searchHotelMethod();
});
