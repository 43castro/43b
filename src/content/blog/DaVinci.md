---
title: 'Despegando en edición'
description: 'Una guía para entender mejor DaVinci Resolve'
pubDate: 2024-02-08
image: ''
tags: ["blog", "astro"]
---

> *work in progress*

Igual que en un avión, tener referencias tanto técnicas como creativas antes de empezar un proyecto simplifica el proceso y evita errores. Nuestro objetivo es simple, que todo se vea y se escuche lo mejor posible. Me enfocaré en la parte técnica porque, una vez la matemática esté hecha, nos da muchas más libertades y menos problemas. 

Esta guía tiene como base DaVinci Resolve. Muchas reglas se aplican a otros editores no-lineales como Premier, Final Cut o Avid. Pero las funciones específicas que se mencionan igual pueden no tener equivalentes en otros programas. 

## Tipos y formatos de discos

Antes de empezar, la manera en el que formateas tus discos es extredamente importante. El sistema de archivos es algo con la que mucha gente se suele liar y que luego causa problemas bien por lentitud, compatibilidad o problemas generales. El resumen simple es: 

- Si **SÓLO** usas macOS = APFS es el más rápido pero MacOS extended Journaled funciona muy bien.
- Si **SÓLO** usas Windows = NTFS es lo más rápido y sencillo.
- Y si usas los dos sistemas = usa exFAT. 

