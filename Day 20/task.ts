//                 🚀|| 100 Days of Coding Challenge || 🚀

// 🚀 Day 20 Challenge: Start Coding! 🚀

// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function averageScore(...scores: number[]): number {
    let total = scores.reduce((sum, score) => sum + score, 0); return total / scores.length

}
console.log(averageScore(40, 60, 60, 91));

//                         XXXXXXXXXXXXXXX

// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function makeAdder(valueToAdd: number): (number) => number {
    return function (number: number): number {
        return number + valueToAdd
    }
}
let addFive = makeAdder(6);
console.log(addFive(10));

//                         XXXXXXXXXXXXXXX

// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let userProfle = function () {
    let name = "Tayyaba";
    let age = 20;
    return {
        displayInfo: function () {
            console.log(`My name is ${name} & my age is ${age}`);

        }
    }
}();

console.log(userProfile.displayInfo());

//                         XXXXXXXXXXXXXXX
