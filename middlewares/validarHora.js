const validarHora=(req,res,next)=>{

let currentHour = req.currentHour;
 
if (currentHour < '12:00' || currentHour <= '00:00') {
    res.locals.message = `Aún no son las 12 de la mañana.`;
    return res.redirect(`/?error=Aún no son las 12 de la mañana.`);
}

next();
}

module.exports=validarHora;