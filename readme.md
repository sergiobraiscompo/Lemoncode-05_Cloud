# Pasos seguidos en el Despliegue Manual Mongo
## Entramos en mongo atlas y elegimos crear un clúster
## En configuración avanzada elegimos las configuraciones deseadas y le damos nombre al clúster
## Después en _network\_access>IP Access List_ vamos a permitir el acceso desde cualquier punto de la red
## Creamos un usuario para acceder a la base de datos
## copiamos la connection string que nos facilitan
## Sustituimos el campo _<db_password>_ por la contraseña de la BBDD
## Probamos que funciona corriendo el console-runners y comporbando desde Atlas si se han añadido los datos
## Ahora vamos a render y actualizamos las variables de entorno