# La Web

## ¿Cómo funciona?

![Diagrama](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works/simple-client-server.png)

### Partes involucradas

- Conexión a internet.
- TCP/IP: *Transmision Control Protocol* and *Internet Protocol* son protocolos de comunicación que
definen cómo la información debe enviarse a través del internet.
- DNS: Sistema de nombres de dominio.
- HTTP: *Hypertext Transfer Protocol* es un protocolo que define un lenguaje para clientes y
servidores para que se comuniquen mutuamente.
- Archivos: código y recursos.

## HTTP

*Hypertext Transfer Protocol* es un protocolo de la capa de aplicaión creado para la transmisión de
documentos de hipermedia. Fue diseñado para poder comunicar navegadores web y servidores web. HTTP
sigue el clásico modelo de cliente servidor, con un cliente abriendo la conexión a través de una
petición y luego esperando hasta que recibe una respuesta por parte del servidor.

### Métodos HTTP

HTTP define un conjunto de métodos de petición para indicar la acción deseada a ser ejecutada dado
un recurso específico.

- GET: Pide una representación del recurso específico y solo recibe información.
- HEAD: Similar a GET pero sin el contenido del recurso, solo el encabezado.
- POST: Envía una entidad al recurso específico, usualmente generando un cambio en el estado del
servidor.
- PUT: Reemplaza todos las representaciones del recurso objetivo con la información que se envía en
la petición.
- PATCH: Realiza modificaciones parciales al recurso.
- DELETE: Elimina el recurso.
- CONNECT: Establece un tunel de conexión con el servidor. Es usada cuando hay *servidores
proxy* actuando como intermediarios.
- OPTIONS: Describe las opciones de comunicación que tiene disponibles el recurso.
- TRACE: Realiza un llamado en bucle de testeo con el recurso.

> POST crea un recurso, PUT revisa si existe para reemplazarlo o lo crea si no existe aun y PATCH
> solo actualiza la información del recurso.

### Códigos de estado HTTP

Los códigos de estado indican si el llamado a un recurso específico ha sido completado de manera
exitosa o no. Estos están agrupados en cinco grupos:

1. 100 - 199: Respuestas informativas
2. 200 - 299: Respuestas exitosas
3. 300 - 399: Respuestas de redirección
4. 400 - 499: Respuestas de error del cliente
5. 500 - 599: Respuestas de error del servidor

## CORS

*Cross Origin Resource Sharing* es un mecanismo basado en el encabezado HTTP que permite a un
servidor indicar desde cual origen (dominio, puerto, esquema) diferente a sí mismo un navegador está
permitido de cargar un recurso al servidor. Esto resuelve las políticas que solo permiten
interactuar con los recursos localizados en el mismo dominio.

## URL

Refiere a *Uniform Resource Locator*, es una dirección de un recurso único dado de la web.

`https://google.com:80/path/to/file?key1=value#`

1. Esquema: `https`
2. Dominio: `google.com`
3. Puerto: `:80`
4. Ruta al recurso: `path/to/file`
5. Parámetros: `key1=value`
6. Fragmento del archivo: `#`

## Recursos adicionales

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
