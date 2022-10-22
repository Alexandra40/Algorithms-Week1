//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. 
//Your algorithm should do only one iteration of the array (just one for/while loop).
//Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11

const array1 = [3, 5, 7, 1, 9, 11, 4, 500, 200]
const array2 = []

let i=0
while (i<array1.length){
    if (array1[i] < array1[i+1]){
        temp = array1[i]
        array1[i] = array1[i+1]
        array1[i+1] = temp
        i=-1
    }
    i=i+1
}
console.log(array1[2])

