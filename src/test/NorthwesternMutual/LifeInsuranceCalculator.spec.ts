import { test, expect, Page } from '@playwright/test'
import { captureText, click, clickByIndex, hoverByIndex, navigate, sendKeys } from '../../main/ReusableActions'

let page: Page

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
})

test("Life Insurance Calculator", async () => {
  await navigate(page, "https://www.northwesternmutual.com")
  // hover over Insurance
  await hoverByIndex(page, "//*[@class='nmx-nav-link-container nmx-nav-link-primary-container']", "Hover over Insurance", 2)
  // click Life Insurance Calculator
  await click(page, "//*[@id='nmx-nav-link-primary-sub-level2-life-insurance-calculator']", "Click Life Insurance Calculator")
  // click Calculate It (press Enter? see if this works instead of clicking all the Submit buttons)
  await click(page, "//*[@id='calculateItButton']", "Calculate button")
  // click dropdown to Select an Option
  await click(page, "//*[@class='downArrow']", "Click Dropdown for Dependents")
  // click "Just Me"
  await click(page, "//*[text()='Just me']", "Select Just Me")
  // press enter
  await page.keyboard.press("Enter")
  // enter zip code
  await sendKeys(page, "//*[@placeholder='Enter U.S. ZIP code']", "11420", "Enter Zip Code")
  // press enter
  await page.keyboard.press("Enter")
  // click dropdown for selecting gender
  await click(page, "//*[text()='Select gender']", "Dropdown for gender")
  // select "Female"
  await click(page, "//*[text()='Female']", "Select female")
  // press enter
  await page.keyboard.press("Enter")
  // enter age
  await sendKeys(page, "//*[@class='calculator__textinput__base___q7ZGB']", "37", "Enter age")
  // press enter
  await page.keyboard.press("Enter")
  // wait a second for page to load
  await page.waitForTimeout(1500)
  // enter income per year
  await sendKeys(page, "//*[@class='calculator__textinput__base___q7ZGB']", "80000", "Enter income")
  // press enter
  await click(page, "//*[@id='submitButton']", "Enter Income button")
  // click dropdown for Monthly Expenses
  await click(page, "//*[@class= 'css-151xaom-placeholder selectInput__placeholder']", "Dropdown for Monthly Expenses")
  // select $6000
  await click(page, "//*[text()='$6,000']", "Select $6000")
  // hit enter or Submit button
  await click(page, "//*[@id='submitButton']", "Submit button, monthly expenses")
  // wait for a second for page to load
  await page.waitForTimeout(1000)
  // select "No" for "Do you have a mortgage"
  await clickByIndex(page, "//*[@class='calculator__radioButton__base___2ynfs calculator__radioButton__baseline___2HnL2']", 1, "Select No")
  await page.waitForTimeout(1000)
  // press submit button
  await click(page, "//*[@id='submitButton']", "Submit button for No Mortgage")
  // click dropdown for Other Debt
  await page.waitForTimeout(1000)
  await click(page, "//*[text()='Select a range']", "Dropdown for Other Debt")
  // select Less than $50k
  await page.waitForTimeout(1000)
  await click(page, "//*[text()='Less than $50,000']", "Select Less than $50k debt")
  // press enter
  await page.keyboard.press("Enter")
  // click dropdown for Value of Other Assets
  await clickByIndex(page, "//*[@id='assets']", 1, "Dropdown for Assets")
  // select Less than $50k
  await click(page, "//*[text()='$300,001 - $400,000']", "Select $300k-$400k Assets")
  // Press "see my estimate" button
  await click(page, "//*[@id='submitButton']", "See estimate button")
  // capture results
  let results = await captureText(page, "//*[@class='calculator__resultsHeader__base___RNhZj']", "Captured Results")
  // print results
  console.log(results)
}) // end of Life Insurance Calculator test