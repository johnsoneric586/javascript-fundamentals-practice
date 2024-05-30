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
// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWolrd3 = population => (population / 7900) * 100;

// console.log(percentageOfWolrd3(333.3));

//----------------------------------------------
// 4) Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
}

// console.log(describePopulation('USA', 333.3));
// console.log(describePopulation('China', 1441));
// console.log(describePopulation('Japan', 1441));

//----------------------------------------------
