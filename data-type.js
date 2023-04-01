/* let a=25;
let b='kamaal pasha';
console.log(typeof b); */


//primitive type data:=>

        // 1.number
        // 2.boolean
        // 3.string
        // 4.null
        // 5.undefined
        // 6.symbol.

//example:
/* 
let a='hello';
let b =a;
a='galo'
a='dilo'
console.log(a,b);
 */


//non-primitive type data:=> 1.object & 2.array.

//object:

/* const x = {job:'web-desinger'};
const y = x;
y.job = 'web-developer'
console.log(x,y); */  



/* [N:B:Undefined => means the variable has been declared, but its value has not been assigned.]
example:

let one;
console.log(one); */


/* let x = 0;
// console.log('value of x:', x );
if(x ){
    console.log('this variable is true');
}
else{
    console.log('false ios');
} */
/* 
function add(x,y){
    const sum =x+y;
    return sum;
}
const result =add(12,10);
console.log(result);
 */


/* 
var wish =undefined;
const ourClass ={
    name:'ami',
    pro:null
}
console.log(ourClass.pro);
 */



/* 
//mylove == herlove:

const first ='3';
const second =3; //strict equality (===) operator 
if(first === second){
    console.log('this is true');
}else{
    console.log('condition is false');
} */


/* const a = {name:'samiul'};
const b = {name:'samiul'};
if(a===b){
    console.log('same');
}
else{
    console.log('false');
} */

/* 
const number =100;

function add(first,second){
    const add =first+second;
    console.log(first); // block scope.
    if(add<10){
        var mood ='happy' // var কোডের মধ্যে তার স্কোপের বাইরে  কিন্তু ফাংশন এর মধ্যে যেকোনো জায়গায় কাজ করে .
    }
    console.log(mood);
    return add;
}
const result = add(3,5);
console.log(result);

console.log(number);//global scope.
 */

function stopwatch(){
    let counter =0;
    return function (){
        counter++;
        return counter;   
    }
}
let clock1 = stopwatch();
let clock2 = stopwatch();
console.log(clock1());
console.log(clock1());