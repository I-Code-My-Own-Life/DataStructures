console.log("Implementing insertion sort algorithm in javascript.");

// Insertion sort algorithm process : 
// -- In insertion sort, you virtually split the array into an sorted and an unsorted part
// -- Assuming that the first element is sorted and remaining elements are unsorted 
// -- Select and unsorted element and compare it with all the elements in the sorted part
// -- If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else shift the larger elements in the sorted part to the right 
// -- Insert the selected element at the right index 
// -- Repeat till all the unsorted elements are in the right order  

function sort(arr){
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = numberToInsert;
    }
}

console.log(sort([-6,-9,-3,5,1,6,12,43,8,9]));

// Time complexity : Big-O = O(n^2)