console.log('djenabou Activity6')
let userEnter = parseInt (prompt('Enter a number between 1 and 10'))
let PutNum = isNaN(userEnter);
while(PutNum===true|| userEnter>10 || userEnter <0){
    if(PutNum){
        userEnter= parseInt(prompt(`${PutNum} is not a number. Enter a number again!`))
        PutNum = isNaN(userEnter);
    }
    else if(userEnter > 11){
        userEnter =parseInt(prompt(`${PutNum} is greater than 10. Enter a number again!`))
    }
    else if(userEnter <= 0){
        userEnter = parseInt(prompt(`${PutNum} is less than 1. Enter a number greater than1`))
    }
} 
console.log('you Enter')


