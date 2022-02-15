/** Bubble Sort is the sorting algorithm that works by repeatedly
 * swapping the adjacent elements if they are in wrong order.
 *
 * In each pass-through, the highest unsorted value “bubbles”
 * up to its correct position.*/

//Use Bubble sorting to sort the following array

// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  console.log(arr);
}

// This is our unsorted array
var arr = [65, 55, 45, 85, 15, 19, 11, 0];

// Now pass this array to the bblSort() function
bblSort(arr);
