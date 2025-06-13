const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const url = req.url;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(process.argv[2])
      .then((msg) => {
        res.end('This is the list of our students\n' + msg);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database')
      });
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
