import { Page, test as baseTest, chromium as baseChromium, BrowserContext, Browser} from "@playwright/test";
import { LoginPage } from "../page-object/loginPage";

type basePage = {
    loginPage: LoginPage
}

export const test = baseTest.extend<basePage>({
    loginPage: async({page},use) => {
        await page.goto("https://takeprofit.avidi.tech/")
        let loginPage = new LoginPage(page)
        await use(loginPage)
    }
})

export const chromium = baseChromium