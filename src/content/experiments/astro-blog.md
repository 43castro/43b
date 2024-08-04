---
title: 'Blogs con Astro'
description: 'Una guía para entender mejor DaVinci Resolve'
pubDate: 2024-08-04
image: ''
tags: ["blog", "astro"]
---
Documentar me ha ayudado en todos los proyectos que he realizado. [Obsidian](obsidian.md) ha sido mi herramienta de notas pretedeterminada durante los últimos años y aquí es donde tengo toda la base de mi conocimiento. Algo menos ordenada de lo que me gustaría, pero por lo menos sigue la estructura "cerebral" de unir todo ese conocmiento en forma de "links". Inspirado por [Kepano](https://stephango.com), [DHH](https://world.hey.com/dhh) y [Rauno](https://rauno.me), decidí crear un blog simple en el que poder alojar tanto mi progreso como pequeños experimentos que haga en mis ámbitos. 

Use [Astro](https://astro.build) como framework principal, dado que no carga casi Javascript y soporta Markdown, mi tipo de archivo favorito para escribir. Es muy versátil y fácil de configurar. Soporta casi todos los extras posibles (como Tailwind o React si es que lo necesitas) y, sobre todo, es rápido. 

La página está estructura con dos "Layouts" o plantillas. El "Main" es para las páginas principales como el home y el about. Y la plantilla blog es para leer cada artículo. He intentado adaptar con responsive lo mejor que he podido para que la experiencia de lectura sea fácil y cómoda en todo los dispositivos, tanto en modo claro y oscuro.

Astro usa una característica llamada [Content Collections](https://docs.astro.build/en/guides/content-collections/) para organizar los posts de un blog. Se define la colección en un archivo .ts con datos relevantes (título, descripción, etiquetas...) y esos datos de escriben en el [frontmatter](https://frontmatter.codes/docs/markdown) de cada archivo Markdown. Esto asegura orden y claridad. El producto final está desplegado en [Netlify](https://www.netlify.com/) y se actualiza automáticamente según añado o modifico archivos en el [repositorio de Github](https://github.com/43hershel/43b) donde está alojado. 

Después de unas cuantas iteraciones, estoy bastante contento con el resultado final. He aprendido mucho y ahora queda lo más difícil, llenarlo de contenido de calidad. Enseñar me ayuda a aprender. Y espero que cualquiera que pase por aquí pueda disfrutar de alguien a quien le gusta mucho aprender. 

