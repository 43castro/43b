---
title: 'Color management'
description: 'Una guía para entender Final Cut Pro X'
pubDate: 2024-08-08
image: ''
tags: ["blog", "astro"]
---

## Contexto

El color es primero una ciencia y después un arte. Cada cual puede tener su manera y su *look* de cómo quiere que se vean sus vídeos. Pero para llegar a esa versión final la base debe de ser buena. Aquí explicaré, como pueda, las bases que deberías de entender sobre color. Siento de antemano si hay alguna errata.
Gran parte de esta guía se basa en este vídeo de [Teams2Film](https://www.youtube.com/watch?v=w0ubDSzEEYg).

## ¿Qué es?

El color management es una fase de administración de la imagen en la fase de edición. A la hora de grabar, usamos una característica de la cámara llamada perfil de imagen. Esto es un conjunto de valores que usa la cámara para que al grabar, la imagen se vea de una manera u otra. Hay muchos perfiles de imagen, pero, hay uno, que nos interesa en especial.

El perfil [Logarítmico](https://www.bhphotovideo.com/explora/video/tips-and-solutions/understanding-log-format-recording) o **LOG**, es un perfil de imagen plano. Sin mucho contraste ni saturación. Es un perfil con el que graban las la mayoría de cámaras profesionales. ¿Por qué se graba así? La respuesta corta, para preservar detalle. Se intentan salvar todo lo posible los puntos más negros y más blancos de la imagen para conseguir más información. Es decir, más rango dinámico. Esto nos da mucha más versatilidad en edición y hace que, en general, podamos conseguir un mejor resultado.

Cada cámara tiene su perfil LOG. Canon tiene C-Log, Sony S-Log, Panasonic V-Log... Estos perfiles manejan ***cómo*** se captura una imagen.

## ¿Por qué usarlo?

Después de grabar, nos vamos a editar. Necesitamos una manera para transformar esos colores del proceso de grabación en algo que sea útil para editar. Da Vinci es la herramienta por excelencia que realiza este proceso y por lo que es tan buena.

Estos perfiles de imagen tienen un conjunto de valores preestablecidos por el fabricante que determina brillo y contraste. Da Vinci coge estos valores y tiene guardado la manera transformarlos. Si antes hablábamos de perfiles de imagen para grabar, ahora hablamos de espacios de color para reproducir. Un espacio de color es una manera de representar una gama de colores.

## ¿Cómo se usa?

Hay dos generales de espacio espacios de color:
- Trabajo
- Entrega

Los espacios de color de trabajo (por llamarlos así), son los que usamos para editar los colores de una imagen. Es el estado intermedio de una imagen y aquí es donde haremos las correcciones de color. Da Vinci usa dos: Da Vinci YRGB Color Managed y ACES. Uno de [Blackmagic Design](https://www.blackmagicdesign.com/) y otro de la [Academia de los Óscar](https://www.oscars.org/science-technology/sci-tech-projects/aces).

Como resumen de ejemplo:
- Hemos grabado en SLog-3 (Perfil logarítmico de una cámara Sony)
- Hemos importado los clips a Da Vinci y vamos a transformar esos clips a un espacio de color de trabajo. (Da Vinci YRGB Color Managed)

Al igual que un espacio de color de trabajo, tenemos que poner el espacio de color de entrega. El más común es Rec.709 para SDR y Rec.2020 para flujos de trabajo HDR.

Esta transformación tan fácil es la manera correcta de administrar esos cambios de color de grabación a entrega, pasando por edición. Luego el *look* que le quiera dar cualquiera, a gusto del colorista. Pero así nos aseguramos que la base sea matemáticamente correcta.

Los pasos técnicos son los siguientes:
1. Importamos los clips de la cámara en LOG
2. Abajo a la derecha en el engranaje (o shift+9) entramos a los ajustes del proyecto. Solo hay que meterse en `Color management > Color Science > DaVinci YRGB Color Managed` y marcar la casilla de "Automatic Color management". El `Output Color Space` debería de ser `Rec.709`.
3. Si tenemos diferentes cámaras, podemos hacer clic derecho en los clips y elegir `Input Color Space`. Ahí podremos marcar qué perfil de imagen de entrada estamos usando.

## Detalles

Todos estos pasos son una manera de realizar este proceso, nada es absoluto. En mi caso, me gusta llegar a editar con el color "hecho". Pero cuando se necesita un detalle muy bueno, excepcional, creo que es la manera más óptima de realizar en todo esto.
