const { test, expect } = require("@playwright/test");
const { execPath } = require("node:process");

class AllProducts {
  constructor(page) {
    this.page = page;

    this.productsTitle = page.locator('//span[@class="title"]');
    this.productsCount = page.locator('//div[@class="inventory_item"]');

    this.SelectFilterOptions = page.locator('//select[@class="product_sort_container"]');

    this.productSelect = page.locator('//a[@id="item_4_title_link"]');
    this.SingleProduct = page.locator('//div[@class="inventory_details_name large_size"]');
  }

  async getproductsTitle() {
    const text = await this.productsTitle.textContent();
    console.log(text);
    await expect(this.productsTitle).toHaveText("Products");
    await expect(this.productsTitle).toBeVisible();
    expect(text).toBe("Products");
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.productsTitle).not.toHaveText("Login");
  }

  async getproductCount() {
    const count = await this.productsCount.count();
    console.log("Total product displayed", count);
    expect(count).toBe(6);

    //Loop Through Produts

    for (let i = 0; i < count; i++) {
      const name = await this.productsCount.nth(i).allTextContents();
      //console.log(`products ${i + 1}:`, name);
    }
  }

  async getproductShortName() {
    //display the specfic letters
    const count = await this.productsCount.count();
    for (let i = 0; i < count; i++) {
      const shortname = await this.productsCount.nth(i).textContent();
      const shortTitle = shortname.substring(0, 20);
      console.log(shortTitle);
    }
  }

  async selectSortOption(){
    await this.SelectFilterOptions.selectOption('Price (high to low)')
  }

  async getFilterOptions(){
    const count =  await this.SelectFilterOptions.count()
    //console.log(optionsnames);

    for(let i =0; i<count; i++){
        const options = await this.SelectFilterOptions.nth(i).textContent();
       // console.log(options)
       console.log(`Option ${i + 1}:`, options);
    }
  }

  async Set_FilterOptions(){
    const options  =  await this.SelectFilterOptions.allTextContents()

    const SetData  = new Set(options);

    console.log(SetData);
  }

  async FilterVerfication(){
    await expect(this.SelectFilterOptions).toBeEnabled();
    await expect(this.SelectFilterOptions).toHaveValue("hilo")
  }



  async productSelectget(){
    const getTittle = await this.productSelect.allTextContents()
    console.log(getTittle);

    expect(getTittle[0]).toBe("Sauce Labs Backpack")
    await this.productSelect.click();

    const SingleProductText = await this.SingleProduct.allTextContents();
    expect(getTittle[0]).toBe(SingleProductText[0])

   
  }

  async getSingleProduct() {
    const SingleProductText = await this.SingleProduct.allTextContents();
    console.log(SingleProductText);

  
  }
}

module.exports = AllProducts;
