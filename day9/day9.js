console.log('Djenabou Diallo')
//if statement
let day = true;
let night = false;

if (day){
    console.log (`The condition or statement is ${day}`)
}
//*===check if the value is equal or not.--- only compere the value and ignore the data type// you can not compare 
let num1 ='20';//string data
let num2 = 20 ;//me=umerical data
if (num1==num2){
    console.log(`${num1} and ${num2} are equal to!`)
}
//example 1
let goodMood = true;
let gotSleep = true;
if ( goodMood !== gotSleep){
    console.log('today is a good day!');
}
else{
console.log('I am mooody!');
} // else does not have a condition

//example 2
let a = 5, b = "4", equalNum
if(a===b){
    equalNum = true;
}
else{
    equalNum = false;
}
console.log(`Are the numbers the same? ${equalNum}`)
// More than two statement: example 3
let n1 = 10, n2 =5
if(n1===n2){
    console.log('the number is equal')
}
else if (n1>n2){
    console.log('number 1 is greater than number 2')
}
else if(n2>n1){
    console.log('number 1 is less than 2')
}
else{
    console.log('INVALID ENTRY')
}
///Colors- example 4
let colors=['red','blue', 'green' ,'yellow', 'orange'];
let userPick = parseInt(prompt('selesct a color from 1 to 5'))
let selectColor = colors[userPick -1];

if(selectColor ==='red'){
    console.log('The selected color is red')
}
else if(selecteColor == 'blue'){
    console.log('The selected color is blue')
}
else if(selecteColor == 'green') {
    console.log('The selected color is green')
}
else if(selectColor == 'yellow'){
    console.log('The selected color is yellow')
}
else if(selectColor == 'orange'){
     console.log('The selected color is orange')
}

else {
    console.log(`The selected color is number${userpick} which is not in the list`)
}
// user inpu- example 5
let userInput = prompt ('Enter a number');
let checkInput = parseInt (userInput);
checkInput = isNaN(checkInput);
if (checkInput){
    console.log (`${userInput} is a string or character`)
}
else{
    console.log(`${userInput} is a number!`)
}
///nesting conditition- example-6
let passWord = prompt('enter a password:')
if( passWord.length=6){
    console.log('password have 6+ characters: ')
    if( passWord.indexOf('')===-1)
    console.log (`Great! password = ${passWord} has no space`)
    else{
        console.log(`warning! password = ${passWord} has SPACE!`)}
}
else{
    console.log('password has less than 6 characters!')
}
// example 7- CLICK OKAY OR CANCEL
let name =prompt('enter a name !')
if(name){
    console.log('Welsome to the program')
}
else{
    console.log( 'You did not eneter a name!')
}

// ACTIVITY 5//
console.log('Activity5 if, else if, else statement')
let numberSelect('-','1', )
let userEntry = prompt ('Please Enter a Value')
let checkOutput = parseInt( userEntry)
let checkOutput = isNaN(checkOutput)
if(numberSelect) {
    console.log('is a negative number')
}console.log('Activity5 if, else if, else statement')
let prompt = prompt ('Please enter a number or a string:');
let number = 2;
let number1 = -2;

if(number > 0){
    console.log('the number is positive')
}
