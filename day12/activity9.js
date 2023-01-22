console.log('Djenabou Diallo')
//Ex13
console.log('ex----13----')
function yell(msg){
    try{console.log(msg.toUpperCase().repeat(3))
        console.log('please pass as string next time!')
    }
}
function yell(msg){
    try{console.log(msg.toUpperCase().repeat(3))}
    catch(e){
        console.log('please pass as string next time!')
    }
}
//EX12
console.log('ex----12----')
const hen ={
name:'helen',
eggCount: 0,
layAnEgg(){this.eggCount++; return 'EGG'}
}

//EX11
console.log('ex----11----')
const cat ={
    name:'Mickey',
    color: 'Whte with brown spots',
    breeds: 'Unkown',
    meow(){console.log (this.name)}
}

//EX10 Methods
console.log('ex----10----')
const myMath = {
    square(num){return num*num},
    double(num){return num+num},
    area 
    (side){return side*side},
    perimeter(side){ return side*4}
}

//EX 8
/*console.log('ex8----')
function makeBetweenFunc(min,max){
     return function (num){
        if(num>min){
            return true
        }
        else if (num<=max){
            return false
        }
        else{
            return 'CANT COMPARE'
        }
        }

    }
}
*/

//EX7
console.log('------ ex7')
function callTwice(dice){
    dice();
    dice();
}
function rolldice(){
    const roll = Math.trunc(Math.random()*7)
    console.log(roll)
}
callTwice(rolldice)


//EX6
let sum =function (num1, num2){
    return num1 + num2
}
let square = function (num){
return Math.pow(num,2)
}


//EX5
for(var i= 0; i<10; i++){
    console.log(i)
}
console.log(`the last value for i is ${i}`)



//EX3
let message = ('Hello World')
console.log(message)
message = 'Good Evening'
console.log(message)

//EX2
var fullMoon = true;
let species ='HUMAN'
if(fullMoon){
    let species = 'WOLF'
    console.log(`FULL MOON! Lupin is a ${species}`)
}
console.log(`NOT a full moon! Lupin is ${species}`)

//EX1
//GLOBAL Veriable
let msg = 'this is outside message'
// LOCAL Veriable
function displayMsg(){
    let msg = 'Hello World!'
    return(msg)
}
msg = displayMsg()