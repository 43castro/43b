---
title: 'Navegación y atajos'
description: 'Productividad de usuarios'
pubDate: 2024-08-04
image: ''
tags: ["blog", "astro"]
---
Hay pocos programas instaladas en mi ordenador. Me gusta usar lo mínimo, optimizado y esencial. Uso herramientas que cambian cada día. Y de todas las que he probado, las mejores, son las que pasan desapercibidas. Las que siguen ese slogan tan icónico de "it just works". Me gusta saber cómo funcionan los objetos que uso pero no quiero que me estorben. 

macOS es mi sistema principal. También uso Linux en mi servidor, Windows poco ya. Me quedo en macOS de momento por Apple Silicon. Muchísima potencia, batería de sobra y, sobre todo, silencio. Es discreto, no estorba en uso diario y puede con todo lo que le pido. Sobre todo con edición de vídeo y programación. 

La navegación del sistema es muy importante para mi. SKHD es la columna vertebral de mi uso diario. Es un proceso de fondo en el sistema al que puedes asignar atajos de teclado. Esta adaptación viene inspirada de los [Window Managers](https://wiki.archlinux.org/title/Window_manager) de Linux.  Creo firmemente en que si una tarea la repites muchas veces deberías de convertirla en un atajo de teclado. Y, en mi caso, si algo hago a diario, es saltar de una aplicación a otra.  
Pero a su vez no quiero perder los ajustes por defecto. 

He programado SKHD para que haga algo sencillo, asignar números al `CMD + TAB` de macOS. En vez de tener diferentes escritorio virtuales, tengo solo uso. Tengo todas las aplicaciones abiertas y maximizadas. Y para aprovechar teclas, mi combinación es `CMD + OPTION + NUM`. Cada número lo tengo asignado a una aplicación que trae al frente cuando la necesito. 

- `CMD + OPTION + 1` es [Things 3](https://culturedcode.com/things/). La lista de tareas.
- `CMD + OPTION + 2` es [Ghostty](https://ghostty.org/). La terminal.
- `CMD + OPTION + 3` es [Zen Browser](https://zen-browser.app/). El navegador. 
- `CMD + OPTION + 4` es [Obsidian](https://obsidian.md/). Para tomar notas. 
- `CMD + OPTION + 5`  es [Spotify](https://open.spotify.com/). Para música. 

Tengo otra capa añadiendo la tecla `SHIFT` para programas creativos que uso normalmente. 

- `CMD + OPTION + SHIFT + 1` abre [DaVinci Resolve](https://www.blackmagicdesign.com/es/products/davinciresolve).
- `CMD + OPTION + SHIFT + 2` abre [Final Cut Pro](https://www.apple.com/final-cut-pro/).
-  `CMD + OPTION + SHIFT + 3` abre [Affinity Designer](https://affinity.serif.com/es/). 

La tecla `CTRL`, asignada a la tecla `BLOQ MAYUS`, se ocupa de acciones del sistema. Uso un teclado [HHKB](https://hhkeyboard.us/) a diario así que el `BLOQ MAYUS` no existe, pero en los teclados que lo tienen suele cambiar la asignación. 

`CTRL + E/R` cambia la salida a los altavoces o a los auriculares. 
Dentro de la terminal, `CTRL + F` busca y abre mis carpetas de proyectos de programación en Ghostty. Y `CTRL + B` busca y abre mis carpetas de proyectos audiovisuales en Finder. Para este proceso de buscar e indexar directorios y archivos tan rápido, uso [FZF](https://github.com/junegunn/fzf?tab=readme-ov-file#preview-window). 

GitHub repo + Wiki: [SKHD](https://github.com/koekeishiya/skhd)

Config file example: 
```bash
# Volume quick-switch toggle
ctrl - e : SwitchAudioSource -s "EVO4"
ctrl - r : SwitchAudioSource -s "BenQ EX2780Q"

# Bindings for Cmd + Option (first layer)
cmd + alt - 0 : open -a Finder
cmd + alt - 1 : open -a "Things 3" 
cmd + alt - 2 : open -a Ghostty
cmd + alt - 3 : open -a Zen
cmd + alt - 4 : open -a Obsidian
cmd + alt - 5 : open -a Spotify

# Bindings for Cmd + Shift + Option (second layer)
cmd + shift + alt - 1 : open -a "DaVinci Resolve"
cmd + shift + alt - 2 : open -a "Final Cut Pro"
cmd + shift + alt - 3 : open -a "Affinity Designer 2"
```

