import * as readline from 'readline';

let info1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

info1.question('Do you like pizza? [y/n] ', (answer) => {
  switch(answer.toLowerCase()) {
    case 'y':
      console.log('Awesome!');
      break;
    case 'n':
      console.log('That is fine, maybe try chicken soup instead.');
      break;
    default:
      console.log('That is an nvalid answer, please try again.');
  }
  info1.close();
});