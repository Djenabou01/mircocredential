console.log('Djenabou Diallo')
// Loops having different numbers
/*
console.log('the current counter is 1')
console.log('the current counter is 2')
console.log('the current counter is 3')
console.log('the current counter is 4')
console.log('the current counter is 5')
*/
// EX:1 Simplify the previous lines using for loops (++ mean add 1 to the variable)
for(let counter = -1; counter <=5; counter++){
    console.log(`the current counter is ${counter}`)
//(counter +=1 is the same as counter ++:  the sign always comes befor the =)
}
//EX:2( pring numbers from 100 to o inclusive deacreasing order in a step of 10)
for( let y = 100; y >= 0; y -=10){
    console.log(`y=${y}`)
}
// self oparator y=y-
// EX: (print number 0 to 50, exlusive, only even numbers. the program will asks the user to enter the initial ) YOU CAN DELAR THE VARIABLE INSIDE OR OUTSIDE THE FOR(LET) ( nesting inside a for(let))
let num = parseInt(prompt('Enter a number: between 0 and 40'))
for(num;num<50;num++){
    if(num%2===0){
        console.log(`number = ${num}`)
        }
}
// ex:4 for loops in array
let cars =['tesla', 'BMW','Mazda', 'Nissan', 'jeep']
for(let i=0; i<cars.length ;i++ ){
    console.log(`car ${i} = ${cars[i]}`)
}
// Ex 5) for ... of loops to print each element in an array
for (let eachItem of cars){
    console.log(eachItem)
}
// ex:for ---of loop to print each letter string
 let mystring = 'prof. wu'
 for (let eachLetter of mystring){
    console.log(eachLetter)
 }
 // ex:8 nesting for loops
 let outerCounter =1;
 for (outerCounter; outerCounter<=5; outerCounter++){
    console.log(`------OUTER LOOP ${outerCounter}---`)
    for(let innnerCounter = 30; innnerCounter>0;innnerCounter -=10){
        console.log(`inner counter ${innnerCounter}`)
    }
    
 }
 // ex:9  while loop
 let z=1
 while( z<5){
    console.log(`the current is ${z}`)
    z++

 }
 // ex 10) ( consant number)
 const SECRET = 8
 let guesssNum = parseInt(prompt('guess a number between 0 and 10'))
 while (guesssNum !== SECRET){
    guesssNum = parseInt(prompt('WRONG! take a guess again!'))
 }
 console.log(`great job! number ${guesssNum} is the secret number!`)
 //ex11 working with break in loops. loop will be terminated at 9
console.log('-----Example 11---')
for (let t = 20; t>0; t--){
    console.log(`t = ${t}`)
        if (t===9){
            break;
        }
    
}
//ex:12 ) working with continue in a loop. loops will sk
for (let t = 20; t>0; t--){
        if (t===9){
            continue;
        }
        console.log(`t = ${t}`)

}
// ex 10) ( consant number)
const NUMBERS = 8
let guesssNumbers = parseInt(prompt('guess a number between 0 and 10'))
for( let r of NUMBERS){
    console.log(NUMBERS);
    console
}
while (guesssNumbers !== NUMBERS){
   guesssNumbers = parseInt(prompt('WRONG! take a guess again!'))
}