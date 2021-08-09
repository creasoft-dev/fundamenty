Third Party Service: Algolia
============================

This page will explain how to create account on Algolia and integrate with the site.


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
We don't want to check the `.env` file, it is already included in `.gitignore`. 

Go to GitLab CI/CD and create variables for all the values obtained above
