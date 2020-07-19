Fundamenty
==========

Eleventy starter repository showing how to build a multilingual website with the 
Eleventy static site generator.

See live on 
- [Netlify](https://fundamenty.netlify.app/) - [![Netlify Status](https://api.netlify.com/api/v1/badges/78a62ba4-e24e-45ca-ae9a-62306bf9bed8/deploy-status)](https://app.netlify.com/sites/fundamenty/deploys)
- [GitLab Pages](https://creasoft-dev.gitlab.io/projects/fundamenty/en/)

Features included in this starter
- Multi-language support
- Integration with Algolia (autocomplete search box)
- Google Analytics
- Edit on GitLab / GitHub
- Generation of `robots.txt` and `sitemap.xml`
- GitHub Workflow Actions script to deploy on GitHub Pages
- GitLab-CI script to deploy on GitLab Pages

The project uses
- [TailwindCSS](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [dotenv](https://github.com/motdotla/dotenv)

## Prerequisites
Minimal prerequisite is [node](https://nodejs.org/). Although latest version of node comes with
npm package manager, in this project I am using [yarn](https://yarnpkg.com/). 

## Installation
Just clone or download the project, and rename it accordingly
Then install dependencies:
```
$ yarn install
# or
$ npm install
```

## Serving the Site Locally
To build and serve locally for development
```
$ ELEVENTY_ENV=development yarn build && ELEVENTY_ENV=development yarn serve:eleventy
```
If you are using `npm` you can replace `yarn build` with `npm run build`, etc.

## Configuring CI/CD
This project includes `.gitlab-ci.yml` that deploys the site on Gitlab pages. But you can deploy
on any other SSG hosting such as GitHub pages, Netlify, [surge.sh](https://surge.sh/)

You may provide the following environment variables for the deployment.

The `WEB_PATH_PREFIX` variable is for the prefix path, which is required if your site lives in a different subdirectory. Needed for GitLab/GitHub Pages. 
The rest of the variables are optional. If not provided, the feature will just be disabled.

- `WEB_ROOT_URL`           - Website's root URL, used to generate site.xml
- `WEB_PATH_PREFIX`        - The URL context path. Needed when site lives in non-root path.
- `GOOGLE_TAG_ID`          - Google Analytics tag ID (it starts with `UA-`)
- `ALGOLIA_APP_ID`         - Algolia's APP ID 
- `ALGOLIA_INDEX_NAME`     - Algolia's Index name
- `ALGOLIA_SEARCH_API_KEY` - Algolia's Search only API Key
- `ALGOLIA_ADMIN_API_kEY`  - Algolia's Admin API Key (for pushing posts to Algolia index)

For creating accounts in Google Analytics and Algolia, see the [3RD_PARTY_SERVICES.md](3RD_PARTY_SERVICES.md)

## Customizing the Site and Working with Content
Now that you have installed and served the starter project, you can configure the site branding in `./src/_data/site.js`.
Then create site pages under `./src/{lang}/pages`, and articles/posts under `./src/{lang}/posts`.
Those two location includes [directory data files](https://www.11ty.dev/docs/data-template-dir/) with contextual data fields `locale` and `tags`.

The top menu can be customized by modifying the file in `./src/_data/l10n/menu_{lang}.json`.

When you have links to local asset use the `url` filter, e.g. `{{ yourUrl | url }}`

### Localization
The directory with the name of locales under `./src`, e.g. `en` and `es` defines the locale of the 
content under that directory. This is done through  the  directory data file.

The localization of the navigation and translation were externalized in `./src/_data/l10n` directory.

The list of active locales are defined in `./src/_data/site.js` data file.
Based on the list of languages, the eleventy configuration file - `/.elevevnty.js` generates 
post collections per each locale, which can be accessed by the name:
`collections.posts_{locale}`.


### Site Content Directory Structure
The site content is under `./src`.
```
├───{lang}       - Contents in given locale 
│   ├ {lang}.json    - Common front matter for all the contents in Spanish 
│   ├───pages    - Site pages
│   └───posts    - Site posts (e.g. blog articles)
├───images       - Images
├───scripts      - 
│   ├ main.js    - Main JS file webapack uses to build the asset bundle.
│   └ algolia.js - Site posts (blog articles)
├───styles       - Tailwind's CSS styling
├───_data        - Data/configuration file.
│   ├ site.js    - Main site configuration data.
│   ├───l10n     - localization resource bundles
└───_includes    - Eleventy's inclusion files, as specified in the front matter 
    └───layouts  - Layouts
```

## Future Enhancements
- Comment (Commmento, Disqus, Facebook comment, or Custom with Firebase)
- Add `markdown` classname to markdown generated tags

## For new Eleventy + TailwindCSS project
```
yarn add --dev @11ty/eleventy moment @11ty/eleventy-plugin-syntaxhighlight
yarn add --dev markdown-it markdown-it-attrs
yarn add --dev webpack webpack-cli npm-run-all rimraf
yarn add --dev tailwindcss autoprefixer mini-css-extract-plugin css-loader postcss-loader
```

## Next Steps
Fore more advanced Eleventy, read the [it documentation](https://www.11ty.dev/docs/).

Especially the [documentation on page data](https://www.11ty.dev/docs/data-eleventy-supplied/) is useful.


## Sites Built with Fundamenty
- [creasoft.dev](https://creasoft.dev)
- [empoderemosmas.com](https://empoderemosmas.com)


## Credits
- Initial project setup [Eleventy+Webpack](https://statickit.com/guides/eleventy-webpack) and [Eleventy+Tailwind](https://statickit.com/guides/eleventy-tailwind) from statickit.com.
- Theme based on [Tailwind Help-Article](https://github.com/tailwindtoolbox/Help-Article) from tailwindtoolbox
- Multilingual based on [this article](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) by Jérôme Coupé.
- Integration with Algolia based on [this article](https://www.raymondcamden.com/2020/06/24/adding-algolia-search-to-eleventy-and-netlify) and [this other](https://www.raymondcamden.com/2020/07/01/adding-algolia-search-to-eleventy-and-netlify-part-two)
- [GitHub Actions for GitHub Pages](https://github.com/marketplace/actions/github-pages-action)
