---
title: Inicio
layout: layout/page_with_posts.njk

pagination:
  data: collections.posts_es
  size: 10
  reverse: true
  alias: posts

slogan: "SSG con baterias incluidas"
hero_button_link: "/es"
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

¿Que espera para divulgar su conocimiento? ¡El mundo le espera!


## Fundamenty, el projecto fundamental para creara sitio JAMStack

Simplemente clonee el [repositorio](https://github.com/creasoft-dev/fundamenty), y ejecute
`yarn serve`

### El proyecto trae incluido lo siguiente para, su conveniencia:
- Soporte de multilenguas.
- Integración con motor de búsqueda [Algolia](https://www.algolia.com/) (autocomplete).
- [Google Analytics](https://analytics.google.com/).
- Funcionalidad de editar en GitLab/GitHub.
- Generación de los archivos `robots.txt` y `sitemap.xml` para SEO.
- [GitHub Actions](https://docs.github.com/en/actions) script para instalar en GitHub Pages.
- [GitLab-CI](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/) script para instalar on GitLab Pages.
- Herramienta CLI para inicializar sitio y generar archivo de contenidos.

### El projecto utiliza:
- [TailwindCSS](https://tailwindcss.com/)
- [Webpack](https://webpack.js.org/)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [dotenv](https://github.com/motdotla/dotenv)
