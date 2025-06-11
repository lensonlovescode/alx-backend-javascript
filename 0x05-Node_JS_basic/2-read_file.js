function extractSetGroup(arr) {
  listGroup = []
  arr.forEach((line) => {
    smallArr = line.split(',')
    listGroup.push(smallArr[smallArr.length - 1])
  })
  setGroup = new Set(listGroup)
  return setGroup
}
function numberOfStudents(arr, Groups) {
  
  # prints the students in each group
}
function countStudents(path) {
  const fs = require('fs');
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const pre_arr = data.split('\n')
    const arr = pre_arr.filter((line) => line.trim() !== '')
    console.log(`Number of students: ${arr.length - 1}`)

    groups = extractSetGroup(arr.slice(1))

    groups.forEach((group) => {
      numberOfStudents(arr.slice(1), group)
    })
    console.log(arr)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Cannot load the database');
    }
  }
}
module.exports = countStudents
