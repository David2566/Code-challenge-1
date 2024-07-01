const prompt = require("prompt-sync")();

function getMarks()
{
    if(marks > 100 || marks < 0)
        {
            return "Invalid marks";
        }
    else if(marks > 79 && marks <= 100)
        {
            return "A";
        }
    else if(marks <= 79 && marks >= 60)
        {
            return "B";
        }
    else if(marks <= 59 && marks >= 49)
        {
            return "C";
        }
    else if(marks <= 49 && marks >= 40)
        {
            return "D";
        }
    else if(marks < 40)
        {
            return "E";
        }
}

    //prompt user
const marks = prompt("Enter student marks (0-100): ");
const grade = getMarks(marks);
console.log(`The grade for ${marks} is ${grade}`);
