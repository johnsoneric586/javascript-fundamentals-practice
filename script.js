'use strict';

// 1)
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
}

// console.log(describeCountry('USA', 333, 'Washington DC'));
// console.log(describeCountry('China', 1401, 'Beijing'));
// console.log(describeCountry('Norway', 5.4, 'Oslo'));
// ----------------------------------------------
// 2)
// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// const populationUSA = percentageOfWorld1(333.3);
// console.log(populationUSA);

// const populationGermany = percentageOfWorld1(83.8);
// console.log(populationGermany);

// const populationJapan = percentageOfWorld1(125.1);
// console.log(populationJapan);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// console.log(percentageOfWorld2(333.3));
// console.log(percentageOfWorld2(83.8));
// console.log(percentageOfWorld2(125.1));

// ----------------------------------------------
// 3)
