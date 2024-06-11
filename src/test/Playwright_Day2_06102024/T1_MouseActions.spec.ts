import { test, expect, Page } from '@playwright/test'

let page: Page
test.beforeAll(async({browser}) => {
  page = await browser.newPage()
})

test("Click on Quick Tools using mouse actions on USPS", async () => {
  await page.goto("https://www.usps.com/")
  // hover over Quick Tools
  await page.locator("xpath = //*[text() = 'Quick Tools']").hover()
  // click on Track a Package
  await page.locator("xpath = //*[text() = 'Track a Package']").click()
  // scroll to the bottom of the page using mouse action
  await page.mouse.wheel(0, 1000)
  // set the time out to see the scrolling action
  await page.waitForTimeout(5000)
})