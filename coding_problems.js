/**
 * 1. FizzBuzz
 */

const fizzBuzz = () => {
  for (let i = 1; i < 101; i++) {
    //using modulus to check those multiples
    i % 3 === 0 && i % 5 === 0 //the numbers iterated through 'for loop' are being checked if they're divisible by 3 AND 5
      ? console.log("FizzBuzz")
      : i % 3 === 0
      ? console.log("Fizz")
      : i % 5 === 0
      ? console.log("Buzz")
      : console.log(i);
  }
};
// Probably not the neatest way to use ternary operator :)

//Test
fizzBuzz();

/**
 * 2. ANAGRAM CHECKER
 */

const sortMethod = (string) => {
  return Array.from(string.toUpperCase()).sort().join("").toString();
}; // I've placed this here and not inside const anagramChecker, cause I'm using it for the Class example as well;

// Example 1
const anagramChecker = (string1, string2) => {
  return sortMethod(string1) === sortMethod(string2); //check if the strings are the same;
};

// Test this;
console.log(anagramChecker("Rose", "sore"));

// Example 2, with class;
class Anagram {
  constructor(string1, string2) {
    this.string1 = string1;
    this.string2 = string2;
  }
  anagramChecker() {
    return sortMethod(this.string1) === sortMethod(this.string2); //shorter way;
  }
}

let test = new Anagram("code99play", "PLayCode99");
console.log(test.anagramChecker());

/**
 * 3. DECK OF CARDS
 */

const playgame = () => {
  let deck,
    deckCardValues,
    deckCardNames,
    randomCardNames,
    randomCardValues,
    requestNumber,
    randomValuesSum;

  //Create the deck object
  deck = {
    A: 1,
    J: 10,
    Q: 10,
    K: 10,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
  };

  //Separate Values and Keys so we're able to show randomly picked card names later on.

  deckCardValues = Object.values(deck);
  deckCardNames = Object.keys(deck);

  //Create empty arrays to push random entries, separated by property names and values.

  randomCardNames = [];
  randomCardValues = [];

  /*Might be another way to properly shuffle the object entries, by including them in an array and swap stuff around, 
  but I don't see the purpose of that here */

  const randomFromDeck = () => {
    requestNumber = prompt("How many cards you wanna draw?");

    for (let i = 0; i < requestNumber; i++) {
      let randomNumber = Math.floor(
        Math.random() * Object.entries(deck).length // to pick randomly stuff from the object
      );
      randomCardNames.push(deckCardNames[randomNumber]);
      randomCardValues.push(deckCardValues[randomNumber]);
    }
  };
  randomFromDeck();

  //Get the sum of the picked values
  randomValuesSum = randomCardValues.reduce((acc, num) => acc + num);
  //Return some string interpolation to show the cards info and total points.
  //That regex is only because I wanted to place a space after comma :).
  return `Your cards are: ${randomCardNames
    .toString()
    .replace(/\W+/g, ", ")} and their Total Value is: ${randomValuesSum}`;
};

//Test
console.log(playgame());

/**
 * 4. LARGEST DOT PRODUCT
 */

/* Step 1. I'm thinking of sorting both of the arrays, from smallest to larger number.
  Step 2. Find a way to multiply by their indexes, in order, two by two.
  Step 3. Add the multiplied groups together. */

//Note to myself, do not use sort() with larger digits, without passing a function.

const largestDotProduct = (arr1, arr2) => {
  let sortedArr1 = arr1.sort((x, y) => x - y);
  let sortedArr2 = arr2.sort((x, y) => x - y);

  let multipliedPairs = [];

  sortedArr1.map((item) =>
    /*not sure if this is a good way, but after going through the items in the first array, 
  I want to multiply one item from first array by one item from second array, then loop, 
  then again, in order. So taking advantage of the indexes belonging to the first array, 
  I'm able to pick the other three values from the second, by index. 
  (e.g.: sortedArray1[1], sortedArray1[2] etc) */

    multipliedPairs.push(item * sortedArr2[sortedArr1.indexOf(item)])
  );
  //Test largest multiplied from each array:
  console.log(multipliedPairs);
  return multipliedPairs.reduce((acc, item) => acc + item, 0);
};

//Test
console.log(largestDotProduct([2, 1, 4], [1, 6, 4]));
console.log(largestDotProduct([1, 2, 3], [3, 2, 1]));
console.log(largestDotProduct([2, 2, 3], [3, 2, 2]));
console.log(largestDotProduct([12, 2, 90], [5, 2, 220]));
/**
 * 5. PRIME NUMBER CHECKER
 */

/*Google says that prime numbers are whole numbers greater than 1 and also 
prime numbers are divisible only by the number 1 or itself */

const primeChecker = (num) => {
  let i = 2;
  for (i; i < num; i++) {
    if (num % i === 0) {
      /* we check for nonprime numbers. So, the division remainder is 0 for a 
number divisible by other numbers that are equal or greater than 2.. also, if we would divide by one.. 
we would not able to exclude the prime numbers for this first condition */
      return false;
    }
  }

  if (num === 1 || num === undefined) {
    // I don't think '..or undefined' is necessary..
    //it's only because the function returns true if we don't specify any arguments.
    return false;
  }
  return true; //this one took me some time, because I was returning true inside the loop :D;
};

//Test
console.log(primeChecker(101));
console.log(primeChecker(1));
console.log(primeChecker(65));
