## En render creamos un nuevo servicio web
## en Credentials enlazamos la cuenta de github donde se encuentra nuestro repo
## En Render se crea un servicio web usando GitHub con los siguientes parámetros:
Languaje: Docker
Branch: despliegue-automatico
Region: Frankfurt
##  En advanced cambiamos lo siguiente:
Docker Build Context Directory: .
Dockerfile Path: ./Dockerfile
## Subimos las variables de entorno con las variables IS_API_MOCK y CORS_ORIGIN a false
ENV IS_API_MOCK=false
ENV CORS_ORIGIN=false