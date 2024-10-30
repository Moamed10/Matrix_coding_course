const express = require('express')
const app = express()

console.log(app)

app.get("/test/:mo",(req,res)=>{

    res.render('web.ejs',{
        name :req.params
    })
})


app.listen(5000, () => {

})
