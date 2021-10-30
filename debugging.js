const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answer = rl.question('What is your favourite color?', function(answer) {
  console.log(`Your favourite colour is ${answer}`)
});

answer;
 

