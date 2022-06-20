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
// 1) Performance
// 2) Possibly more difficult to debug
// 3) Is the readability improved?

//You may need to adjust base case as you go along.
//Always look at most simple versions of the pattern at hand.
//You will see that big problems turn into small bits of code. EZ


// EXAMPLE (addition calculator)

//Paramater takes in input values e.g 
//                  function counter(num)
//return is a recursion key word.
//                  return counter(num + 1)
//You will call counter like this within the ; e.g
//                  counter(10)
//Recursion is the same process that happens in each turn.

function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(5))
