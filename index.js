import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        type: 'input',
        name: 'sentence',
        message: 'Enter your sentence to count the words: '
    }
]);
const words = answer.sentence.trim().split(' ');
console.log(words);
console.log(`Your sentence words is count: ${words.length}`);
