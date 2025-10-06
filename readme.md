# Pasos seguidos en el Despliegue Manual Mock
### Lo primero es instalar las dependencias de Node para crear el Build además de rimraff
### Mientras se realiza la instalación de los paquetes se creó un archivo tsconfig para la subida a prod donde se añadieron configuraciones y todos los ficheros de test y carpetas que no se han de subir
### . Se ha añadido un atajo en el package.json para crear la build con la configuración de la subida a prod y se creó la build
### Luego se ha probado en local que funciona
### Se modificó el package.json dentro de dist añadiendo las sólo las dependencias necesarias para subir el código y un script que arranca el index.js con Node
### Se sube el código a GitHub en un repo público
### En Render se crea un servicio web usando GitHub con los siguientes parámetros:
- _Languaje_: Node
- _Branch_: despliegue-manual-mock
- _Region_: Frankfurt
- _Build Command_: npm Install
- _Start command_: npm start
### En _Advanced settings_ añadimos las variables de entorno del archivo _.env_ .
