# API MARCAS Y MODELOS DE AUTO

## Requerimientos

- node 14v o superior: https://nodejs.org/es
- mysql

## Instalacion

Configurar base de datos con archivo adjunto en carpeta database:
 
    mysql -u root empleados < autos_db.sql -p 

Configurar credenciales de base de datos en archivo .env:

    PORT=8080
    DB_HOST=''
    DB_USERNAME=''
    DB_PASSWORD=''
    DB_DATABASE=''

Instalar paquetes y correr proyecto :

    npm install
    npm run start or npm run dev

# END POINT

Todas las marcas:

    /api/marcas

Marca por id:

    /api/marcas/:id

Todos los modelos:

    /api/modelos

Modelo por id:

    /api/modelos/:id

Modelo por marca:

    /api/modelos/marca/:id