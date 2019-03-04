const express = require('express');
const bodyParser =require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');


const app = express();

mongoose.connect('mongodb://localhost/items');
mongoose.Promise=global.Promise;

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use('/api',require('./routes/api'))

//error handling
app.use(function(err,req,res,next){
    res.send(err.message)
})


//app listning to port 4000

app.listen(process.env.port||4000,function(){
    console.log('now listning to request')
})