// Find the factorial using recursion : 
function factorial_recursive(n){
    // Base case : 
    if(n == 1 || n == 0){
        return n;
    }
    // Recursive call : 
    return n * factorial_recursive(n-1);
}

console.log(factorial_recursive(0));

// Big-O = O(n)

