//1. Addition
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. 
//To solve this task you might want to use the modulus operator.

//for loop for number 200 till 2700
//can divide to 3 or 5, not both => we have to make an if stmnt.
//2 if stmnt.
//let x = 0

//for(let i = 200; i<=2700; i++ ){
//​if (!(i % 3 ===0  && i % 5===0) && (i %3 ===0 || i % 5 ===0)){

//x = x+i
//console.log(x)
  
//}
//}
//==========================================================================================
//2.Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. 
//When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
//for loop
// another array to save data after the loop

 //const xy = [2,1,6,4,-7]
 //const xy2 =[]
 //limit = xy.length-1

 //for (let i=0; i<xy.length; i++){
    //xy2[limit - 1] = xy[i]
 //}
 //console.log(xy)
 //console.log(xy2)

 //======================================================================================

 //3.FizzBuzz
 //Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers 
 //that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

 //var result = 0;
 //for (let i = 1; i<=135; i++){
    //if (i % 3 ==0 && i % 5 ==0){
        //result = 'FizzBuzz';
    //} else if (i % 5 ==0){
        //result = 'Buzz';
    //} else if (i % 3 ==0){
       // result = 'Fizz';
    //} else {
     //   result = i;
    //}
    //console.log(result)
 //}
 //const FB = []

//for ( i=0; i<= 135; i++){
    
    //if(i % 3 ===0 && i % 5 ===0 ){
        //FB[i-1] = "FizzBuzz";
    //} else if(i % 3 ===0){
        //FB[i-1] ="Fizz";
   // } else if(i % 5 ===0){
    //    FB[i-1] ="Buzz";
   // } else {
    //    FB[i-1] =i ;
    //}
//}
//console.log(FB)

//=================================================================================
//4. Fibonacci

//For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. 
//A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
//0 1 1 2 3 5 8 13 21...

//start counting from 0  (z)
// the number 1  (v)
//the third variable to contain the adding operation

//let z = 0;
//let v = 1;
//let r = 0;

//while (z<10000){
   //z = r + v;
    //r = v;
    //v = z;
    //console.log(z)
//}

//=======================================================================================

//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

Array = [1,-2,4,-21,3]
for (i=0; i<Array.length;{
    if (Array[i] < 0;) {
        Array.splite (i,1);
    } else {
        i++
    }
}
console.log(Array)

//===============================================================

// 6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, 
//so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

//let stringArray = ['Man', 'I','Love','The','Matrix','Program']

//const selectTheWord = stringArray[5].length
// stringArray.splice(5,1)
//stringArray[5]=""

//for(i=0; i<selectTheWord; i++){
//    stringArray[5]= stringArray[5]+"*" 
//}
//console.log(stringArray)