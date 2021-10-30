const readlineSync = require("readline-sync")

program = readlineSync.question('What is your name? ')

//readlineSync is a library. Calling the function question from that library. 
//and storing the result of the function in program. 

console.log(`Welcome ${program}`)

input = readlineSync.prompt()
