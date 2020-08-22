var express = require('express');

var app = express();

//Указываем view engine (движок) для шаблонизации html
//в данном случае 'ejs'
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function (req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get('/lk', function (req, res){
    res.sendFile(__dirname + "/newindex.html");
})

app.get('/lk/ch_one', function (req, res){
    res.render('ch_one');
})

app.get('/lk/:id', function (req, res){
    res.render('ch_one', {chId: req.params.id});
});

app.listen(3000);