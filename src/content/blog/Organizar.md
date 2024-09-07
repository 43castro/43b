---
title: 'Organizar es el 90% del trabajo'
description: 'Una guía'
pubDate: 2024-09-07
image: ''
tags: ["blog", "astro"]
---

Editar es tedioso. Hay montañas de archivos, todos son enormes, difíciles de gestionar y, de alguna manera, cada disco duro que toco acaba siendo un enorme desorden desastroso. Pero no tiene por qué ser así.

Siempre he tenido problemas con las estructuras de carpetas. Me he roto la cabeza muchas veces intentando encontrar la manera de que la gente pudiera crear árboles de archivos eficientes para no perderse. Incluso me inspiré en desarrolladores y programación, como suelo hacer, para lograr una solución. Hasta que en un momento dado, descubrí algo que cambió para siempre mi forma de organizar los archivos. Principalmente gracias a Obsidian.

La linealidad es útil para algunas aplicaciones. No para notas o edición de vídeo. Los archivos son sólo archivos. Sin duda, se necesita un programa para gestionar correctamente estas enormes (o pequeñas) piezas. En mi opinión, un gestor de archivos debe ser utilizado como un medio para un fin. Un primer paso para crear una estructura de carpetas básica e intuitiva que no deje lugar a errores y facilite la importación a un editor, por ejemplo. Por eso quiero compartir este resguardo a futuro y trabajo simple que realizo en cada proyecto que hago. Organizar así, hace que vaya 10 veces más rápido después.

Seguro que habrá 100 alternativas diferentes pero esto es lo que a mi me funciona. Dando por hecho que uso macOS y tanto Final Cut Pro como DaVinci Resolve.

Junto a [Shortcuts](https://support.apple.com/es-es/guide/shortcuts/welcome/ios) de macOS utilizo otro programa nativo llamado [Automator](https://support.apple.com/es-es/guide/automator/welcome/mac). Este flujo de trabajo me permite no sólo crear una estructura de carpetas sencilla y automatizada cada vez que empiezo un proyecto, sino también algo que se autogestiona. Consulta [[Orden, automatización y carpetas]] para ver la estructura de carpetas en cuestión, el código específico y la explicación de cómo copiarlo.

Creo la estructura básica de carpetas con Shortcuts y luego uso Automator para hacer que cada archivo que suelte en la raíz de esa carpeta del proyecto, se autogestione instantáneamente. Utilizo el formato [ISO 8061](https://es.wikipedia.org/wiki/ISO_8601) y [PascalCase](https://www.theserverside.com/definition/Pascal-case) para nombrar mis carpetas. (ej. 2024-05-28_NombreProyecto)

Luego, una vez que tengo mi árbol de archivos creado y autogestionado, lo importo todo a DaVinci o Final Cut para organizar y clasificar mejor cada archivo. Soy un gran defensor de hacer este proceso de organización dentro del editor en lugar de en el explorador de archivos.

Utiliza siempre [**palabras clave**](https://support.apple.com/es-es/guide/final-cut-pro/ver68416335/mac). Que sea inteligente e intuitivo. No se conectan ideas a través de estructuras de carpetas. Se buscan a través de palabras y frases que relacionan todos los archivos del proyecto. Un archivo puede pertenecer a varias categorías. Si hay una cosa que Obsidian me enseñó acerca de la organización, es que no debe ser lineal, si no justo lo contrario. Esto hace que encontrar archivos sea 10 veces más rápido.

Como un ejemplo rápido voy a demostrar cómo manejo un proyecto simple en Final Cut o DaVinci.

1. Creo los bins/eventos dentro del editor siguiendo esta estructura. Esto me da una base similar a la que tengo dentro de Finder. Este proceso también se puede automatizar, teniendo por ejemplo una biblioteca de proyectos de plantillas [Final Cut Pro](https://castro.eus/blog/fcpx) o DaVinci.
	- Secuencias/Líneas de tiempo
	- Vídeo
	- Audio
	- Gráficos
2. Suelto todos los archivos que correspondan dentro de ese primer bin o evento.
3. Añado palabras clave, roles o colores a cada clip para organizarlo:
	- Secuencias/Timelines (smart bins/smart collections*)
		- Corte 1
		- Corte 2 60s
	- Vídeo (palabras clave ↓)
		- Lugares
		- Tipo de cámara
		- XX fps
		- Tomas circulares
	- Audio (palabras clave ↓)
		- Diálogo
		- Música
		- SFX
		- Atmósfera
	- Gráficos (palabras clave ↓)
		- Logotipos
		- Animaciones
		- VFX
4. Selecciono los [puntos de entrada y salida](https://support.apple.com/es-es/guide/final-cut-pro/ver28cca92/mac) en el explorador. Final Cut lo hace mejor que DaVinci, pero intento evitar el estilo de edición [«Pancake timeline»](https://motionarray.com/learn/premiere-pro/pancake-timeline-premiere-pro/) o «Selects sequence». Lo he intentado muchas veces y es un lío que confunde a todo el mundo a la larga y hace perder tiempo.
5. Empiezo a editar

Listo!

Este sencillo proceso, que puede automatizarse en su mayor parte, ahorra una enorme cantidad de tiempo. Ha dado solución a muchas de las quejas que he tenido durante el proceso de edición de los proyectos en los que he participado. La organización nos ayuda a ser más eficientes y da margen para entender mejor las herramientas que utilizamos. Y, por último, ayuda al asistente de edición que abra este proyecto 3 años más tarde, a saber exactamente dónde está el archivo que buscaba.
