const express = require('express')
const app = express()

app.use(time=(req,res,next)=>{
    let requestTimeAt=new Date()
    let hours=requestTimeAt.getHours()
   
    if ((hours<8)||(hours>12)){return res.send('<h1>our office in not open now</h1>')}

    next()

})

 app.use(express.static(__dirname+'/public'))





app.listen(5000,(err)=>{
    if(err) console.log("server is not running")
    else console.log("server is running on port 5000")
})
