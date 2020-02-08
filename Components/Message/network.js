const express= require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router= express.Router();

router.get('/', function(req, resp){
    //lo que llega
    //console.log(req.headers);
    resp.header({
        //trabajo con cabeceras personalizadas
        "custom-header":"nuestro Valor Personalizado"
    });
    //resp.send('Lista de Mensajes');
    response.success(req, resp, 'Lista de Mensajes');
});

router.post('/', function(req, resp){
    console.log(req.body);
    //console.log(req.query);
    //enviado estado de la petición
    //resp.status(201).send({error: '',body:'Creado Correctamente'});


    controller.addMessage(req.body.user, req.body.Message)
    .then((fullMessage)=>{
        response.success(req, resp,fullMessage,201);

    }).catch(e=>{
        response.error(req, resp, 'Error Inesperado', 400, 'Es Solo una simulación de los errores');
    });

    
    //resp.send('Mensaje' +req.body.apellido+'Añadido correctamente....');
});

module.exports=router;