Third Party Services
====================

The starter uses two 3rd party services: 
1. Google Analytics, to keep track of the page visit statistics
2. Algolia Search, to provide search capability

This page will explain how to create account on each service and integrate with the site.

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

## Algolia Search

Algolia provides a free-tier account allowing you to index up to 10K index entries without cost.

### Creating Account
1. go to [Algolia](https://www.algolia.com/) site and click on Free trial.
    - Even if it says "free trial" as long as your index size stays under 10k, you will not be 
    chared.
2. Since you already created a Google Account you can select Google as the sign up mechanism. 
Fill in the form and press **Next**.
3. Choose your datacenter location, the place closest to you.
4. Chose the type of project that fits best. Then press **Next**.

Now you have an account. The next step is to create an index.

### Creating an Index
1. Go to Dashboard and accept the terms and conditions.
2. Sine it's your first time, you will see a **Create Index** button, click it.
3. In the "Create index" form, enter the name of your index, something like prod_{your_website}_website 

That's the value you will use for ALGOLIA_INDEX_NAME env variable.

Now you have an index, the next step is to obtain the different keys

Go to the left menu and scroll down until you see **API keys**, click it.

### Configuring local env and GitLab CI/CD variable

In the root directory create a `.env` file and plug in the values for:
```
ALGOLIA_APP_ID=
ALGOLIA_INDEX_NAME=
ALGOLIA_SEARCH_API_KEY=
ALGOLIA_ADMIN_API_kEY=
```
And save the `.env` file. This will enable search in the local run.

Go to GitLab CI/CD and create variables for all the values obtained above
