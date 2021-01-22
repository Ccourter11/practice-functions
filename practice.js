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
