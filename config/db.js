var mysql = require('mysql');

var mysql_conn= mysql.createConnection({
  
  host:process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

mysql_conn.connect(function(err){
    if(err)
    {
        throw err;
    }
    console.log("Connection Established");
});

module.exports = mysql_conn;