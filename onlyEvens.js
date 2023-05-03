/*
 * Complete the 'onlyEvens' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function onlyEvens(arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}