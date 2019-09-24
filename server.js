const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

//const router = require('./components/message/network');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);

router(app);

app.use('/app',express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');



// router.get('/message',function(req,res){
//     console.log(req.headers);
//     res.header({
//         "custom-header": "Nuestro valor personalizado",
//     });
//     response.success(req,res,'Creado Correctamente');
//     //response.success(req,res,'Creado Correctamente');
//     //res.send('Lista de mensajes');
// });

// // router.post('/message',function(req,res){
// //     res.send('Mensaje añadido');
// // })

// router.post('/message',function(req,res){
//     console.log(req.query);
//     //console.log(req.body);
//     //res.status(201).send({error: '', body: 'Creado correctamente'});
//     if(req.query.error == "ok"){
//         response.error(req,res,"Error inesperado",500,'Es solo una simulacion de los errores');
//     }else{
//         response.success(req,res,'Creado Correctamente',201);
//     }
    
// });
// app.use('/',function(req,res){
//     res.send('Hola');
// })


