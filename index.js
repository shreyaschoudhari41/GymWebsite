const express =require('express');
const app = express();
// const mongoose = require("mongoose");
// mongoose.connect()

var bodyParser = require("body-parser");
var encoder = bodyParser.urlencoded();



app.set('view engine', 'ejs');
app.use(express.static('public'));

app.post('/',encoder,function (req,res) {
    console.log(req.body);
    res.render('example');
})
app.get('/',function (req,res) {
    // console.log(req.body);
    res.render('example');
})
app.get('/about',function (req,res) {
    res.send("THIS IS ABOUT PAGE");
})
app.listen('900'); 
// mongodb+srv://shreyas_41:<Shreyas@2028>@cluster0.idzc6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority