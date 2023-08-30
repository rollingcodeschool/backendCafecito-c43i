import express from 'express';
// 1- configuraciones iniciales
const app = express();
// crear una variable
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port') )
})

// 2- middlewares


// 3- crear las rutas
