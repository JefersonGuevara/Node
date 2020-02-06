const express= require('express');
const response = require('../../network/response');
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
    if(req.query.error=='ok'){
        response.error(req, resp, 'Error Inesperado', 500, 'Es Solo una simulación de los errores');
    }else{
        response.success(req, resp, 'Creado Correctamente',201);
    }
    
    //resp.send('Mensaje' +req.body.apellido+'Añadido correctamente....');
});

module.exports=router;