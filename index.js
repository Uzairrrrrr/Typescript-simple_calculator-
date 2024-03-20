import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Select One Operator",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.operators === "Addition") {
    console.log("The Addition of these two numbers are", answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "Substraction") {
    console.log("The Substraction of these two numbers are", answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "Multiplication") {
    console.log("The Multiplication of these two numbers are", answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "Division") {
    console.log("The Division of these two numbers are", answer.firstnumber / answer.secondnumber);
}
