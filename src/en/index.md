---
title: Home
layout: layout/page_with_posts.njk

pagination:
  data: collections.posts_en
  size: 10
  reverse: true
  alias: posts

description: Fundamenty, Eleventy Starter kit with multilingual support and more.
keywords: ["eleventy", "ssg", "JAMStack", "starter"]
---
<div
    style="background-image:
           url('{{ "/images/background.jpg"  | url}}');
    height:200px;
    background-size: 100%;
    background-position:center;">&nbsp;</div>

# Build your own JAMStack site!

The world is waiting for you to share your knowledge!

## Fundamenty, the fundamental Eleventy starter project

Just clone the [repo](https://github.com/creasoft-dev/fundamenty), and run
`$yarn serve`

### The project includes following features:
- Multi-language support (based on folder structure)
- Syntax highlighting with [Prism](https://prismjs.com/)
- Integration with [Algolia](https://www.algolia.com/) (autocomplete search box)
- [Google Analytics](https://analytics.google.com/)
- Edit on GitLab / GitHub
- Generation of `robots.txt` and `sitemap.xml` files for SEO
- Auto deploy in Github using [GitHub Actions](https://docs.github.com/en/actions) script to deploy on GitHub Pages
- Auto deploy in GitLab using GitLab-CI
- CLI tool to initialize site and generate skeleton content file

*New*: Layout for [Technology Radar](https://www.thoughtworks.com/radar). For more detail see [/en/radar/]({{ '/en/radar/' | url }})


### The project uses
- [TailwindCSS](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [dotenv](https://github.com/motdotla/dotenv)



### Credits
- Initial project setup [Eleventy+Webpack](https://statickit.com/guides/eleventy-webpack) and [Eleventy+Tailwind](https://statickit.com/guides/eleventy-tailwind) from statickit.com.
- Theme based on [Tailwind Help-Article](https://github.com/tailwindtoolbox/Help-Article) from tailwindtoolbox
- Multilingual based on [this article](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) by Jérôme Coupé.
- Integration with Algolia based on [this article](https://www.raymondcamden.com/2020/06/24/adding-algolia-search-to-eleventy-and-netlify) and [this other](https://www.raymondcamden.com/2020/07/01/adding-algolia-search-to-eleventy-and-netlify-part-two)
