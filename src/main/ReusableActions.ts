import { Page } from '@playwright/test'

// navigating to any website reusable method
export async function navigate(page: Page, url: string) {
  console.log("Navigate to " + url)
  await page.goto(url)
}

// sendKeys reusable method
export async function sendKeys(page:Page, xpath:string, userValue:string, elementName:string) {
  console.log("Entering a keyword on " + elementName)
  await page.locator(xpath).fill(userValue)
}

// click reusable method
export async function click(page:Page, xpath:string, elementName:string) {
  console.log("Clicking on " + elementName)
  await page.locator(xpath).click()
}

// capture text reusable method
export async function captureText(page:Page, xpath:string, elementName:string) {
  console.log("Capturing the text from " + elementName)
  let result = await page.locator(xpath).textContent()
  return result
}

// press enter on a field
export async function submit(page: Page) {
  console.log("Pressing the Enter button")
  await page.keyboard.press("Enter")
}