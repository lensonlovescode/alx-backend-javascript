const { createServer } = require('http');
import countStudents from './3-read_file_async.js';

const port = 1245;
const hostname = '127.0.0.1';

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(process.argv[2])
      .then((msg) => {
        res.end(`This is the list of our students\n${msg}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
