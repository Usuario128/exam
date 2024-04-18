#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';


let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'How well do you know me? \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

async function askName() {
    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name?',
      default() {
        return 'Player';
      },
    });
  
    playerName = answers.player_name;
  }

  async function question5() {
    const answers = await inquirer.prompt({
      name: "question_1",
      type: "list",
      message: "How many liters of blood does an adult person have?\n",
      choices: [
        "Between 2 and 4 liters",
        "Between 4 and 6 liters",
        "10 liters",
        "7 liters",
        "0.5 liters",
      ],
    });
    return handleAnswer(answers.question_1 === "Between 4 and 6 liters");
  }


  async function question1() {
    const answers = await inquirer.prompt({
      name: "question_2",
      type: "list",
      message: "What is the father the Dragon ball?\n",
      choices: [
        "Murata",
        "Toriyama",
        "One",
        "Itagaki",
      ],
    });
    return handleAnswer(answers.question_2 === "Toriyama");
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: "question_3",
      type: "list",
      message: "The largest and smallest country in the world\n",
      choices: [
        "Russia and Vatican",
        "China and Nauru",
        "Canada and Monaco",
        "United States and Malta",
        "India and San Marino",
      ],
    });
    return handleAnswer(answers.question_3 === "Russia and Vatican");
  }
  
  async function question2() {
    const answers = await inquirer.prompt({
      name: "question_4",
      type: "list",
      message: "What is the best-selling book in the world after the Bible?\n",
      choices: [
        "The Lord of the Rings",
        "Dragon Ball",
        "Don Quixote of La Mancha",
        "One piece",
        "The Little Prince",
      ],
    });
    return handleAnswer(answers.question_4 === "Don Quixote of La Mancha");
  }



  async function question1() {
    const answers = await inquirer.prompt({
      name: "question_1",
      type: "list",
      message: "What is the uppermoon 1?\n",
      choices: [
        "Douma",
        "Kokushibo",
        "Akaza",
        "Muzan",
        "Nakime",
      ],
    });
    return handleAnswer(answers.question_1 === "Kokushibo");
  }

  async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
  
    if (isCorrect) {
      spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
    } else {
      spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
      process.exit(1);
    }
  }

  function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');

      console.log(
        chalk.green(
          `I owe you your favorite thing in the world`
        )
      );
  
      process.exit(0);
    });
  }

console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();
