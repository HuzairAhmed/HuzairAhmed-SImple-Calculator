#! /usr/bin/env node 
import inquirere from "inquirer";
// Printing a Welcome Message 
console.log("\n\tWelcome To \'HuzairAhmed\' - CLI Simple Calculator\n");
// Asking Question from Users through Inquirer 
let answers = await inquirere.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one Operator to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
// Conditonal sttatements If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstnumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstnumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstnumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstnumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
