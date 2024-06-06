import { test, expect } from '@playwright/test'

// define the page on beforeAll which runs before all the tests
// test.beforeAll(async ({ browser }) => {
//   page = await browser.newPage()
// })

test("Yahoo search results test", async ({ context }) => {
  // open a new page in the test
  let page = await context.newPage()
  await page.goto("https://www.yahoo.com/")
  // search for cars
  await page.locator("xpath = //*[@id='ybar-sbq']").fill("cars")
  // hitting "Enter" will open a new tab
  let [newPage] = await Promise.all
    (
      [
        // waits for new tab to open (make sure you have a comma "," after each line - this is an array)
        context.waitForEvent('page'),
        // triggers the new tab to open by pressing "Enter"
        await page.keyboard.press("Enter")
    ]
  ) // end of promise function
  // get search results from new tab
  let searchResult = await newPage.locator("xpath = //*[@class = 'fz-13 lh-n fc-reflightgray']").textContent()
  console.log(searchResult)
  // switch back to previous tab
  await page.bringToFront()
})

