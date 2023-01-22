console.log('Djenabou Diallo')
//part 1//
// ACTIVITY 5//
console.log('Activity5 if, else if, else statement')
let useriNput = prompt ('Enter a number or a string')
let inPut = parseInt (useriNput)
let userString = isNaN(inPut);
if (userString){
    console.log(`${useriNput} is a string`)
}
else if(inPut >0){
    console.log(`${useriNput} is a positive number`)
}
else if(inPut <0){
    console.log('number is negative')
}
else{
    console.log('number is zero!')
}
