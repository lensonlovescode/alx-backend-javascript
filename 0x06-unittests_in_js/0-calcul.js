#!/usr/bin/node

/* simple function to add  two numbers */

function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}
module.exports = calculateNumber;
