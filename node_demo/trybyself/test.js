const express = require('express');
const app = express();

const route = require("./config/route")

app.use(route)
app.get('/sayhi/:name', (req, res) => {
    let number = ''
    for(let a = 0 ; a <= 100 ; ++a){
        number += a  + '-'
        
    }

    res.render('hey.ejs', { 
        name: req.params.name ,
        num :  number   

    }); 
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
