'use strict';

function yell(toSay) {

  for (var i = 0; i < 10; i++) {

    if (i === 9) {

      console.log(toSay.toUpperCase() + '!');
    } else {

      console.log(toSay);
    }
  }
}

// yell('hello');

var months = {

  'january': 31,
  'feburary': 28,
  'march': 31,
  'april': 30,
  'may': 31,
  'june': 30,
  'july': 31,
  'august': 31,
  'september': 30,
  'october': 31,
  'november': 30,
  'december': 31
};

function daysInMonth(month) {

  var index = month.indexOf(month.toLowerCase());
  if (index < 0) return 'Not a month.';
  return months[month.toLowerCase()];
}

console.log(daysInMonth('april'));
