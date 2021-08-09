Third Party Services: Google Analytics
======================================

This page will explain how to create account on Google Analytics and integrate with the site.

## Google Analytics

### Creating a Google Analytic Account
If you do not have a google account (gmail account), create one. If you have it, proceed with the following steps:

1. Go to [Google Analytics](https://analytics.google.com/) page. If it is the first time, it will 
show you a button **Setup for free**. Press the button.
2. The Account Creation is a three steps form.
    1. In the 'account setup', enter the account name, your website name. Then press Next.
    2. In the 'What do you want to measure' chose web and press next.
    3. In the 'Property setup' 
        - Website Name: your website name
        - Website URL: select `https://` and enter your page url.
        - Fill in the rest accordingly, and press **Create**
    4. Check the 'I accept ...' and press **I Accept** button.
3. Copy the Tracking ID, the word that starts with `UA-`, that's the value that you will enter
for GOOGLE_TAG_ID variable in your CI/CD.

### Configuring GitLab CI/CD variable

1. In GitLab, go to menu **Settings** --> **CI/CD**
2. Click the button **Expand** on the Variable section.
3. Press the **Add Variable** Button.
4. Enter the in `Key` enter `GOOGLE_TAG_ID` and in `Value` enter the `UI-XXXX` value you copied 
from the Google Analytics page.
5. Redeploy by going to **CI/CD** menu and click on the las successful deploy and press the Retry icon.
