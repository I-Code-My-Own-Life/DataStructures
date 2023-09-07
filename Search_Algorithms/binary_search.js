// Problem : Given a sorted array of elements and a target element 't', find the index of 't' in the array. Return -1 if the target is not found.

// Binary search only works on sorted arrays :

// Binary search pseudocode : 
// If the array is empty return -1 
// Find the middle element, if the t is equal to the middle element return it's index 
// If the target is greater than middle element, binary search right half of the array 
// If the target is less than middle element, binary search left half of the array 

// My solution : 

// function find(arr, t) {
//     if (arr.length == 0) {
//         return -1;
//     }
//     let midIndex = Math.floor(arr.length / 2);
//     if (t == arr[midIndex]) {
//         return midIndex; 
//     }
//     if (t > arr[midIndex]) {
//         for (let i = midIndex + 1; i < arr.length; i++) {
//             if (arr[i] == t) {
//                 return i;
//             }
//         }
//     }
//     if (t < arr[midIndex]) {
//         for (let i = midIndex; i >= 0; i--) {
//             if (arr[i] == t) {
//                 return i;
//             }
//         }
//     }
// }

// Big-O = O(n)

// Better solution : 
function find(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid
        }
        else if (target > arr[mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1

}

// Big-O = O(logn)
console.log(find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 6));