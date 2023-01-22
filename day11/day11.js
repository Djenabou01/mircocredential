console.log('Djenabou Diallo')
///EX1
function msg(){
    console.log('Hello World!')
}
msg()//function calling (*3)
msg()
msg()
function printCount(){
    for(let i = 3; i>0; i -= 1 ){
        console.log(`counting = ${i}`)
    }
}
printCount()
//EX 3
function greeting(name){
    console.log(`Welcome to the program ${name}`)
}
//EX4 ( to uppercase is a strinf"" method")
function upperMessage(message){
    let upper = message.toUpperCase();
    console.log(upper)
}
let user = prompt ("Enter a message");
upperMessage(user);
// EX 5
function greet(firstName, lastName){
    console.log(`Welcome ${firstName} ${lastName[0].toUpperCase()}`)
}
//Ex 6
function printMsg(message, numcount){
    for(let counter = 1; counter<=numCount; counter++){
        console.log(`counter = ${counter} .Message = ${message}`)
    }
}
//EX 7 Dice
function isSnakeEyes(dice1,dice2){
   if(dice1===1 && dice2===1){
    console.log("Snake Eyes!")
   }
   else{
    console.log("Opps! Not a snake eyes!")
   }
        
}
//EX 8 return mark the end of the function. what ever come next wont be entered break of a function
function sumXY(){
    let x=7, y=3;
    return x+y
    console.log('this line is after the return')
}
//EX9- function with parameter and return value
function doubleNumber(number){
    let dNumber = number*2
    dNumber =number*3
    return dNumber
}
//EX 10-function with parameter and return value
function sumNum(num1, num2) {
    let sum =num1 + num2
    return sum
}
let a = -5,b = 8, c =2
let number1 = sumNum( b,c)
let number2 =sumNum(a,c)
//EX11-
function weather(temperature){
    if(temperature>=75){
        return true
    }
    else{
        return false
    }
}
let userWeather = parseInt(prompt('What is the termperature like today?'))
let userT = weather(userWeather) 
//Ex 12 return notes: arrays arguments in functions
function lastElement(arrayInput){
    if (arrayInput===undefined) {
        return "you didn't enter an array"
    }
    else if ( arrayInput.length !==0){
        let lastIndex = arrayInput.length -1
        return arrayInput[lastIndex]
    }
    else{
        return "array is emty"
    }
}
let array1 = ['lion',23, false, 'orange',89]
let arrayAnswer = lastElement(array1)
//Ex13-buildin functions
let num = Math.PI
//EX14
function picNum(){
    let pick =Math.floor(Math.random()*10)
    return pick
}

