// ASSESSMENT 2: Coding Practical Questions with Jest

// const { type } = require("os")
// const { isModuleNamespaceObject } = require("util/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.


// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]



// Message for instructors:
// I had to comment out lines 3-6 for my tests to pass. Im not sure if that was part of the asessment that we were supposed to figure out?

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
describe("divisibleByThree", () => {
    it("takes a object as an argument and  decides if the number inside it is evenly divisible by three or not.", () => {
    const object1 = { number: 15 }
    const object2 = { number: 0 }
    const object3 = { number: -7 }
        expect(divisibleByThree(object1.number)).toEqual(`15 is divisible by three`)
        expect(divisibleByThree(object2.number)).toEqual(`0 is divisible by three`)
        expect(divisibleByThree(object3.number)).toEqual(`-7 is not divisible by three`)
    })
})

// b) Create the function that makes the test pass.

const divisibleByThree = (objectKey) => {  
    if (typeof objectKey === "number" && objectKey % 3 === 0) { 
        return `${objectKey} is divisible by three`
    } 
    else if (typeof objectKey  === "number" && objectKey % 3 !== 0){
        return `${objectKey} is not divisible by three`
}  
     else if (typeof objectKey !== "number"){
    return `${objectKey} is not a number.`
}   
    else{
        return "Oops error"
    }
 }   
 console.log(divisibleByThree(object1.number))
 console.log(divisibleByThree(object2.number))
 console.log(divisibleByThree(object3.number))

// Pseudo code:
// Create a function (divisibleByThree) that will take an object as the arguement.
// Make an if statment in the function that will return, "objectKey is divisble by three" only if the arguement has a datatype of an object, and if that number is able to be divided by 3 with a remainder of zero. (% 3 === 0).
// make an else if statment that checks if the dataype of the arguement is a number and there is a remainder after being divided by three, if that remainder doesnt equal zero return "objectKey is not divisible by three".
// make an else statment that returns an error

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("wordsCapitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
      expect(wordsCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(wordsCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })
// b) Create the function that makes the test pass.
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// Pseudo code:
// Make a function called wordsCapitalized, this function will take an array as an arguement and capitalize the first letter in each word from each index and assign it to a varaiable that will be the new array.
// assign the variable inside the fucntion, name the variable newArray. This variable will be assigned the the given arguement of an array. Use .map() to go through each index and capitalize the first letter inside the index if the value is a string by using charAt(0) then capitalizing that character with .toUpperCase() and finally use .substring[1] added to out uppercased value so that it will get every letter after index 0 and add it to my capitalized letter.
// return the variable new array within the function

const wordsCapitalized = (array) => {
    let newArray = array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
    return newArray

}
console.log(wordsCapitalized(randomNouns1))
console.log(wordsCapitalized(randomNouns2))

