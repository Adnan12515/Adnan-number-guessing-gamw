import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        message: "please guess a number between 0 - 10",
        type: "number",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("you guess wrong number");
}
