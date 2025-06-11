function extractSetGroup (arr) {
  listGroup = [];
  arr.forEach((line) => {
    smallArr = line.split(',');
    listGroup.push(smallArr[smallArr.length - 1]);
  });
  setGroup = new Set(listGroup);
  return setGroup;
}
function numberOfStudents (arr, group) {
  stdArr = [];
  arr.forEach((item) => {
    itemArray = item.split(',');
    if (itemArray[itemArray.length - 1] === group) {
      stdArr.push(itemArray[0]);
    }
  });
  console.log(`Number of students in ${group}: ${stdArr.length}. List: ${stdArr.join(', ')}`);
}
function countStudents (path) {
  const fs = require('fs');
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const pre_arr = data.split('\n');
    const arr = pre_arr.filter((line) => line.trim() !== '');
    console.log(`Number of students: ${arr.length - 1}`);

    groups = extractSetGroup(arr.slice(1));

    groups.forEach((group) => {
      numberOfStudents(arr.slice(1), group);
    });
  } catch (err) {
      throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
