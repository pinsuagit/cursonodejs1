// const list = [];
const db = require('mongoose');
const Model = require('./model');

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://pinsua:pinsua2010@cluster0-j5n17.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });

//mongodb+srv://pinsua:pinsua2010@cluster0-j5n17.mongodb.net/test?retryWrites=true&w=majority
db.Promise = global.Promise;
db.connect('mongodb+srv://pinsua:pinsua2010@pruebas-fzpk1.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});

console.log('[db] Conectada con exito');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
    //list.push(message);
}

async function getMessage(){
    //return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add:addMessage,
    list:getMessage,
    //get
    //update+
    //delte
}