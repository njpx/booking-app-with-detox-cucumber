const {Given, Then} = require('@cucumber/cucumber');

Given('I should have welcome screen', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

Given('I tap say hello', async () => {
  await element(by.text('Say Hello')).tap();
});

Then('I should show hello screen after tap', async () => {
    await expect(element(by.text('Hello!!!'))).toBeVisible();
});

Given('I should show world screen after tap', async () => {
    await element(by.text('Say World')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
});