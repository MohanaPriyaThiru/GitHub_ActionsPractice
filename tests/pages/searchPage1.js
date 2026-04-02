// const data = require("../../valueTest/dataAdactin.json");
import data from "../../testData/adactinTestData.json";
export class SearchHotel1 {
  constructor(page) {
    this.page = page;
    this.location = page.locator("#location");
    this.hotel = page.locator("#hotels");
    this.roomNo = page.locator('[name="room_nos"]');
    this.indate = page.locator("#datepick_in");
    this.outdate = page.locator("#datepick_out");
    this.adultNo = page.locator('[name="adult_room"]');
    this.search = page.locator("#Submit");
  }

  async searchHotelMethod() {
    await this.location.selectOption(data.loc);
    await this.hotel.selectOption(data.hotelname);
    await this.roomNo.selectOption(data.roomNum);
    await this.indate.fill(data.dateIn);
    await this.outdate.fill(data.dateOut);
    await this.adultNo.selectOption(data.adult);
    await this.search.click();
  }
}
