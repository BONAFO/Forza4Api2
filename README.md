FORZA 4 API 1

Descricion:

Una simple api de Forza 4 con una db local de sus coches para poder hacer un sistema de niveles para c/u.
Una simple y divertida forma de alargar mas F4 =)

Modulos:

-DB => Donde se guardan los datos de los autos y la img preview de c/u

-FirstLoad => Donde se crean todos los archivos de DB

-Front => Front de la Api

-SaveData => Transforma el token localstorage (creado con pako.js) en un archivo .json para poder actualizar los datos en DB de forma permanente

-Update => Graba en DB los cambios de forma permanente

Instalaciones : Solo es necesario Nodejs , FirstLoad y Update requiren ser corridos con Nodejs (npm para usar nodemon o simplemente node).

Ejecucion: 

-F4_A1_START.bat: Primero ejecuta FirstLoad para verificar que todos los autos esten correctamente creados y luego abre en msedge el front.

-F4_A1_SAVE.bat: Primero ejecuta SaveData y descarga en /Dowloads el archivo save. Luego espera a la respuesta del usuario para la ejecucion del script Update

Notas: Actualizar el Update con el / los posibles folders donde puede encontrarse el save despues de usar para no perder los datos.

