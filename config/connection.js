var mysql = require('mysql');
var connection;

if(proccess.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
       // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'lightforge',
        database: 'bamazon_seq'
    });
};

connection.connect();
module.exports = connection;