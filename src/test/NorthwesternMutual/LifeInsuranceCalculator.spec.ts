import { test, expect, Page } from '@playwright/test'

let page: Page

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage()
})

test("Life Insurance Calculator", async () => {
  

  
}) // end of Life Insurance Calculator test