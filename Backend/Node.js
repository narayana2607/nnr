const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mydatabase'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO users (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error storing form data:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      console.log('Form data stored successfully:', result);
      res.status(200).json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3306}`);
});
