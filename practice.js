console.log("Hello Calvin!");

const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson / 7;
  console.log(ageInDogYears);
};

calculateAgeInDogYears(56);

const go = (direction, speed) => {
  let output = `The car is moving ${direction} at ${speed} mph.`;
  if (speed > 75) {
    console.log(output, "SLOW DOWN!");
  } else console.log(output);
};
let car1 = go("forwards", 1000);
let car2 = go("backwards", 8);
let car3 = go("circles", 12);

// Define a function named evenOrOdd that takes a single number as an argument
// it should return even if divisible by 2 and Odd if not
const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    const number = "Even";
    return number;
  } else {
    const number = "Odd";
    return number;
  }
};

// create an array with random numbers outside the function , iterate the array of numbers with a for..of loop, and invoke the evenOrOdd function with each number as the argument
const numberArr = [4, 7, 26, 7, 9];
// nummberArr
for (const number of numberArr) {
  if (number % 2 === 0) {
    evenOrOdd(number);
  }
}
