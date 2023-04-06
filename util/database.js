const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database:'node-complete'
  });
  
  module.exports = pool.promise();