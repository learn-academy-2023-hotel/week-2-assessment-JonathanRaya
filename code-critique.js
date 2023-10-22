// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
function firstVowelIndex(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase();
  
    for (let i = 0; i < lowerCaseStr.length; i++) {
      if (vowels.includes(lowerCaseStr[i])) {
        console.log(`The index of the first vowel is: ${i}`);
        return i;
      }
    }
  
    console.log('No vowel found in the string.');
    return -1; // Return -1 if no vowel is found in the string
  }
  // Example usage:
const inputString = "Hello World";
firstVowelIndex(inputString);

// Critique the code output. 

// ANSWER: It caught me by suprise that the AI created the function using the word function rather than using the arrow function since it is the more effecient and updated way. The code does work because it returns the correct index of the first vowel. One thing I did not like is that if there was no vowels it would return -1 which doesn't make sense to me because I dont't think an index can be a negative number. There is also no else statment to return that output if there were to be no vowels in the input.

// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 