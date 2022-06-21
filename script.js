//RECURSION:

// Official Definition of Recursion:
// In computer science, recursion is a method of solving a computational problem where:
// The solution depends on solutions to smaller instances of the same problem.

// Unofficial Definition of Recursion:
// "Any situation where you do something, and depending on the results, you might do it again."

// Recursive functions have two parts:
// 1) the recursive call to the function
// 2) at least one condition to exit

// Reasons NOT to use recursion
// 1) Performance (Too many stack frames/ too much memory needed)
// 2) Possibly more difficult to debug
// 3) Is the readability improved?

//You may need to adjust base case as you go along.
//Always look at most simple versions of the pattern at hand.
//You will see that big problems turn into small bits of code. EZ

// KEY WORDS / EXTRA: 
//CALL STACK is a stack data structure that stores information about the active subroutines of a computer program



// EXAMPLE (addition calculator)

//Paramater takes in input values e.g 
//                  function counter(num)
//return is a recursion key word.
//                  return counter(num + 1)
//You will call counter like this within the ; e.g
//                  counter(10)
//Recursion is the same process that happens in each turn.


//////////////////////////////////////////////////////////////////////////
// function factorial(num) {
//     if (num === 0) {
//         return 1
//     }
//     return num * factorial(num - 1)
// }

// console.log(factorial(5))
//////////////////////////////////////////////////////////////////////////

//You can use an else with the return like below in line 42 but it isn't necessary.

//You always need to know what relates the case before it to the case after. The link is what causes it to recur!

//////////////////////////////////////////////////////////////////////////
// function power(num, pow) {
//     if (pow == 1) {
//         return num;
//     } else {
//       return num * power(num, pow - 1);
//     }
// }

// console.log(power(5, 6));
//////////////////////////////////////////////////////////////////////////
// MY FACTORIAL MASHEEN
// function factorial(n) {
//     if ((n === 0) || (n === 1)) {        //You could put  (num <= 1)
//         return 1
//     } 
//     return n * factorial(n - 1)
// }

// console.log(factorial(2)) You can use console.group. auto indents it.
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
//DAVINKI??
// 0 1 1 2 3 5 8 13 21.

// function fib(rem, sum = [0, 1]) {
//     if (rem <= 2) {
//         return sum;
//     } const [secondlast, last] = sum.slice(-2)
//     return fib(rem - 1, [...sum, secondlast + last]); //spread operator allows coping of an array into a new one without typing all the values out.
// }

// console.log(fib(15))
//////////////////////////////////////////////////////////////////////////

//Tree Recursion:

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d')

function random(min,max){
    //Returns a random fractional number between min and max (inclusive), 
    return Math.random() * (max - min) + min;
}

function drawTree(startX, startY, length, angle, branchWidth, hue, sat, light){
    ctx.lineWidth = branchWidth;

    ctx.beginPath();

    ctx.save();

    ctx.strokeStyle = `hsl(${random(hue - 10, hue + 10)}, ${sat}%, ${light}%)`;
    ctx.fillStyle = `hsl(${hue}, ${sat}%, ${light}%)`;

    ctx.translate(startX, startY);
    ctx.rotate((angle * Math.PI)/180) //Converts to radians
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();

    if (length < 5){    //This says, if the length is above 5, do drawTree, otherwise, stop at the last drawTree.
        ctx.restore();
        return;
    }
    
    drawTree(0, -length, length * 0.8, angle -12.5, branchWidth * 0.8, (hue += 2), 100, (light += 1));
    drawTree(0, -length, length * 0.8, angle +12.5, branchWidth * 0.8, (hue += 2), 100, (light += 1));

    ctx.restore();

}

drawTree(500, 675, 120, 0, 45, 34, 244, 26);