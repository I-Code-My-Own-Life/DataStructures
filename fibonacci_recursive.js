// Given a number 'n', find the nth element of the Fibonacci sequence : 

// Using recursion :
function fibonacci_recursive(n){
    if(n < 2){
        return n;
    }
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
} 

console.log(fibonacci_recursive(6));

// Big-O = O(2^n)