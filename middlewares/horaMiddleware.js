const horaMiddleware =(req,res,next)=>{
const currentTime=new Date();
const hours=("0" + currentTime.getHours()).slice(-2);
const minutes=("0" + currentTime.getMinutes()).slice(-2);

 
const currentHour=`${hours}:${minutes}`;
req.currentHour = currentHour;

next();
}
module.exports=horaMiddleware;
