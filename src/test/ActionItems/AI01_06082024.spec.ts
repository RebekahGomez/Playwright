import { test, expect } from '@playwright/test'

// usually we would define the page with beforeAll which runs before all the tests
// test.beforeAll(async ({ browser }) => {
//   page = await browser.newPage()
// })
// let page: Page
// But this doesn't work if a test requires switching tabs, so we create individual
// page instances for each test

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
        // this next line is the action that triggers a new tab to open - either hitting enter or clicking 
        // a certain button such as "search for ___"
        await page.keyboard.press("Enter")
        // and these two lines (22 and 26) are an array that will be stored in the "newPage" variable on line 18
    ]
  ) // end of promise function
  // get search results from new tab
  // let searchResult = await newPage.locator("xpath = //*[@class = 'fz-13 lh-n fc-reflightgray']").textContent()
  let searchResult = await newPage.locator("xpath = //*[@class = 'title mb-0']").nth(0).textContent()
  console.log(searchResult)
  // switch back to previous tab
  await page.bringToFront()
})


test("Northwestern Mutal, What is a Financial Advisor", async ({ browser }) => {
  let page = await browser.newPage();
  await page.goto("https://northwesternmutual.com")
  // click Find a Financial Advisor button
  await page.locator("xpath = //*[@id = 'nmx-nav-link-utility-fafa']").click()
  // click first article "What Is a Financial Advisor"
  await page.locator("xpath = //*[text() = 'What Is a Financial Advisor?']").click()
  // Capture the 3 Key Takeaways
  let keyTakeaways = await page.locator("xpath = //*[@class = 'list list--checks']").textContent()
  console.log(keyTakeaways)
})