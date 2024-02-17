import { test, chromium } from "./fixture-login";
import { LoginPage } from "../page-object/loginPage";
import { ControlCenterPage } from "../page-object/ControlCenterPage";

test("should check user logIn with fixture and valid data", async ({ loginPage, page }) => {
  await page.goto("https://takeprofit.avidi.tech/")
  await loginPage.login()
});

test("should check user logIn with valid data", async ({ page }) => {
  const loginPage = new LoginPage(page)
  const controlCenterPage = new ControlCenterPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("Qwe123**")
  await loginPage.getUserLoginButton.click()
  await controlCenterPage.controlCenterPage.isVisible()

  // await expect(page).toHaveURL("https://takeprofit.avidi.tech/control-center")
});

test("should check user logIn with invalid Email", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("invalid@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("Qwe123**")
  await loginPage.getUserLoginButton.click()

  // expect(() => {
  //   throw new Error('User not found.');
  // }).toThrowError();
});

test("should check user logIn with invalid Password", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("auto_test_invalid@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("Qwe123$$")
  await loginPage.getUserLoginButton.click()

  // expect(() => {
  //   throw new Error('User not found.');
  // }).toThrowError();
});

test("should check user logIn with empty Email field", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("")
  await loginPage.getPasswordField.pressSequentially("Qwe123**")
  await loginPage.getUserLoginButton.click()

  // expect(() => {
  //   throw new Error('Email is required');
  // }).toThrowError();
});

test("should check user logIn with empty Password field", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("auto_test_takeprofit@yopmail.com")
  await loginPage.getPasswordField.pressSequentially("")
  await loginPage.getUserLoginButton.click()

  // expect(() => {
  //   throw new Error('Password is required');
  // }).toThrowError();
});

test("should check user logIn with empty Email and Password fields", async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.getOpenMenuBtn.click()
  await loginPage.getLoginBtn.click()
  await loginPage.getEmailField.pressSequentially("")
  await loginPage.getPasswordField.pressSequentially("")
  await loginPage.getUserLoginButton.click()

  // expect(() => {
  //   throw new Error('Email is required');
  // }).toThrowError();

  // expect(() => {
  //   throw new Error('Password is required');
  // }).toThrowError();
});