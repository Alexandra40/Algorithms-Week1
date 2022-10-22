//print numbers from 1-135
//array
//print every index

//for(let x=0; x<=135; x++){
 //   console.log(x)
//}

//Print Odd Numbers 1 - 135
//same as algorithm 1
//get odd numbers y= y+2
//for (let y=1; y<=135; y=y+2){
  //  console.log(y)
//}
    
//Sum of Printed Numbers
//Number is: 0 Sum: 0
//Number is: 1 Sum: 1
//Number is: 2 Sum: 3
//Number is: 3 Sum: 6
//array not allowed

//let y=0
//for (let x=0; x<=100; x++){
    //y=x+y
    //console.log("index is: "+x+" Sum:"+y);
//}

//4.Print the elements of an array
//Given an array X = [1,4,2,12],write a program that will iterate through the array and print all numbers on the screen. 
//Your program should work with arrays of all sizes.

//X=[1,4,2,12,15,13,17,20,100]

//X.forEach(index => {console.log(index)});

//5.Find Max
//Given an array X, write a program that would find the maximum value of the array. 
//should work also work with negative values (eg. X = [2,-3,-1]) and zero.

//console.log(Math.max(...x))

//6.Given an array X, write a program that will return the average value of all elements in the array. 
//For example, for array X = [2,1,3] your output should be 2.

//Let sum=0
//const w = [2,1,3]

//for(Let i=0; i<w.length; i++){
   // sum = w[i]+sum
//}
//console.log(sum/w.lengh)

//7.Given an array X, write a program that will remove all negative numbers and replace them with a 0. 
//For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

//let Q = [2,-1,4,-3,-5]

//for(let i=0; i<Q.length; i++)
//if(Q[i]<0){
//   Q[i]=0
//}

//console.log(Q)

//8.Write a program that takes an array of numbers and turns the negative values to strings. 
//For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

P = [1,-4,0,-1]
for(let x = 0; x<P.length; x++){
    if(P[x]<0){
        P[x]= "Turing"
    }
}
console.log(P)

