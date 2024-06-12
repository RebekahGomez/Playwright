import { test, expect, Page } from '@playwright/test'
import { captureText, click, clickByIndex, hover, navigate, scrollPixels } from '../../main/ReusableActions'

let page: Page

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
})

test("USPS stamps", async () => {
  await navigate(page, "https://www.usps.com/")
  // hover over Shop module
  await hover(page, "xpath=//*[@id='navpostalstore']", "Hover over Shop")
  // click on Stamps
  await click(page, "xpath=//*[text()='Stamps']", "Click on Stamps")
  // click on checkbox for stamps under Category section
  await click(page, "xpath=//*[@id='checkbox-type-Category-Stamps-95']", "Click checkbox Stamps")
  // scroll by pixels about 300-500
  await scrollPixels(page, 0, 400)
  // click on first stamp using clickByIndex method
  await clickByIndex(page, "xpath=//*[@class='result-product-img']", 0, "Click first stamp")
  // click on Add to Cart
  await click(page, "xpath=//*[@id='addToCartVisBtn581304']", "Add to Cart")
  // click on View Cart
  await click(page, "xpath=//*[text()='View Cart']", "View Cart")
  // capture the stamp information and print it
  let result = await captureText(page, "xpath=//*[@class='prod-info-detail']", "Capture stamp information")
  console.log(result)
})