Un par de notas sobre exFAT. Este sistema de archivos es más lento que los demás y no tiene funciones de seguridad (carece de [Journaling](https://es.wikipedia.org/wiki/Journaling)). Es más propenso a corrupción de archivos y DaVinci siempre suele saltar con aviso de "exFAT drive detected". A veces no queda más remedio porque ciclamos mucho entre sistemas diferentes. Pero pudiéndolo evitar, es preferible usar sistemas de archivos más modernos y seguros. 

Incluyo a Linux porque igual hay alguien que edita DaVinci. exFAT también es compatible con sus peros. NTFS también funciona instalando un paquete extra y si quieres algo nativo BTRFS funciona bien también. 

Si buscas lo mejor, más óptimo y seguro sin ningún tipo de compromiso, un servidor con 3-4 discos en RAID 5 con ZFS es la mejor opción. ZFS es un maravilloso sistema con maneras eficientes de conseguir redundancia y sin mucho sacrificio de velocidad. RAID 5 además nos permite perder hasta 1 disco por cada 4 y no perder ni un solo archivo. 

## Backups 

Los backups son exactamente igual de importantes que los discos y formatos que usamos. La regla óptima sobre esto debería de ser el 3-2-1. 

3 copias diferentes del mismo archivo.
2 medios diferentes como mínimo. 
1 medio de estos en otro sitio.

No es obligatorio seguir este método al pie de la letra. Pero por lo menos tener un clon del disco en el que estés trabajando me parece lo más efectivo. En estos casos, sí que sí es extredamente recomendable no usar exFAT. 

## Organización de bases de datos y proyectos 

DaVinci usa librerías de proyecto para organizar sus archivos. Como hemos visto antes en los formatos de discos, lo ideal es no cambiar el tipo de formato y trabajar, si se puede de un mismo sistema o de un servidor común para múltiples sistema. 

Para mi, solo tengo una regla de oro. **1 proyecto = 1 biblioteca**
La estructura general suele verse de la siguiente manera.

**BIBLIOTECA A**: 
- Proyecto 1
	- Timeline, bins, clips asociados 
- Proyecto 2
	- Timeline, bins, clips asociados 
- Power bins
--- 
**BIBLIOTECA B**: 
- Proyecto 1
	- Timeline, bins, clips asociados 
- Proyecto 2
	- Timeline, bins, clips asociados 
- Power bins

Las **power bins** se merecen su propia explicación. Son una serie de recursos que puedes acceder en múltiples proyectos contenidos **una misma biblioteca**. Ej: Tu biblioteca de proyectos de vídeos para la empresa Z, tiene disponibles en un power bin: su logo, su música e imágenes corporativas. Esto evita que tengas que importar muchas veces los mismos recursos y los tengas organizados en un mismo sitio. 


## Color management en DaVinci y explicar por qué funciona

El color es primero una ciencia y después un arte. Cada cual puede tener su manera y su "look" de cómo quiere que se vean sus vídeos. Pero desde luego que para llegar a esa versión final la base debe de ser buena. Se acabaron los días de importar LUTs de Youtubers que no tienen ni idea de color, eso es una chapuza y una pérdida de tiempo. La opción de DaVinci YRGB Color managed convierte todo los archivos logarítmicos a Rec709 o Rec2020 automáticamente en 3 clicks. Esta conversión es matemáticamente correcta y hace que la base en la que luego se crea el "look" final, sea lo más correcta posible. 

Abajo a la derecha en el engranaje o shift+9 entramos a los ajustes del proyecto. 
Solo hay que meterse en Color management > Color Science > DaVinci YRGB Color Managed y marcar la casilla de "Automatic Color management". 

Si quieres algo más de detalle sobre esto, mira este link de [Teams2Film](https://www.youtube.com/watch?v=w0ubDSzEEYg) 

## Tips para edición más fluida y rápida 

- Playback -> Render Cache -> User -> Líneas de tiempo pre-renderizadas. Mejor rendimiento y mejores tiempo de renderizado. 
- Blurry background to show photos = [Blanking fill effect](https://www.youtube.com/watch?v=nQ0hLKVw1ZU) 
- Shift ⇧ + Z = Zoom out al timeline entero
- Amplía marcadores (pulsa "m") y haz secciones para organizarte mejor. Solo cambia el código de tiempo del marcador y los colores. Útil para vídeos largos con muchos temas


## Niveles de audios y LFKS recomendados para exportar 

Tener un volumen consistente en tu máster final es muy importante. Aquí adjunto un cuanto concepto y procedimientos para que el mix final del vídeo tenga sentido y se adecúe a los estándar finales de distribución de contenido en plataformas digitales. 

**dBFS** significa "[decibelios](https://es.wikipedia.org/wiki/Decibelio "Decibelio") a escala completa" ("decibels full scale"). Es una abreviatura utilizada para definir los niveles de amplitud en decibelios en sistemas digitales en base al máximo nivel disponible.

**LUFS** son las siglas de **L**oudness **U**nits relative to **F**ull **S**cale o **Loudness Units Full Scale** (es decir, el nivel máximo que puede manejar un sistema). Se trata de una medida estandarizada de la sonoridad del audio que tiene en cuenta la percepción humana y la intensidad de la señal eléctrica. Para simplificar, significa que los LUFS son la forma más reciente y precisa de medir la sonoridad en el audio, diseñada para ayudar a hacer posible un sonido consistente.

La medición de LUFS se leerá en un número negativo, como -6 LUFS, -11 LUFS y -16 LUFS. A medida que se aleja de 0, se vuelve más silencioso. Cuanto más se acerque a 0, mayor será la sonoridad.

LFKS y LUFS son **sinónimos** = ‘LUFS’ (que se ajusta a los acuerdos de denominación internacionales) es equivalente a ‘LKFS’ (la cual se usa en la ITU-R BS.1770-2) [cita página 3](https://tech.ebu.ch/docs/r/r128_2011_ES.pdf)

*[Fuente de la información](https://moises.ai/es/blog/consejos/lufs-volumen/)

**Normalizar**: ajustar los niveles del audio al target de volumen especificado. 
Para normalizar volumen y saber más sobre exportación, aquí adjunto otro vídeo de [Teams2Films](https://www.youtube.com/watch?v=nZJkcca7vJ4) 
Otro buen vídeo de [EposVox](https://www.youtube.com/watch?v=q-pcO9jqpZ4)



## Exports pendientes y codecs de exportación a tener en cuenta y a prueba de balas

Antes de comenzar, es recomendable tener un export máster en la calidad más grande posible. Por ejemplo: Apple ProRes 4444 o DnxHR 444. 

Si bien en un ámbito profesional lo óptimo sería guardar el proyecto entero tal y como está, a veces podemos tomarnos la libertad de optimizar espacio y borrar ciertos brutos. A parte del vídeo final, es recomendable tener otras variantes guardadas que no ocupan demasiado espacio. DaVinci (al igual que otros programas de exportación) nos da muchas opciones para renderizar muchos másters para entrega. Podemos aprovechar esta característica para renderizar a la vez estas 6 variantes: 

- PROYECTO MÁSTER
- PROYECTO MÁSTER SIN GRÁFICOS
- PROYECTO MÁSTER SÓLO GRÁFICOS
- PROYECTO MÁSTER SÓLO MÚSICA
- PROYECTO MÁSTER SÓLO EFECTOS DE SONIDO
- PROYECTO MÁSTER SÓLO VOZ EN OFF 

Con estas 5 variantes nos aseguramos que si hay que cambiar algo en el vídeo, tenemos las piezas esenciales del puzzle que no ocupan mucho espacio y que, a su vez, nos dejan hacer cambios significativos. He elegido estas versiones porque son las que suele pedir normalmente el cliente. Además de eso, el cliente **jamás** debería de poder pedir sólo los brutos de un proyecto. 

