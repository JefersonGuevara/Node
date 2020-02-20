//const list = [];

//const db = require('mongodb');
const Model= require('./model');

/*************************************************************/
const mongoose = require('mongoose');
const {MONGO_URI} = require("../../Config")



//const uri = "mongodb+srv://adminplatzi:TiHr2y61qZuheRPj@cluster0-y3yen.mongodb.net/telgrom.telegrom?retryWrites=true&w=majority";
//
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
//TiHr2y61qZuheRPj


/*************************************************************/
console.log('[db] Conectada con exito');
function addMessage(message) {
    const myMessage = new Model(message);

    Model.create([myMessage])
        console.log();
    //list.push(message);
}

function getMessage() {
    return list;

}

module.exports = {
    add: addMessage, 
    list: getMessage,
    //get
   // delete
   // update
}