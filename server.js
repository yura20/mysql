const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 8000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(cors());
//MYSQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});


let initDb = function () {
    connection.query('' +
        'CREATE TABLE IF NOT EXISTS users (' +
        'id int(11) NOT NULL AUTO_INCREMENT,' +
        'login varchar(50), ' +
        'password varchar(50),' +
        'PRIMARY KEY(id) )',
        function (err) {
            if (err) throw err;
            console.log('CREATE TABLE IF NOT EXISTS users')
        });
};

initDb();

app.get('/login', function (req, res) {
    connection.query('SELECT * FROM users', function (err, responce) {
            if (err) throw err;
        
        
        
            console.log('get all users, length: ' + responce.length);
        
        
        
            res.status(200).send(responce);
        }
    );
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log('Server start on port 8000!');
});