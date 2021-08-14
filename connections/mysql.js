const mysql = require("mysql");

var conn;

module.exports = {
    getConnection: function(){
        return conn
    },
    createConnection: function(){
        conn = mysql.createConnection({
            host: "localhost",
            user: "server",
            password: "backend@123",
            database: "digital_trons_db",
          });
          
          conn.connect(function(err) {
            if (err) console.warn(err);
            console.log("Connected to the database");
          });
          
    },
};