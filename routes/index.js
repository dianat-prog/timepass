const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
const error = req.query.error;
    const plantilla=`<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Bienvenido</title>
                    </head>
                    <body>
                        <h1>Bienvenido</h1>
                        <div><h3>La hora actual es: ${req.currentHour}</h3></div>
                        <div>
                            <a href="/endroute">
                                <button>Entrar</button>
                            </a>
                        </div>
                        ${error ? `<p>${error}</p>` : ''}
                    </body>
                    </html>`
res.send(plantilla);
})


router.use((req,res)=>{
res.status(400).send('<h1>Página no encontrada</h1>')
})

module.exports=router;