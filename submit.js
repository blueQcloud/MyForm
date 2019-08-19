const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res)=>res.send('Hello!'))
app.listen(port, ()=> console.log('example'))

var mysql = requrie('mysql')
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