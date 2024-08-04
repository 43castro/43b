---
title: 'Servidor multimedia'
description: 'Una guía para montar un servidor multimedia'
pubDate: 2024-02-08
image: ''
tags: ["blog", "astro"]
---

Esta es una guía para crear un servidor doméstico que ejecute Linux con contenedores [Docker](https://www.docker.com/). En lugar de ser solo un paso a paso, me encantaría que esto fuera una guía para que la gente **entienda** cuál es el propósito de un servidor doméstico y los componentes que alberga.

## Los objetivos
- **¿Por qué querrías un servidor?**: Alojar tus propias pelis, administrar tus archivos y fotos desde cualquier lugar, aprender Linux y Ansible, piratear... Es una alternativa muy útil no solo para aprender si no también para no depende de servicios como Google Photos o Netflix.  
- **¿Cómo funciona mi servidor?**: El servidor está conectado a la corriente y a Ethernet en tu casa. Ejecuta Linux y diferentes aplicaciones dentro de contenedores Docker. Estos son como una especie de [máquinas virtuales](https://es.wikipedia.org/wiki/M%C3%A1quina_virtual) que ejecutan programas con dependencias aisladas pero desde un mismo kernel. Puede acceder a cualquier aplicación desde cualquier parte del mundo y administrar tus archivos. Es una combinación de Google Drive, Netflix y 1Password, pero mucho mejor y más segura. Pero sobre todo, privada. Este es solo un ejemplo, puede ejecutar tus aplicaciones sin contenedores, en máquinas virtuales o como quieras. Esa es la belleza, lo haces como quieras.
- **¿Qué necesito?**: Comienza con lo que tienes, un ordenador viejo con disco duro debería ser suficiente. Luego escala según sus necesidades. Comprar repuestos de segunda mano siempre es un aprecio para el medio ambiente. Intente encontrar piezas con bajo consumo de energía.

Para que hacerse una idea el mío tiene las siguientes especificaciones: 
- i5 3570
- 8GB DDR3 
- 256GB SSD + 1TB HDD

Y lo uso con los siguientes servicios: 
- Plex
- Syncthing
- qbittorrent
- watchtower 

## Sistema operativo
Podrías usar Windows si realmente no te sientes cómodo con Linux. Pero Linux es mucho más seguro a largo plazo, más rápido y soporta mucho más hardware que Windows, especialmente hardware más antiguo. En esta guía estoy usando Fedora 39 Server. Dividiría estas 3 categorías para los recién llegados en términos de uso de su servidor:
- Principiante: use Windows 10/11 con aplicaciones que se ejecutan en el propio sistema.
- Intermedio: use la distribución de Linux que quieras con una GUI con aplicaciones que se ejecutan en bare metal o en Docker.
- Avance: use distribuciones de edición de servidor Linux con aplicaciones que se ejecutan dentro de contenedores de Docker acoplables en la terminal. 



## Discos 
Tengo 2 discos separados.
- SSD principal: Kingston de 256 GB
- Disco duro: 1 TB Seagate 7200 rpm

**¡ADVERTENCIA!** Asegúrate de montar tu disco grande en el directorio `/mnt` y cambiar los permisos de la unidad para lectura y escritura. Si no es así, ni Plex ni qbittorrent podrán acceder a ellos. (Luego te explico cómo.)

Cuando se trata de discos, usa el que tengas pero recomendaría adquirir uno de 5400 rpm con un SSD para almacenamiento en caché. En mi caso utilicé una variante de 7200rpm porque es lo que tenía a manos. Pero una unidad de 5400 rpm es generalmente más barata y también requiere un menor consumo de energía. Sobre la capacidad, debes calcular el precio por GB en tu país. Pero para alguien que no acumula datos, veo el punto óptimo entre 4 y 6 TB. Esto es más que suficiente para cualquiera que tenga una galería de fotos considerable, algo de música flac y bastantes series y películas almacenados.

En el SSD principal, aparte del sistema, almaceno archivos que son ligeros y cambian con frecuencia:
- Sincronizando mi "vault" de Obsidiana usando Syncthing
- Mis contenedores de Docker
- Copia de seguridad de archivos importantes y pequeños

Por otro lado, en el disco duro grande guardo:
- Mi biblioteca Plex
- Colección de música
- Fotos + otros medios
- Copias de seguridad de Time Machine y de Docker

## Docker y contenedores
[Docker en 100 segundos](https://www.youtube.com/watch?v=Gjnup-PuquQ)
- **¿Qué son?** Entornos virtualizados que se pueden replicar. Cada aplicación tiene su propio contenedor. Una máquina virtual pequeña y ligera que utiliza el mismo kernel que su sistema host.
- **¿Para qué sirven?** Recrear aplicaciones en diferentes sistemas usando una imagen (plantilla). Misma aplicación, entorno diferente, sin cambios en el contenedor.
- **¿Por qué?** Docker es similar a la virtualización. Pero en lugar de virtualizar los componentes de hardware, simplemente virtualiza el sistema operativo. Como todo se ejecuta dentro del mismo kernel, todo es más rápido, más eficiente y más seguro.
- **¿Cómo encaja esto en mi servidor?**: Cada aplicación que puedas usar está contenida dentro de un contenedor Docker. Cada aplicación tiene sus propias dependencias y recursos. Hace que todo sea independiente entre sí, fácilmente replicable y fácil de realizar copias de seguridad.

## Permisos
Antes de continuar, me gustaría explicar los permisos de Linux. Este es un tema realmente importante que debes abordar cuando estés creando tu servidor. Linux tiene dos usuarios principales que pueden realizar cambios dentro del sistema. Usuario root y normal. Las unidades, directorios y archivos pueden tener diferentes permisos. Por lo tanto, es posible que el usuario normal no pueda escribir en una carpeta en la que puede escribir el usuario root (privilegiado). Verificar los permisos es una manera realmente fácil de asegurarse si algo no funciona. Puede buscar explicaciones en la web, pero comprender los permisos ha sido una de las cosas más valiosas que he hecho con Linux dentro de mi servidor.

## Instalación de Docker
1. Entra a través de [SSH](https://es.wikipedia.org/wiki/Secure_Shell) en el servidor.

2. Utiliza este script en la terminal.

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
```

```bash
 sh get-docker.sh
```

Al instalar e inicializar Docker, verifica el estado y ponlo en marcha.

``` bash
sudo service docker start
```

``` bash
sudo service docker status
```

Luego habilita el servicio para que Docker se inicie al encender el servidor.

 ```bash 
 sudo service docker enable
```

### Partes de docker 
Docker tiene algunos componentes principales que debes entender.
Tienes dos formas de crear un contenedor de Docker.
- Comando **docker run**: Este es un comando ejecutado en su terminal que especifica todos los parámetros que necesita.
- **docker-compose.yml**: Este es un archivo .yaml donde especificas todos los parámetros y luego los ejecutas en tu servidor. (Recomendado)
Dentro de un archivo Docker tenemos:
- `image`: la plantilla que utilizan los contenedores para ejecutar la aplicación
- `container_name`: se explica por sí mismo
- `hostname`: el nombre de su sistema
- `enviroments`: cómo se ejecuta el contenedor en términos de permisos. (Normalmente 1000:1000, pero busque `id $USER` para ver la identificación que tiene su usuario)
- `volumes`: aquí es donde se almacenan los datos. Quiero tomarme un momento para explicar mejor los volúmenes.

Piensa en los volúmenes como lugares donde le dices al contenedor dónde buscar. Los volúmenes son datos almacenados en la ubicación que especifiques, pero no te preocupes por la ruta que se muestra dentro de tu aplicación.

Déjame explicarlo con un ejemplo. Si ejecutas qBittorrent en un contenedor Docker, primero necesitas decirle al contenedor Docker dónde descargar los archivos. Supongamos que ejecutas tu contenedor en tu SSD principal y descargas archivos a tus unidades secundarias. Le especificas a Docker algo como esto en el archivo de volúmenes dentro de Docker Compose:

```yaml
volumes:
  - /mnt/second_drive:/downloads
```  
Cuando ejecutas el contenedor, qBittorrent te dirá que está descargando los archivos a /downloads, lo cual es correcto, pero realmente está usando /mnt/second_drive como /downloads. Es el mismo lugar, solo que con nombres diferentes. Simplemente especifica tus volúmenes y listo.

- `ports`: puertos expuestos en los contenedores que pueden comunicarse con el exterior. 

## Gestión de contenedores 
Cuantos más contenedores tengas, más importante es gestionarlos. Puedes usar una herramienta como [Portrainer](https://www.portainer.io/) para la gestión de contenedores, pero a mi me gusta ejecutarlo todo desde el terminal. Por eso uso [Lazydocker](https://github.com/jesseduffield/lazydocker). Es una forma de gestionar contenedores desde la terminal. Para instalarlo: 

1. Descarga los binarios desde github en la página de releases. Te recomiendo que consultes la página de github para descargar la versión más actualizada.

```bash
wget   https://github.com/jesseduffield/lazydocker/releases/download/v0.21.1/lazydocker_0.21.1_Linux_arm64.tar.gz 

# Ten cuidado con las versiones de ARM64 or x86 versions 
```

2. Usa el comando tar para descomprimir el archivo

``` bash
tar zxf lazydocker_0.20.0_Linux_x86_64.tar.gz
```

3. Instálalo en el directorio /usr/local/bin 

``` bash
sudo install lazydocker /usr/local/bin
```

Ejecutando el comando 'lazydocker' debería de ser suficiente para inicializar el servicio 

## Docker Compose & Containers
Estos son los diferentes archivos docker-compose y comandos docker run que he utilizado. Los explicaré 1 a 1. Están comentados, no los copies. Es para que los entiendas y los hagas por ti mismo. 

Plex: ([docker info](https://docs.linuxserver.io/images/docker-plex))

```yml
---
version: "2.1"
services:
plex:
image: lscr.io/linuxserver/plex:latest
container_name: plex # <-- name of the container
ports:  # <-- specifies ports
- "8200:32400/tcp" 
- "8201:32400/udp"
environment:
- PUID=1000 # <-- how the container runs, permissions as user, NOT AS ROOT
- PGID=1000
- TZ=Europe/Madrid # <-- timezone
- VERSION=docker
- PLEX_CLAIM= #https://www.plex.tv/claim/ <-- this token is used for claiming the server. Just write whatever the website generate in here.
volumes:
- /mnt/docker:/config # <-- where you mount you volume for config
- /mnt:/media # <-- where you mount you volume for config
restart: unless-stopped
```

syncthing: ([docker info](https://github.com/syncthing/syncthing/blob/main/README-Docker.md))

```yaml
---
version: "3"
services:
  syncthing:
    image: syncthing/syncthing
    container_name: syncthing
    hostname: "your server name"
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - "your path where is stored":/var/syncthing
    ports:
      - 8384:8384 # Web UI
      - 22000:22000/tcp # TCP file transfers
      - 22000:22000/udp # QUIC file transfers
      - 21027:21027/udp # Receive local discovery broadcasts
    restart: unless-stopped
```

qbittorrent: ([docker info](https://docs.linuxserver.io/images/docker-qbittorrent))

```yaml
---
version: "2.1"
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - WEBUI_PORT=8080
    volumes:
      - "/path/to/config":/config
      - "/path/to/downloads":/downloads
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped
```

watchtower: 

``` yaml
version: "3" 
services: 
	watchtower: 
	image: containrrr/watchtower 
	volumes: - /var/run/docker.sock:/var/run/docker.sock

```
## Conexión
Para conectarte a su servidor, existen tres formas principales. 
- SSH: Conexión remota al terminal de tu servidor. 
- Tailscale VPN: Conectándose remotamente a cualquier servicio + ssh a su servidor a través de una VPN Zero trust. Mi opción favorita y más cómoda para la mayoría de casos. 
- SFTP: Conexión remota a los árboles de ficheros de tu servidor. 


## SSH Hardening 
Tu configuración principal del servidor será a través de SSH. Vamos a crear una versión reforzada de SSH con lo que se llama un par de claves privadas/públicas. Esto son un par de archivos que generas con tu ordenador y que te permiten a ti y sólo a ti, el propietario de ese par de claves, acceder al servidor. Esto también permite el acceso sin contraseña a tu servidor, lo que lo hace realmente conveniente para acceder a ssh y también es más seguro.  Este par de claves reside en una carpeta oculta llamada .shh.

Para crear un par de claves SSH y hacer que sean utilizables:  [Harden SSH](https://www.youtube.com/watch?v=l1iu3iZq1aQ) + [article](https://tonyteaches.tech/ssh-security/)
1. Generar un par de claves SSH en cada ordenador: Utilice el comando `ssh-keygen` en cada ordenador para generar un par de claves SSH (clave pública y privada).	
2. Copia la clave pública en el servidor: En cada ordenador, copie el contenido de la clave pública (que se encuentra en el archivo `~/.ssh/id_rsa.pub`) en el archivo `authorized_keys` del servidor. Puedes hacerlo utilizando el comando `ssh-copy-id` o añadiendo manualmente la clave pública al archivo `authorized_keys` del servidor via sftp. 
3. Prueba la conexión SSH: Una vez añadida la clave pública al archivo `authorized_keys` del servidor, deberías poder conectarte mediante SSH al servidor desde cualquiera de los ordenadores sin necesidad de introducir una contraseña. Utilice el comando `ssh` seguido del nombre de usuario y el nombre de host ip del servidor para probar la conexión.
4. Edite el fichero `sshd_config` y deshabilite `PasswordAuthentication`, `PermitEmptyPasswords no` & `UsePAM no`. También `PermitRootLogin no`. 
5. Cambia el puerto por defecto de 22 a otro. SSH normalmente usa el puerto 22 en tu router para conectarse al servidor. Cambia el puerto a otro dado que sabiendo que este es un ajustes por defecto, es más propenso a vulnerabilidad.

## Tailscale 
[Tailscale](https://tailscale.com/)
Normalmente, para poder conectarte a tu servidor desde fuera de tu red doméstica, utilizarías un DNS Dinámico y te conectas a él utilizando esa IP. Puedes usar algo como el servicio NO-IP. Esto resuelve un problema realmente simple pero molesto. Tu Proveedor de Servicios de Internet cambia tu IP pública cada "X" cantidad de tiempo por protección. Si tu IP pública no cambiara, los atacantes o prácticamente cualquiera con conocimientos podría atacar tu red doméstica. Pero también es un inconviniente para conectarte remotamente a tu servidor. 

Tailscale no es más que una VPN que te conecta directamente a tu servidor. Es, de lejos, la forma más cómoda y segura que he probado. Sin IP pública, sin port-forward literalmente sólo regístrate, en tu servidor y clientes, conéctate a él a través del panel de administración y listo. Es seguro, y encima evitas exponer diferentes servicios a internet que probablemente sean privados. Imagínalo como un red de túneles a los que solo tú tienes acceso. 

## MAGIC DNS
Esta es probablemente la mejor característica de Tailscale. Hay dos formas principales que vas a utilizar para acceder al contenido de tu servidor. A través de SSH o a través de intefaces web. Con esta segunda me refiero a que los contenedores de docker, si bien están ejecutándose de fondo, habilitan una manera para que interactúes con ellos a través de una web. La URL suele ser algo como 192.168.0.22:8080. Es decir, la ip local del servidor más el número de los puertos. Si estás acciendo desde fuera de tu red doméstica esto se complica por lo que he mencionado anteriormente. Y usando Tailscale, por mucho que nos de una IP más "cómoda", sigue siendo bastante larga y tediosa. 

La alternativa es usar MagicDNS. Convierte esa IP kilométrica en un alias para que sea de más fácil acceso.  

- SSH Antes de MagicDNS: ssh user@110.11.10.20 
- SSH después de MagicDNS: ssh user@nombre_servidor 
- WebUI de qbittorrent antes de MagicDNS: 110.11.10.20:8080
- WebUI de qbittorrent después de MagicDNS: nombre_servidor:8080

Estas conexiones no ofrecen una variante segura. Es decir, usan HTTP en vez de HTTPS. Puedes generar certificados propios y provisionar de [esta manera](https://tailscale.com/kb/1153/enabling-https) con una guía de Tailscale si prefieres. 

Tailscale también te proporciona el tiempo de actividad de tus dispositivos en general. En la consola de administración puedes ver qué dispositivos están conectados a tu red Tailscale. Esto funciona si mantienes tus dispositivos permanentemente conectados. 

## Actualizar el servidor a nuevas versiones de Fedora

Para actualizar el servidor a nuevas versiones de Fedora sin tener que crear un medio de instalación desde cero, simplemente utilice los siguientes comandos:

```shell
sudo dnf system-upgrade download --releasever=VERSION
```

```shell
sudo dnf system-upgrade reboot
```

```shell
sudo dnf system-upgrade clean
```