// Problem : Given an array of integers, sort the array. 


// Bubble sort algorithm process : 
// -- Compare adjacent elements in the array and swap the positions if they are not intended order 
// -- Repeat the process as you step through each element in the array
// -- Once you swap through the whole array with no swaps, the array is sorted 


function sort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let swapped = false;
        if(arr[i] > arr[i + 1]){
            swapped = true;
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp; 
        }
        if(!swapped){
            return arr;
        }
    }
}

console.log(sort([-6,-9,-3,5,1,6,12,43,8,9]));
// sort([-6,-9,-3,5,1,6,12,43,8,9])

// Time complexity :  Big-O = O(n^2)