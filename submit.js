const express = require('express')
const bodyParser = require('body-parser')
var mysql = require('mysql')
const app = express()
const port = 3000

app.use(express.static('./css'))
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'pug')

app.get('/', function(req, res){
    res.sendFile('index.html', {root:__form})
});


app.listen(port, ()=> console.log('example'))

app.post('/submit', function(req, res){
    console.log(req.body);
    var sql = "insert into users values(null, '"+ req.body.name +"', '"+req.body.dob +"', '"+req.body.email+")"
    connection.query(sql, function(err, rows, fields){
        if(err) throw err;
        res.render('index', {title:'Data Saved',
    message:'Data Submitted'})
    })
})

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_info'
})

connection.connect(function(err){
    if(err) throw err;
    console.log('Connected..');
})

app.listen(1337)