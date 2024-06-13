import { test, expect, Page } from '@playwright/test'
import { captureText, click, clickByIndex, hover, hoverByIndex, navigate, scrollPixels, sendKeys } from '../../main/ReusableActions'

let page: Page

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
})

test("USPS stamps", async () => {
  await navigate(page, "https://www.usps.com/")
  // hover over Shop module
  await hoverByIndex(page, "xpath=//*[text()='Shop']", "Hover over Shop", 0)
  // click on Stamps
  await click(page, "xpath=//*[text()='Stamps']", "Click on Stamps")
  // click on checkbox for stamps under Category section
  await click(page, "xpath=//*[text()='Stamps (95)']", "Click checkbox Stamps")
  // scroll by pixels about 300-500
  await scrollPixels(page, 0, 400)
  // click on first stamp using clickByIndex method
  await clickByIndex(page, "xpath=//*[@class='result-product-img']", 0, "Click first stamp")
  // click on Add to Cart
  await click(page, "xpath=//*[@id='addToCartVisBtn581304']", "Add to Cart")
  // click on View Cart
  await click(page, "xpath=//*[text()='View Cart']", "View Cart")
  // capture the stamp information and print it
  let result = await captureText(page, "xpath=//*[@class='prod-item-title']", "Capture stamp information")
  // trim and replace multiple spaces with a single space
  // result = result.replace(/\s+/g, ' ').trim()
  result = result.trim()
  console.log("The stamp information is: " + result)
})


test("Weight Watchers", async () => {

  // declare array list with zip codes
  let zipCodes = Array<string>()
  zipCodes.push("11420")
  zipCodes.push("60007")
  
  // initialize a for loop
  for (let i = 0; i < zipCodes.length; i++) {
    await navigate(page, "https://www.weightwatchers.com/us/find-a-workshop/")
    // click on Find a Workshop
    await clickByIndex(page, "xpath=//*[@class = 'menuItemIconWrapper-INk4b']", 0, "Find a Workshop btn")
    // click on In Person
    await click(page, "xpath=//*[@class = 'studioIcon-mbBcr']", "In Person Btn")
    // enter the zip code from array list
    await sendKeys(page, "xpath=//*[@id='location-search']", zipCodes[i], "Zip Code Location Search")
    //click the Search array
    await click(page, "//*[@class = 'rightArrow-C_sUu']", "Click Search Arrow")
    // click by index the first studio link
    await clickByIndex(page, "//*[@class = 'container-k2b9Z']", 0, "Click Studio Link")
    // store the address for the studio in a variable and print
    let studioAddress = await captureText(page, "//*[@class = 'address-FnT8k']", "Studio Address")
    console.log("The Studio Address is: " + studioAddress)
    // scroll to schedule
    await scrollPixels(page, 0, 500)
    // store the workshop table in a variable and print
    let workshopTable = await captureText(page, "//*[@class = 'workshopSchedule-2zUZD']", "Workshop Table")
    console.log(workshopTable)
  }
})