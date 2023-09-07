// Problem : Given a sorted array of elements and a target element 't', find the index of 't' in the array. Return -1 if the target is not found.

function recursive_binary_search(arr,target){
    return search(arr,target,0,arr.length - 1);
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(target == arr[midIndex]){
        return midIndex;
    }

    if(target > arr[midIndex]){
        return search(arr,target,midIndex + 1,rightIndex);
    }

    else if(target < arr[midIndex]){
        return search(arr,target,leftIndex,midIndex - 1);
    }

}   

console.log(recursive_binary_search([-5,2,4,6,10],10)) // 4

// Time complexity : Big-O = O(logn)