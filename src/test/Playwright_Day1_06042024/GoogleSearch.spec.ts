import { test, expect, Page } from '@playwright/test'

let page: Page

// define the page on beforeAll which runs before all the tests
test.beforeAll(async({browser}) => {
  page = await browser.newPage()
})

test("Search for BMW", async () => {
  await page.goto("https://www.google.com/")
  // search for BMW
  await page.locator("xpath =//*[@name = 'q']").fill("BMW")
  // submit the search field
  await page.keyboard.press("Enter")
}) // end of test 1

test("Capture the search result", async () => {
  let searchResult = await page.locator("//*[@id='result-stats']").textContent()
  // you can put xpath = ... if it's not working
  console.log(searchResult)
  let arrayResult = searchResult.split(" ")
  console.log("BMW search number is " + arrayResult[1])
})



