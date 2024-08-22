---
title: 'Espacios virtuales'
description: 'Una guía para introducir espacios virtuales'
pubDate: 2024-06-08
image: ''
tags: ["blog", "astro"]
---
Ningún sistema operativo está hecho para usuarios avanzados. Hablo sobre todo en formas de navegación que lejos de agilizar al usuario, entorpecen la experiencia de uso y ralentizan sobremanera. Demasiados "clicks", pantallas, recursos que nadie usa y mucha carencia de opciones verdaderamente útiles. 

Uso 3 sistemas operativos, Windows, Linux y, sobre todo, macOS porque me gusta probar y cacharrear. Pero por mis necesidades académicas y laborales, me quedo con macOS para programar, editar vídeos, fotos y uso general en combinación con su hardware, Apple Silicon. 

Pero si algo tienen en común estos 3 sistemas, sobre todo macOS, es su manera pobre de aprovechar el espacio en la pantalla. La cantidad de clicks, el manejo de ventanas y adaptarse a espacios y usos. ¿Qué hace falta para solventar esto?

Me voy a centrar en macOS porque es el sistema que uso todos los días para trabajar. Aunque quiero hablar también sobre Linux. Sobre todo, quiero proponer una idea en contra la concepción de Apple, los "mega-gamers" y "ultra-fanáticos" de la productividad. De que "cuantas más pantallas/monitores/ventanas", mejor. Solo hace falta ver cualquier "Set-up gaming" de Youtube o el vídeo de presentación del Vision Pro para darse cuenta de que lo de "centrarse en una sola tarea" y eliminar distracciones, no va con ningún usuario de estos productos o maneras de pensar. 

La teoría en contra de lo expuesto es simple. Por mucho "multitasking" que quiera uno hacer, cualquiera es mucho más productivo y eficiente centrándose en una sola tarea a la vez. Una vez se termine, se pasa a la siguiente y así, sucesivamente. Cuantas más distracciones (monitores, ventanas, aplicaciones abiertas) se tengan abiertas, más se tarda en solucionar el problema que se tenga delante. Dado que se es más propenso a contenplar hacia muchos lados y no terminar nada. 

El objetivo es ser más eficiente. Redimensionando ventanas automáticamente, utilizando atajos de teclado y reduciendo la fricción para centrarse en la tarea actual. 

Mis preferencias son las siguientes (todas ellas suceptibles de cambios): 
- Usar escritorios virtuales para separar tareas. (Disponibles en los 3 sistemas operativos)
- Un escritorio virtual = Una aplicación. (O dos en caso muy necesario) Asignando a cada aplicación un escritorio virtual propio.
- Usar atajos de teclado para moverse entre escritorios virtuales.
- Deshabilitar opciones que reduzcan el espacio de trabajo o lo hagan más lento.
- Automatizar y reducir movimiento de acciones repetitivas. 

Mis recomendaciones son las siguientes, de más básico a más avanzado. Empezando por macOS

## Nivel 1 (mínimos): 
1. Activar la opción de ocultar y mostrar automáticamente el Dock y la barra de tareas superior. Ocupan espacio innecesario y no sirven para nada mientras no se usan. Cuando se necesiten, solo acercando el ratón, estarán ahí. Así recuperamos espacio vertical, sobre todo en pantallas pequeñas.
2. Utiliza `⌘ + Tab` para cambiar rápidamente entre aplicaciones abiertas recientes.
3. Utilizar `⌘ + 1,2,3,4...` en aplicaciones como tu navegador o la terminal para moverte más rápidamente entre pestañas abiertas. 
4. Usa un lanzador de aplicaciones. Para mi el mejor es Alfred pero Raycast o el mismo Spotlight (integrado con macOS) son geniales. Usando `⌘ + Barra espaciadora` para invocarlos. 
	-  Alfred también sirve para buscar carpetas dentro de tu Mac.

## Nivel 2 (intermedio): 
1. Añade múltiples escritorios virtuales con Mission Control. Accede con 3 dedos hacia arriba con el trackpad, `⌃ + ⬆(flecha arriba)`o escribiendo `Mission Control` en Spotlight. Con esos 5-7 escritorio ve a `Ajustes del sistemas > Teclado  > Funciones rápidas` y activa los atajos para cambiar de escritorios virtuales con la tecla `⌃ + Num`. Num = Número del escritorio 1,2,3... Con esto podrás cambiar entre escritorio virtuales con un atajo de teclado. La única regla que sigo, como he mencionado anteriormente, es que cada espacio solo puede tener máximo 2 aplicaciones. 
2. En `Ajustes del sistemas > Escritorio y Dock`, desactiva la opción `Desactivar Spaces automáticamente en función del uso más reciente.`
3.  Si las animaciones se hacen muy largas, activa la opción `Reducir movimiento` en `Ajustes del sistemas > Accesibilidad`  Así la animaciones se reducen considerablemente. 
	1. Si quieres quitar las animaciones de transición de Mission Control "casi" del todo, usa el siguiente comando en la terminal `defaults write com.apple.dock expose-animation-duration -float 0.1`

