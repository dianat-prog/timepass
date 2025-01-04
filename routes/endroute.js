const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    const plantilla=`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ruta Final</title>
    </head>
    <body>
        <h1>Ruta Final</h1>
        <div><h3>¡Bienvenido a la ruta final!</h3> <p>Estás en la ruta: ${req.originalUrl}</p></div>
    </body>
    </html>`
    res.send(plantilla);
})

module.exports=router;