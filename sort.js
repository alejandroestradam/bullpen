/*Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.

Sample Input:
array = [-9, 3, 5, 6, 8, 9]

Sample Output:
[1, 4, 9, 25, 36, 64, 81]
*/


function sortedSquaredArray(array) {

//Not using sort function:


    let result = [];
    
    for(let i = 0; i < result.length; i++) {
        result.push(array[i]*array[i]);
    }
    
    for(let i = 0; i < result.length; i++) {
        if (result[i - 1] > result[i]) {
            let tmp = result[i - 1];
            result[i - 1] = result[i];
            result[i] = tmp;
        }
    }
    return result;

    // Using sort function
    return array.map((value, index)=>(value*value)).sort((a, b) => a -b);
}


console.log(sortedSquaredArray([1, 4, 6, 8, 9, 20, 25, 30, 40, 50]))