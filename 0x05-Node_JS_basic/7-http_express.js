const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = express()


app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((msg) => {
      res.send('This is the list of our students\n' + msg);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {});

module.exports = app;
