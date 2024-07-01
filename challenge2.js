const prompt = require("prompt-sync")();


const speed = prompt("Enter the speed of the vehicle: ");
const result = checkSpeed(speed);
console.log(result);

function checkSpeed(speed)
{
    const speedLimit = 70;
    const kmPerDemerit = 5;

    if(speed < speedLimit)
        {
            return "Ok";
        }
    else
    {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        if(demeritPoints > 12)
            {
                return "License Suspended";
            }
        else
        {
            return `Points ${demeritPoints}`;
        }
    }
}
