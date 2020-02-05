const express= require('express');
const bodyParser= require('body-parser');//body parse permitir trabajar con la peticion
const router = express.Router();
const response = require ('./network/response');


var app =express();


        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(router);
        //solo responde get
//Separacion por rutas en este caso servidor /message
router.get('/message', function(req, resp){
    //lo que llega
    //console.log(req.headers);
    resp.header({
        //trabajo con cabeceras personalizadas
        "custom-header":"nuestro Valor Personalizado"
    });
    //resp.send('Lista de Mensajes');
    response.success(req, resp, 'Lista de Mensajes');
});

router.post('/message', function(req, resp){
    console.log(req.body);
    //console.log(req.query);
    //enviado estado de la petición
    //resp.status(201).send({error: '',body:'Creado Correctamente'});
    if(req.query.error=='ok'){
        response.error(req, resp, 'Error Inesperado', 500, 'Es Solo una simulación de los errores');
    }else{
        response.success(req, resp, 'Creado Correctamente',201);
    }
    
    //resp.send('Mensaje' +req.body.apellido+'Añadido correctamente....');
});


/* app.use('/', function(req, resp){
resp.send ('Hola');

}); */

app.use('/app',express.static('public'));

app.listen(3000);
console.log('La aplicación esta escuchando en el puerto http://localhost:3000');