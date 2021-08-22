Fundamenty
==========

Eleventy template project with multilingual support, search and more!

See live on
- [Netlify](https://fundamenty.netlify.app/) - [![Netlify Status](https://api.netlify.com/api/v1/badges/78a62ba4-e24e-45ca-ae9a-62306bf9bed8/deploy-status)](https://app.netlify.com/sites/fundamenty/deploys)
- [GitHub Pages](https://creasoft-dev.github.io/fundamenty/)
- [GitLab Pages](https://creasoft-dev.gitlab.io/projects/fundamenty/)

### Features

- Multi-language support
- Syntax highlighting with [Prism](https://prismjs.com/)
- Integration with [Algolia](https://www.algolia.com/) (autocomplete search box)
- [Google Analytics](https://analytics.google.com/)
- Edit on GitLab / GitHub
- Generation of `robots.txt` and `sitemap.xml`
- [GitHub Actions](https://docs.github.com/en/actions) script to deploy on GitHub Pages
- [GitLab-CI](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/) script to deploy on GitLab Pages
- CLI tool to initialize site and generate skeleton content file

### Included Themes

A theme is a collection of templates (under the `_includes` folder) that generates a specific type of content.  An example is the **Technology Radar**, which renders a page for the radar and a page for each of the blips.

-  [Technology Radar](https://www.thoughtworks.com/radar). For more detail see [./src/_includes/radar/](./src/_includes/radar/)
- **(NEW)** Product Catalog - Catalog of products, with search.
- **(NEW)** API Browser - OpenAPI browser, based on Swagger UI.

### The Project Uses

Fundamenty is possible thanks to these and other wonderful open source projects.

- [TailwindCSS](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [dotenv](https://github.com/motdotla/dotenv)


## Installing and Running

### Prerequisites
Minimal prerequisite is [node](https://nodejs.org/). Although latest version of node comes with
npm package manager, I recommend using [yarn](https://yarnpkg.com/).

### Local Installation 

1. Clone the project
```sh
$ git clone git@github.com:creasoft-dev/fundamenty.git <mysite>
```
You can also download.
```sh
$ curl https://github.com/creasoft-dev/fundamenty/archive/refs/heads/main.zip -L -o fundamenty.zip
```

2. Then install dependencies.
```sh
$ yarn install
# or
$ npm install
```

3. Modify the file `fundamenty.site.yml` accordingly.

4. And finally, run the site initialization script.
```sh
$ yarn fun-cli site/init --deletegit
```
> Note: I you cloned the project, the `--deletegit` argument will delete the `.git` directory.

The initialization script will generate two files: `./src/_data/site.json.gen` and `./.env.gen`. You should rename those
files by removing the `.gen` extension. 

### Running the Site Locally
To build and serve locally for development
```sh
$ yarn serve
```
If you are using `npm` you can replace `yarn build` with `npm run build`.

### Deploying in GitHub/GitLab Pages
This project includes scripts to automatically deploy on GitHub Pages and GitLab Pages. GitHub uses `.github\workflows\deploy-gh-pages.yml`, and GitLab uses `.gitlab-ci.yml` respectively.

But you can also deploy on other SSG hosting providers such [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), [Firebase](https://firebase.google.com/), or [surge.sh](https://surge.sh/).

You may provide the following environment variables for the deployment.

- `WEB_ROOT_URL`           - Website's root URL, used to generate site.xml
- `WEB_PATH_PREFIX`        - The URL context path. Needed when site lives in non-root path.
- `GOOGLE_TAG_ID`          - Google Analytics tag ID (it starts with `UA-`)
- `ALGOLIA_APP_ID`         - Algolia's APP ID
- `ALGOLIA_INDEX_NAME`     - Algolia's Index name
- `ALGOLIA_SEARCH_API_KEY` - Algolia's Search only API Key
- `ALGOLIA_ADMIN_API_kEY`  - Algolia's Admin API Key (for pushing posts to Algolia index)
- `DISQUS_SITE_NAME`       - Disqus' site name, for commenting.

> Note: The `WEB_PATH_PREFIX` variable is for the prefix path, which is required if your site lives in a different subdirectory. Needed for GitLab/GitHub Pages.
> The rest of the variables are optional. If not provided, the feature will just be disabled.


## Customizing the Site and Managing Content

Then create site pages under `./src/{lang}/pages`, and articles/posts under `./src/{lang}/posts`.
Those two location includes [directory data files](https://www.11ty.dev/docs/data-template-dir/) with contextual data fields `locale` and `tags`.

The top menu can be customized by modifying the file in `./src/_data/l10n/menu_{lang}.json`.

When you have links to local asset use the `url` filter, e.g. `{{ yourUrl | url }}`

### Localization
Fundamenty content is organized by language. For example all English content is under `./src/en` directory.

The list of available locales are defined in `src/_data/site.json` file.

The localization resources, aka language bundles, are located in `./src/_data/l10n` directory.

Based on the list of languages, the Eleventy generates `post` collections per each locale, which can be accessed by the name: `collections.posts_{lang}`.
> If you want to have segregated collections by language of other collections, you will need to add them in `.eleventy.js` file.


### Site Content Directory Structure
The site content is under `./src`.
```
├───{lang}        - Contents in given locale
│   ├ {lang}.json - Common front matter for all the contents in Spanish
│   ├── pages     - Site pages
│   ├── posts     - Site posts (e.g. blog articles)
│   ├── products  - Product catalog
│   └── radar     - (Technology) Radar
├───images        - Images
├───scripts      
│   ├─ main.js    - Main JS file webapack uses to build the asset bundle.
│   └─ algolia.js - Site posts (blog articles)
├───styles        - Tailwind's CSS styling
├───_data         - Data/configuration file.
│   ├─ site.js    - Main site configuration data.
│   ├──l10n       - localization resource bundles
└───_includes     - Eleventy's inclusion files, as specified in the front matter
    ├─ apibrowser - API spec (Swagger) browser
    ├─ products   - Product Catalog layout (Architecture Repository)
    ├─ layout     - Default layouts
    └─radar       - Technology Radar layout
```

### Creating a Content
You can use `fundamenty-cli` tool to create scaffolding files.
For example, to create a post:
```
$ yarn fun-cli post/item "My Post Title" -l en
```
Will generate under `/src/en/posts/yyyy-mm-dd-my-post-title.md` file. Then just populate the front matter and the body with Markdown.

### Integrating with External Services

- [docs/GOOGLE_ANALYTICS.md](docs/GOOGLE_ANALYTICS.md)
- [docs/ALGOLIA.md](docs/ALGOLIA.md)
- [docs/ELASTICSEARCH.md](docs/ELASTICSEARCH.md)


## Next Steps
Fore more advanced Eleventy, read [its documentation](https://www.11ty.dev/docs/).

Especially the [documentation on data](https://www.11ty.dev/docs/data-eleventy-supplied/) is useful.


## Sites Built with Fundamenty
- [creasoft.dev](https://creasoft.dev)
- [empoderemosmas.com](https://empoderemosmas.com)


## Future Enhancements to this Project
- Add more scripts to `tools/fundamenty-cli.js`.
- Add `markdown` classname to markdown generated tags.
- Add integration with [self-hosted open source commenting](https://lisakov.com/projects/open-source-comments/). 


## Credits
- Initial project setup [Eleventy+Webpack](https://statickit.com/guides/eleventy-webpack) and [Eleventy+Tailwind](https://statickit.com/guides/eleventy-tailwind) from statickit.com.
- Theme based on [Tailwind Help-Article](https://github.com/tailwindtoolbox/Help-Article) from tailwindtoolbox
- Multilingual based on [this article](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) by Jérôme Coupé.
- Integration with Algolia based on [this article](https://www.raymondcamden.com/2020/06/24/adding-algolia-search-to-eleventy-and-netlify) and [this other](https://www.raymondcamden.com/2020/07/01/adding-algolia-search-to-eleventy-and-netlify-part-two)
- [GitHub Actions for GitHub Pages](https://github.com/marketplace/actions/github-pages-action)
