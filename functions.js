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

  if (typeof(month) !== 'string') return 'not a string';
  month = month.toLowerCase();
  if (!months.hasOwnProperty(month)) return 'Not a month.';
  return months[month];
}

// console.log('April has: ', daysInMonth('april'), 'days.');
// console.log('NaM has: ', daysInMonth('NaM'));
// console.log('OcToBeR has: ', daysInMonth('OcToBeR'), 'days.');
// console.log('21 has: ', daysInMonth(21), 'days');

function getStateIndividualSport(state) {

  if (state === 'Alaska') {
    state = 'Mushing';
  }
  else if (state === 'Colorado') {
    state = 'Pack burro racing';
  }
  else if (state === 'Delaware') {
    state = 'Bicycling';
  }
  else if (state === 'Hawaii') {
    state = 'Surfing';
  }
  else if (state === 'Massachusetts') {
    state = 'Basketball';
  }
  else if (state === 'Maryland') {
    state = 'Jousting';
  }
  else if (state === 'Minnesota') {
    state = 'Ice fishing';
  }
  else if (state === 'New Hampshire') {
    state = 'Skiing';
  }
  else if (state === 'North Carolina') {
    state = 'Stock car racing';
  }
  else if (state === 'South Dakota' || state === 'Texas' || state === 'Wyoming') {
    state = 'Rodeo';
  }
  else if (state === 'Tennessee') {
    state = 'Golf';
  } else {
    state = 'State not recognized or it has no official individual sport.';
  }

  return state;
}

// console.log('- Colorado ::', getStateIndividualSport('Colorado'));
// console.log('- California ::', getStateIndividualSport('California'));
// console.log('- AState ::', getStateIndividualSport('AState'));
// console.log('- New Hampshire ::', getStateIndividualSport('New Hampshire'));
// console.log('- 21 ::', getStateIndividualSport(21));

function averageArray(arr) {
  
  return arr.reduce(function(a, b) { return a + b }) / arr.length;
}

console.log('Array Average: ', averageArray([2, 4, 6]), 'of array', [2, 4, 6]);

function calculate(num1, num2, conditional) {

  if (conditional === '*')
    return multi(num1, num2);
  else if (conditional === '+')
    return add(num1, num2);

  return -1;
}

function add(num1, num2) {

  return num1 + num2;
}

function multi(num1, num2) {

  return num1 * num2;
}

console.log('4+5=', calculate(4, 5, '+'));
console.log('4*5=', calculate(4, 5, '*'));
