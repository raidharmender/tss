/*
 * Complete the 'max' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
/*
[1, 32, 4, 43,89, -1]
maxVal = 1
[32, 4, 43, 89, -1]
1 vs 32 -> 32
32 vs. [4, 43, 89, -1]
32 vs 4 -> 32
32 vs. [43, 89, -1]
*/
function max(arr) {
    let maxVal = arr[0]; // Assume the first element is the maximum
    for (let i = 1; i < arr.length; i++) { 
      if (arr[i] > maxVal) { 
        maxVal = arr[i];      
      }
    }
    return maxVal; // Return the maximum value
  }