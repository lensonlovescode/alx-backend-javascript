const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const result = {};
      lines.slice(1).forEach((line) => {
        const parts = line.split(',');
        const firstName = parts[0];
        const field = parts[parts.length - 1];
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(firstName);
      });
      resolve(result);
    });
  });
}

module.exports = readDatabase;
