//RECURSION:

// Official Definition of Recursion:
// In computer science, recursion is a method of solving a computational problem where:
// The solution depends on solutions to smaller instances of the same problem.

// Unofficial Definition of Recursion:
// "Defining something in terms of itself."

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
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Tree Recursion- Worked Example:

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d')

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

drawTree(500, 675, 120, 0, 35, 34, 244, 26);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Tree Recursion- My attempt:
const canvas2 = document.getElementById("myCanvas");
const myctx = canvas2.getContext('2d');
const ang = Math.PI / 4;

const sliderLength = document.getElementById("length");
sliderLength.addEventListener("mouseup", slider);


const sliderAng = document.getElementById("angle");
sliderAng.addEventListener("mouseup", slider);


const sliderWidth = document.getElementById("width");
sliderWidth.addEventListener("mouseup", slider);

const sliderDepth = document.getElementById("depth");
sliderDepth.addEventListener("mouseup", slider);


let img = document.getElementById("leaf")
let count = 0
function draw(startX, startY, length, ang, branchWidth, depth) {
    count ++
    myctx.lineWidth = branchWidth; //Forgot this....

    myctx.beginPath();

    myctx.save();

    myctx.strokeStyle = "#725c42"
    if (depth > sliderDepth.value / 2 ) {
        myctx.strokeStyle = "#00ff00"
        // if (Math.random() > 0.8) {
        //     myctx.strokeStyle = "#ff0000"
        // }
    }
    if (depth >= sliderDepth.value - 1) {
        myctx.strokeStyle = "#B632A0" 
        branchWidth = branchWidth * 4
        }   else if (Math.random() > 0.8 || depth >= sliderDepth.value - 1) {
            myctx.strokeStyle = "#FF033E"
            }
    
    //ctx.fillStyle();

    myctx.translate(startX, startY);
    myctx.rotate(ang)
    myctx.moveTo(0,0);  
    myctx.lineTo(0, -length);
    myctx.stroke();
    // myctx.scale(.8,.8) 
    // myctx.drawImage(img,0,0)
    
    
    if (depth >= sliderDepth.value){
        myctx.restore();
        return;
    }

    draw(0, -length, length * 0.8, ang -0.2, branchWidth * 0.8, depth + 1);
    draw(0, -length, length * 0.8, ang +0.2, branchWidth * 0.8, depth + 1);

    myctx.restore();
    console.log(depth + " " + count)
}

function slider() {
    myctx.clearRect(0, 0, canvas.width, canvas.height); //Resets canvas after you change an option
    
    if(sliderDepth.value < 20) {
    draw(500, 650, sliderLength.value, sliderAng.value, sliderWidth.value, 1)
    }else{
        alert("I won't be able to handle that!")
    }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
