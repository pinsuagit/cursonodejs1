const db = require('mongoose');

db.Promise = global.Promise;
//mongodb+srv://pinsua:pinsua2010@pruebas-fzpk1.mongodb.net/test?retryWrites=true&w=majority
async function connect(url) {
    await db.connect(url,{
        useNewUrlParser:true,
    });
    console.log('[db] Conectada con exito');    
}

module.exports = connect;
