//01 - console
// console.log('Hello World!');

//02 - process.argv
// const myArgs = process.argv.slice(2);

// switch (myArgs[0]) { 
//   case 'greet':
//     console.log(`Hello ${myArgs[1]}`);
//     break;
//   case 'farewell':
//     console.log(`Goodbye ${myArgs[1]}`);
//     break;
//   default:
//     console.log('Either "greet" or "farewell"');
//     break;
// }

//03 - readline
// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name?', (name) => { 
//   console.log(`Name is: ${name}`);
//   rl.close();
// });

//04 - prompt
// import prompt from 'prompt';

// prompt.start();

// const question = 'What is your name?';

// const name = await prompt.get(question);

// console.log(`Name is: ${name[question]}`);
import prompt from 'prompt';
import { question, getResponse } from './export.js';

prompt.start();

const answer = await prompt.get(question);

getResponse(answer);
