express = require ('express');
const message = require ('../Components/Message/network');

const routes = function(server){
    server.use('/message', message);

}

module.exports  = routes;