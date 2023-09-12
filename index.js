import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config'; //permite procesar variables de entorno
import productoRouter from './src/routes/productos.routes.js';
import usuarioRouter from './src/routes/usuario.routes.js';
import './src/database/database.js';
import path from 'path';
import { fileURLToPath } from 'url';

// 1- configuraciones iniciales
const app = express();
console.log(fileURLToPath(import.meta.url));

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
// crear una variable
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port') )
})

// 2- middlewares: funciones se agregan antes de las rutas
app.use(cors()); //permite conexiones remotas
app.use(express.json());//permite interpretar datos en formato json
app.use(express.urlencoded({extended:true})); // ayuda a interpretar datos del body del request
app.use(morgan('dev')); //nos da mas informacion en la terminal
// agregar un archivo estatico
// console.log(path.join(__dirname ,'/public'));
// app.use(express.static(path.join('D:/RollingCode/22-23/c43i/05-backendCafecito' ,'/public')))
app.use(express.static(path.join(_dirname, '/public')));

// 3- crear las rutas
// http://localhost:4000/api/producto
app.use('/api',productoRouter)
app.use('/api/auth',usuarioRouter)

// tarea: crear una ruta y controlador para los usuarios