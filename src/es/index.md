---
title: Inicio
layout: layouts/page_with_posts.njk

pagination:
  data: collections.posts_es
  size: 10
  reverse: true
  alias: posts

description: Fundamenty, Proyecto plantilla de Eleventy.
keywords: ["eleventy", "ssg", "sitios web", "plantilla"]
---

<div 
    style="background-image:
           url('{{ "/images/background.jpg"  | url}}'); 
    height:200px;
    background-size: 100%; 
    background-position:center;">&nbsp;</div>

# Construya su propio sitio web

¿Que espera para divulgar su conocimiento? El mundo le espera!


## Fundamenty, el projecto fundamental para creara sitio JAMStack

Simplemente clonee el [repositorio](https://gitlab.com/creasoft-dev/projects/fundamenty), y ejecute `yarn build && yarn serve:eleventy`

### El proyecto trae incluido lo siguiente para su conveniencia:
- Soporte de multilenguas.
- Integracion con motor de busqueda Algolia (autocomplete).
- Google Analytics.
- Funcionalidad de editar en GitLab/GitHub.
- Generación de los archivos `robots.txt` y `sitemap.xml`.
- GitHub Workflow Actions script para instalar en GitHub Pages.
- GitLab-CI script para instalar on GitLab Pages

### El projecto usa
- [TailwindCSS](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [dotenv](https://github.com/motdotla/dotenv)
