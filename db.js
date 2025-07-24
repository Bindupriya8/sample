// db.js
const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root", // Change if needed
 password: "bindu@10", // Your MySQL password
 database: "irkdb"
});
conn.connect(err => {
 if (err) throw err;
 console.log("Connected to MySQL! irkdb");
});
module.exports = conn;
