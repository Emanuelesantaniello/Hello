const express = require('express');

const app = express();

app.get('/', function (req,res){
             res.sendFile(__dirname+'/public/index.html');
});

app.use( function (req,res){
         res.status(404);
         res.write('page not found')
         res.end();
});

app.listen(3000);