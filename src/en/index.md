---
title: Home
layout: layouts/page_with_posts.njk

pagination:
  data: collections.posts_en
  size: 10
  reverse: true
  alias: posts

---
<div 
    style="background-image:
           url('{{ "/images/background.jpg"  | url}}'); 
    height:200px;
    background-size: 100%; 
    background-position:center;">&nbsp;</div>

# Build your own JAMStack site.

The world is waiting for you to share your knowledge!

## Fundamenty, the fundamental Eleventy starter project

Just clone the [repo](https://gitlab.com/creasoft-dev/projects/fundamenty), and `yarn build && yarn serve:eleventy`

### The project includes following features:
- Multi-language support
- Integration with Algolia (autocomplete search box)
- Google Analytics
- Edit on GitLab/GitHub
- Generation of `robots.txt` and `sitemap.xml`
- GitHub Workflow Actions script to deploy on GitHub Pages
- GitLab-CI script to deploy on GitLab Pages

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
