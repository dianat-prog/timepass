const express=require('express');
const app=express();
const indexRouter=require('./routes/index.js');
const endrouteRouter=require('./routes/endroute.js');
const horaMiddleware=require('./middlewares/horaMiddleware.js');
const validarHora=require('./middlewares/validarHora.js');

app.use(horaMiddleware);


app.use('/endroute', validarHora,  endrouteRouter);
app.use('/',indexRouter);


 //Servidor escuchando
 app.listen(3100,()=>{
    console.log(`Server listening on port http://localhost:3100`)
    
 })