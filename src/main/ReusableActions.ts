import { Page } from '@playwright/test'
import exp from 'constants'

// navigating to any website reusable method
export async function navigate(page:Page, url:string) {
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

// hover reusable method
export async function hover(page: Page, xpath: string, elementName: string) {
  console.log("Hovering over " + elementName)
  await page.locator(xpath).hover()
}

// hover by index reusable method
export async function hoverByIndex(page:Page, xpath: string, elementName: string, index: number=0) {
  console.log("Hovering over " + elementName + " at index " + index)
  await page.locator(xpath).nth(index).hover()
}

// scroll by pixels reusable method
export async function scrollPixels(page:Page, x:number, y:number) {
  console.log("Scrolling " + x + ", " + y + " pixels")
  await page.mouse.wheel(x,y)
}

// click by index reusable method
export async function clickByIndex(page:Page, xpath:string, index:number, elementName:string) {
  console.log("Clicking on " + elementName + " at index " + index)
  await page.locator(xpath).nth(index).click()
}