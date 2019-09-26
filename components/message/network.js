const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/',function(req,res){
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
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

router.patch('/:id', function(req,res){
    console.log(req.params.id);

    controller.updateMessage(req.params.id,req.body.message)
        .then((data) => {
            response.success(req,res,data,200);
        })
        .catch(e => {
            response.error(req,res, 'Error Interno',500,e);
        });

});

router.delete('/:id',function(req,res){
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req,res,"Id ${res.params.id} eliminado",200)
    })
    .catch(e => {
        response.error(req,res, "Error interno",500, e);
    });
});

module.exports = router;