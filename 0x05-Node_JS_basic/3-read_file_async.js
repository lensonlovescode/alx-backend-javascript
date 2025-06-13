function extractSetGroup(arr) {
  listGroup = [];
  arr.forEach((line) => {
    smallArr = line.split(',');
    listGroup.push(smallArr[smallArr.length - 1]);
  });
  setGroup = new Set(listGroup);
  return setGroup;
}
function numberOfStudents(arr, group) {
  stdArr = [];
  arr.forEach((item) => {
    itemArray = item.split(',');
    if (itemArray[itemArray.length - 1] === group) {
      stdArr.push(itemArray[0]);
    }
  });
  msg = `Number of students in ${group}: ${stdArr.length}. List: ${stdArr.join(', ')}`;
  console.log(msg);
  return msg;
}
function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const pre_arr = data.split('\n');
      const arr = pre_arr.filter((line) => line.trim() !== '');
      finalmsg = `Number of students: ${arr.length - 1}\n`;
      msg = `Number of students: ${arr.length - 1}`;
      console.log(msg);
      groups = extractSetGroup(arr.slice(1));
      const groupMsgs = [];
      groups.forEach((group) => {
        groupMsgs.push(numberOfStudents(arr.slice(1), group));
      });
      finalmsg += groupMsgs.join('\n');
      resolve(finalmsg);
    });
  });
}
module.exports = countStudents;
