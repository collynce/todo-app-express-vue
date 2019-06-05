const mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : 'db'
  });

con.connect(function(err) {
        if (err) throw err;
        console.log("Db Connected!");
      });

module.exports = con