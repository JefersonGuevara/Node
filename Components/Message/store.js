//const list = [];

//const db = require('mongodb');
const Model= require('./model');

/*************************************************************/
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://adminplatzi:TiHr2y61qZuheRPj@cluster0-y3yen.mongodb.net/telgrom.telegrom?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("telegrom").collection("telegrom");
  // perform actions on the collection object
  client.close();
});


//TiHr2y61qZuheRPj


/*************************************************************/
console.log('[db] Conectada con exito');
function addMessage(message) {
    const myMessage = new Model(message);

    myMessage.save
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