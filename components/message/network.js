const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/',function(req,res){
    controller.getMessages()
        .then((messageList) => {
            response.success(req,res,messageList,200);
        })
        .catch(e => {
            response.error(req,res,'Unexpected Error',500,e);
        })
    // console.log(req.headers);
    // res.header({
    //     "custom-header": "Nuestro valor personalizado",
    // });
    // response.success(req,res,'Creado Correctamente');
});

router.post('/',function(req,res){
    // console.log(req.query);
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req,res,fullMessage,201);
        })
        .catch(e => {
            response.error(req,res,"Informacion invalidad",400,'Error en el controlador');
        });

    // if(req.query.error == "ok"){
    //     response.error(req,res,"Error inesperado",500,'Es solo una simulacion de los errores');
    // }else{
    //     response.success(req,res,'Creado Correctamente',201);
    // }
    
});

module.exports = router;