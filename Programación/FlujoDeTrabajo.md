# GIT

## RESUMEN DE COMANDOS PARA TRABAJO REMOTO

- git clone <url> - clona un repositorio.
- git remote add <nombre> <url> - configura un repositorio remoto.
- git remote - lista los repositorios remotos.
- git push -u <remoto> <rama> - sincroniza la rama con la remota por primera vez.
- git push - envía los nuevos commits a la rama remota.
- git push -f <remoto> <rama> - reemplaza la rama remota con el historial de la rama local.
- git pull - actualiza los commits de la rama remota.
- git checkout <rama> - descarga la rama del remoto si no existe localmente.
- git fetch <remoto> - actualiza la información del repositorio remoto.
- git rebase <remoto>/<rama> - rebasa la rama local contra la remota.
- git reset --hard <remoto>/<rama> reemplaza la rama local para que quede igual a la remota.

## PATRONES DE ARCHIVO

1. Eliminar un archivo que esté en la raíz del proyecto
`/carpeta_ejemplo`

2. Ignorar todos los archivos que terminen en .log
`*.log`

3. Excepto production.log
`!production.log`

4. Ignorar los archivos terminados en .txt dentro de la carpeta doc (pero no sus subdirectorios)
`doc/*.txt`

5. Ignorar todos los archivos terminados en .pdf dentro de la carpeta doc y sus subdirectorios
`doc/**/*.pdf`


## SCRUM PROCESS

1. VISION: La idea del producto.
2. HISTORIAS DE USUARIO: Se plantean los requisitos del usuario en un lenguaje "humano" y una estimación del esfuerzo que conlleva.
3. PRODUCT BACKLOG: Es una lista de deseos organizada por importancia para el desarrollo.
4. SELECTED PRODUCT BACKLOG: Se seleccionan los backlogs que se desarrollarán en el sprint.
5. DESARROLLO DE SPRINT: Desarrollo y reuniones diarias.
6. NEW FUNCTIONALITY: Se presenta la nueva funcionalidad que se desarrolló en el sprint.
7. SPRINT REVIEW: Se hace un repaso del sprint y se presentan los resultados conseguidos.
8. RETROSPECTIVE: Se evalúa el flujo de trabajo del sprint.

![](./assets/img03.jpeg)

## FLUJOS DE TRABAJO CON GIT

### TIPOS DE FLUJOS

1. FLUJO DE TRABAJO CENTRALIZADO

No se requiere varias ramas ya que solo se hacen commits a la rama principal, esto es muy común en trabajos individuales.

2. RAMAS DE FUNCIONALIDADES

El desarrollo de cada nueva característica se lleva a cabo en una rama independiente, de forma aislada y hasta que esté
completamente finalizada y funcionando correctamente.

Es una buena práctica manejar dos ramas principales: master y develop. En la segunda se integran las ramas de cada
funcionalidad, y solo cuando ya se tiene plena seguridad para un lanzamiento se pasa a la master, etiquetándolo con un
número de versión. Antes de master se puede pasar por una rama de release donde se dan las últimas pinceladas como la
documentación.

Si en el lanzamiento se presenta algún tipo de de error aparecerá una rama de hotfix que sale de master para solucionar
los problemas y se integra a esta nuevamente apenas se resuelva.

3. TRABAJO DE BIFURCACIÓN

Cada desarrollador trabaja con un propio repositorio remoto con los cambios que se realizan y luego, una vez aprobados,
se envían al repositorio remoto central. De igual forma, de la central se hará el pull al remoto propio para actualizar
los archivos.

![Ramas de funcionalidades](./assets/img01.png)

### DIRECTRICES

1. Ramas transitorias.
2. Minimización y simplificación de reversiones.
3. Cumplimiento de una planificación de publicación.

![MVP](./assets/img02.png)
