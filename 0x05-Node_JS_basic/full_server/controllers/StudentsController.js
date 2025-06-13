const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2];
    readDatabase(path)
      .then((data) => {
        let msg = 'This is the list of our students';
        const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        fields.forEach((field) => {
          msg += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        });
        res.status(200).send(msg);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const path = process.argv[2];
    readDatabase(path)
      .then((data) => {
        const list = data[major];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
