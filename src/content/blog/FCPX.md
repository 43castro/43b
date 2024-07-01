---
title: 'Final Cut Pro X'
description: 'Una guía para entender Final Cut Pro X'
pubDate: 2024-04-08
image: ''
tags: ["blog", "astro"]
---

> *work in progress*

## Organización

Final cut pro utilica librerías para organizar sus archivos. En este diagrama se muestra de manera bastante gráfica cómo organiza el programa diferentes archivos y rutas.

![FCP library diagram](../../../public/FCP_library.png)

Todo los archivos de renderizado interno suelen estar contenido detro de estas librerías. El directorio principal donde macOS guarda estas librerías es el de /Users/$USER/Vídeos. 

Por defecto, FCPX copia los archivos dentro de la propia biblioteca. Duplicando así, todos los archivos importados. Si tenemos 10GB de vídeo grabados, acabámos con 20GB más los archivos renderizados. Es importante marcas las casilla "Dejar archivos en su posición" en el menú de ajustes. Ese ajuste se encuentra en preferencias de Final Cut Pro (⌘ + ,) y dentro del apartado "Importación".

Después nos queda eliminar los archivos y volver a sincronizarlos con el proyecto original. 

1. Click derecho en la biblioteca dentro del Finder
2. Click en "Mostrar contenido del paquete"
3. Nos metemos en la carpeta del evento que más ocupe 
4. Borramos los archivos 
5. Y después en Final Cut para volver a enlazarlos --> Archivo > Volver a enlazar Archivos

Nos pedirá el sitio donde queramos enlanzarlo. Le señalamos nuestra carpeta y los volverá a sincrozinar.

Podemos recuperar espacio también borrando caché y clips renderizados una vez hayamos terminado el proyecto. Para borrar el caché de proyecto terminados que puede estar ocupando espacio en la librería, hacemos lo siguiente. 

1. Archivo > Eliminar archivos de la biblioteca generados 
2. Y marcamos las 3 casillas

Aquí unos cuantos recursos para leer/ver más y citar las fuentes 
- [Manage Media with Final Cut Pro Libraries (apple.com)](https://www.apple.com/final-cut-pro/docs/Media_Management.pdf)
- [Final Cut Pro Voice Isolation Audio Noise Reduction - YouTube](https://www.youtube.com/watch?v=fjUG1t42mB8)
- [Thomas Grove Carter - YouTube](https://www.youtube.com/@ThomasGroveCarter/videos)
- [Final Cut Pro - Ecosistema - Apple (ES)](https://www.apple.com/es/final-cut-pro/resources/ecosystem/)