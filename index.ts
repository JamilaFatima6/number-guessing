#! /usr/bin/env node
import inquirer from "inquirer"
const randomNumber = Math.floor(Math.random()*6+1);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"please guess  a number between 1-6",
    }
])
if (answer.userGuessedNumber === randomNumber){
    console.log("congratulations! your guessed answer is right")

}
else{
    console.log("your guessed   number is  wrong")
}
console.log(randomNumber)