## Nivel 3 (poweruser): 
1. Cambia la tecla `⌃ Control` por `Bloq Mayus` para mejor ergonomía. Maravilloso para programadores imitando la distribución del teclado HHKB. En `Ajustes del sistemas > Teclado  > Funciones rápidas > Teclas de modificación`, asigna la tecla `Bloq Mayus` a `⌃ Control`. 
2. Instala un administrador de ventanas (Tiling Windows Manager) y un programa adicional llamados Yabai  y SKHD (solo macOS. Alternativas: [Glass WM](https://github.com/glzr-io/glazewm) en Windows e [i3](https://i3wm.org/)/[Sway](https://swaywm.org/) en Linux).  
	1. Yabai te permite organizar ventanas apiladas una al lado o encima de otra. Maximiza automáticamente las ventanas o aplicaciones nuevas que lances aprovechando al máximo todo el espacio de la pantalla. Puedes modificar las aplicaciones que siguen o no este comportamiento. 
		1. Como "alternativa" muy inferior, puedes usar [Rectangle](https://rectangleapp.com/). Pero yo prefiero Yabai. 
	2. SKHD es un [daemon](https://es.wikipedia.org/wiki/Daemon_(inform%C3%A1tica)) que se ejecuta en segundo plano en macOS. Puedes asignar atajos de teclado para controlar Yabai o cualquier otro aspecto del sistema. Yo por ejemplo tengo asignado `⌃ Control + E` y `⌃ Control + R` para intercambiar entre la salida de audio del Mac. Si quiero que sean los auriculares o los altavoces. Pero puedes asignar atajos de Yabai para redimensionar ventanas o llevarlas a un escritorio virtual determinado.  
3. Utiliza para instalar o desinstalar aplicaciones un administrador de paquetes como [Brew.sh ](https://brew.sh/).
4. Si usas mucho la terminal, una herramienta como [fzf](https://github.com/junegunn/fzf) hace que tus búsquedas de archivos sean mucho más rápidas. 


## Linux
En cuanto a Linux, otro sistema que uso a diario también en mi PC de sobremesa, me gustaría mencionar alternativas parecidas. Antes de nada, quiero aclarar que uso Linux para videojuegos, programación y pruebas de diferente software, exclusivamente en pantalla grande, no en un portátil (todavía). 

He ciclado entre muchas [distribuciones](https://es.wikipedia.org/wiki/Distribuci%C3%B3n_Linux) y ahora mismo estoy muy contento con la última versión LTS de [Ubuntu 24.04 Noble Wombat](https://ubuntu.com/blog/ubuntu-desktop-24-04-noble-numbat-deep-dive). Me gusta [GNOME](https://www.gnome.org/), si bien antes he mencionado otros administradores de ventanas como i3 o Sway. Me gusta la comodidad de no tener un archivo de configuración kilométrico, administración de audio decente, ajustes propios, temas, fondos de pantalla y, en general, características que construyen una experiencia de usuario sólida. Aunque sí que hecho de menos alguna manera de guardar o exportar estos ajustes.  

El único "extra" prácticamente necesario es el "tiling" tan famoso que funciona de lujo en Yabai dentro de macOS o en los mencionados i3, Sway, [dwm](https://wiki.archlinux.org/title/Dwm) y otros muchos. Para conseguir esta característica, la manera más sencilla que he encontrado es instalando la extensión [Forge](https://github.com/forge-ext/forge) para Gnome. Se puede instalar a través de la [página web](https://extensions.gnome.org/extension/4481/forge/) de extensiones de GNOME o descargando y compilando los binarios de GitHub. Con estos pasos extra, todo está listo.z

1. En la configuración de GNOME
	1. Desactiva el dock
	2. Activa la opción de `Espacios de trabajos fijos` y añade 4 en total. 
	3. En el apartado de `Teclado` , añade atajos de teclado personalizados para cambiar de espacios de trabajos con `Super + Num`. Igual que en macOS pero usando lo que sería ⌘ en Linux. 
	4. En este último apartado, también puedes añadir una opción muy útil que no existe en macOS. Con `shift + super + Num` puedes enviar la aplicación que tengas enfocada al espacio de trabajo deseado. Ejemplo: Si abres Firefox en el espacio de trabajo 1, puedes mandarlo al 3 con `shift + super + 3` 
2. Utliza la tecla `Super` como lanzador de aplicaciones de GNOME. Al más puro estilo Spotlight de macOS. 
3. Instala Forge y configura los aspectos que quieras en panel de control de arriba a la derecha de GNOME. Aquí se puede activar o desactivar el "tiling" y acceder a los ajustes. 






