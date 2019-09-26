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

async function getMessages(filterUser){ 
    let filter = {};
    if(filterUser !== null) {
        filter = {user:filterUser};
    } 
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id,message){
    const foundMessage = await Model.findOne({
        _id:id
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();

    return newMessage;
}

function removeMessage(id){
    console.log("llamado");
    console.log(id);
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add:addMessage,
    list:getMessages,
    updateText: updateText,
    remove: removeMessage
    //get
    //update+
    //delte
}