function insertionSort(arr) {
  // Iterate over each element starting from the second element

  for (let i = 1; i < arr.length; i++) {
    // Store the current element in a variable
    let currentValue = arr[i];
    // Variable to help with shifting elements
    let j;

    // Loop to find the correct position for currentValue in the sorted portion
    // Compare currentValue with elements in the sorted portion (left side)
    // Shift elements that are greater than currentValue one position to the right
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    // Place the currentValue in its correct position in the sorted portion
    arr[j + 1] = currentValue;
  }

  // Return the sorted array
  return arr;
}

// Test the function with an example array and log the result
console.log(insertionSort([12, 4, 1, 67, 32]));
