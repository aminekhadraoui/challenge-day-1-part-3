
/**/
function rentalCar(name,age){
  return age.match(/[18-21]/g) ? "you can only rent on Mondays and Tuesdays" : "you can rental a car" ; 
}
/*
Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0
*/
function sum(n){
   var s = 0;
   for (var i =1;i < n ;i++){
     n> 0 ? s = i+s : "it's not a number";
   } 
   return s;
}
/*
exemple with while 
*/
function sum(n){
   var s = 0;
   while (n >= 1){
    s = s+n;
     n--;
   } 
   return s;
}
/*
Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.
*/
function factorial(n){
   var nb = 1; 
    for(var i = 1; i <=n ; i++){
        nb=i*nb;
    }
    return nb;
} 
/*
Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated, e.g.
*/
function repeatString(str, count) { 
var beg ="";
 for (var i = 1; i <= count ; i++){
     beg=str+beg;
 }
 return beg;
} 
/*

*/
function fib(n){
    nb = 0;
    if(n> 0){
        for(var i = 0 ; i <= n ; i++){
            nb = nb + (i + (i-1));
        }
        return nb;
    }

}
/*
Write function that multiply the number by 10 n time
*/
function multiplyBy10(number, n) {
 var nb = number;
    for(var i = 1 ; i <= n ; i++){
     nb = nb * 10
      }
    return nb;
}
/*
Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g
*/
function sum (start ,end){
  var nb = 0;
    for(var i = start; i <= end ; i ++){
        nb = nb + i;
    }
    return nb;
}

function inc(x) { 
 return x + 1; 
 } 
  function dec(x) { 
 return x - 1; 
 }
 