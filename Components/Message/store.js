//const list = [];
//const db = require('mongodb').MongoClient;
const Model= require('./model');







var MongoClient = require('mongodb').MongoClient;
MongoClient.Promise =global.Promise;
var uri = "mongodb://db_user_platzi_node:db_user_platzi_node@cluster0-shard-00-00-y3yen.mongodb.net:27017,cluster0-shard-00-01-y3yen.mongodb.net:27017,cluster0-shard-00-02-y3yen.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("Chat");
  // perform actions on the collection object
  client.close();
});

console.log('[db] Conectada con exito');
function addMessage(message) {
    const myMessage = new Model(message);

    myMessage.save
    
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