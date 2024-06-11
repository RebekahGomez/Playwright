import { test, expect, Page } from '@playwright/test'

let page: Page
test.beforeAll(async({browser}) => {
  page = await browser.newPage()
})

test("Search for cars in Google using an array and for loop", async () => {
  // how to declare a linear array
  // let cars = ["BMW", "Toyota", "Audi"]

  // how to declare a arrayList
  let cars2 = Array<string>()
  cars2.push("Mitsubishi")
  cars2.push("Mercedes")
  cars2.push("Ford")

  for (let i = 0; i < cars2.length; i++) {
    // navigate to Google
    await page.goto("https://www.google.com/")
    // search for cars
    await page.locator("xpath = //*[@name = 'q']").fill(cars2[i])
    await page.keyboard.press("Enter")
    // capture search results
    let searchResult = await page.locator("xpath = //*[@id='result-stats']").textContent()
    console.log("For " + cars2[i] + " the search result is " + searchResult)
  }
})