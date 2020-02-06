const express = require('express');

const bodyParser = require('body-parser');//body parse permitir trabajar con la peticion

//const router= require ('./Components/message/network');
const router = require ('./network/routes');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);
router(app);
/*solo responde get
//Separacion por rutas en este caso servidor /message
 app.use('/', function(req, resp){
resp.send ('Hola');

}); */
app.use('/app', express.static('public'));
app.listen(3000);
console.log('La aplicación esta escuchando en el puerto http://localhost:3000');