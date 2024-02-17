import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly getOpenMenuBtn: Locator;
  readonly getLoginBtn: Locator;
  readonly getEmailField: Locator;
  readonly getPasswordField: Locator;
  readonly getUserLoginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getOpenMenuBtn = page.locator("//*[@id='header']/nav/button")
    this.getLoginBtn = page.locator("//A[@_ngcontent-serverapp-c163=''][text()='Login']")
    this.getEmailField = page.locator("//input[@id='username']");
    this.getPasswordField = page.locator("//input[@id='password']");
    this.getUserLoginButton = page.getByRole("button", { name: "LOGIN" });
  }

  async goto() {
    await this.page.goto("https://takeprofit.avidi.tech/");
  }

  async login(email = "auto_test_takeprofit@yopmail.com", password = "Qwe123**") {
    await this.getOpenMenuBtn.click()
    await this.getLoginBtn.click()
    await this.getEmailField.fill(email)
    await this.getPasswordField.fill(password)
    await this.getUserLoginButton.click()
  }
}