const express= require('express');
const bodyParser= require('body-parser');//body parse permitir trabajar con la peticion
const router = express.Router();

var app =express();


        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(router);
        //solo responde get
//Separacion por rutas en este caso servidor /message
router.get('/message', function(req, resp){
    resp.send('Lista de Mensajes');
});

router.delete('/message', function(req, resp){
    console.log(req.body);
    console.log(req.query);
    resp.send('Mensaje' +req.body.apellido+'Añadido correctamente....');
});


/* app.use('/', function(req, resp){
resp.send ('Hola');

}); */



app.listen(3000);
console.log('La aplicación esta escuchando en el puerto http://localhost:3000');