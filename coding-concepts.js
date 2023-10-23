// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
//  console.log(cohort.split(" "))

// a) Your answer:H,o,t,e,l, ,2,0,2,3
// b) Verify and explain: I thought it was going to split the words into characters and seperate them with commas beacause it returns an array.
// After running the code I learned that it's because there is a space inside the parentheses which splits the string after each space.

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
 //console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: It logs undefined because greeter is a function and functions always require a return. If there was a return the console log would also only return "Hello LEARN Student" because there is no string passed into the name parameter.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: It returns an array of odd numnbers because the .filter() method goes through each index of the array and checks the value of each index. It divides that index by 2 and using the modulo operator gives the remainder. They used the bang operator because the remainder of an odd number will never be zero and a bang operator gives us the opposite in a math equation. Then it gets stored in a new array without modifying the original.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: It logs JavaScript because myCodingSkills is an object with a key named languages. Inside the languages key there is an array with a string that says JavaScript at index 0. Therefore to output it they had to use this format: console.log(object.key[i]) 

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: George
// b) Verify and explain: I thought it would only say George because I didn't pay close enough attention to the name of the variable learnStudent. I thought it wouldve output like an object because the word Student is after learn in the console.log() so i thought it would output just the name George because the key named this.student
