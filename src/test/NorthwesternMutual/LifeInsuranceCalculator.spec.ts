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
  await click(page, "//*[text()='Just me']", "Select Just Me")
  await page.keyboard.press("Enter")
  // enter zip code
  await sendKeys(page, "//*[@placeholder='Enter U.S. ZIP code']", "11420", "Enter Zip Code")
  await page.keyboard.press("Enter")
  // click dropdown for selecting gender
  await click(page, "//*[text()='Select gender']", "Dropdown for gender")
  // select "Female"
  await click(page, "//*[text()='Female']", "Select female")
  await page.keyboard.press("Enter")
  // enter age
  await sendKeys(page, "//*[@class='calculator__textinput__base___q7ZGB']", "37", "Enter age")
  await page.keyboard.press("Enter")
  // enter income per year
  await sendKeys(page, "//*[@class='calculator__textinput__base___q7ZGB']", "80000", "Enter income")
  await click(page, "//*[@id='submitButton']", "Enter Income button")
  // click dropdown for Monthly Expenses
  await click(page, "//*[@class= 'css-151xaom-placeholder selectInput__placeholder']", "Dropdown for Monthly Expenses")
  await click(page, "//*[text()='$6,000']", "Select $6000")
  await click(page, "//*[@id='submitButton']", "Submit button, monthly expenses")
  // select "No" for "Do you have a mortgage"
  await click(page, "//*[text()='no']", "Select No")
  await page.keyboard.press("Enter")
  // click dropdown for Other Debt
  await click(page, "//*[text()='Select a range']", "Dropdown for Other Debt")
  await click(page, "//*[text()='$300,001 - $400,000']", "Select $300k-$400k")
  await page.keyboard.press("Enter")
  // capture results
  let results = await captureText(page, "//*[@class='calculator__resultsHeader__base___RNhZj']", "Captured Results")
  console.log(results)
}) // end of Life Insurance Calculator test