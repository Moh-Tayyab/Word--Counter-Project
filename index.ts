import inquirer from 'inquirer';
import chalk from 'chalk';

const answer: {
    sentence: string;
} = await inquirer.prompt([
    {
        type: 'input',
        name: 'sentence',
        message: 'Enter your sentence to count the words: '
    }
]);

const words = answer.sentence.trim().split(' ');

console.log(words);

console.log(chalk.blue(`Your sentence words count: ${words.length}`));
