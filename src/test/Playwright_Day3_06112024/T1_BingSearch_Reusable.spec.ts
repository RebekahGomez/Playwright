import { test, expect, Page } from '@playwright/test'
import { captureText, click, navigate, sendKeys, submit } from '../../main/ReusableActions'

let page: Page

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
})

test("Search for a keyword on Bing", async () => {
  // navigate to Bing homepage
  await navigate(page, "https://www.bing.com/")
  // enter a keyword in the search field
  await sendKeys(page, "xpath=//*[@name='q']", "playwright", "Search Field")
  // if the program is too fast, you may need to add an await and/or use the "Enter" command instead of
  // clicking on the "search" icon -- that's what we had to do here
  await page.waitForTimeout(1000)
  await submit(page)
  // click on search icon
  // await click(page, "//*[@id='search_icon']", "Search Icon")
})

test("Capture the search result", async () => {
  // capture the search result
  let result = await captureText(page, "xpath=//*[@id='b_tween']", "Search Result")
  let arrayResult = result.split(" ")
  console.log("The search result is " + arrayResult[1])
})