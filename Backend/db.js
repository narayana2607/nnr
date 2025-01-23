const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mydatabase'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

module.exports = db;
