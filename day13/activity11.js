console.log('Djenabou Diallo')
// example 2
let b1 = document.querySelector('.button')
b1.onclick = function(){
    alert ('Click on the 2nd button!')
}
// Example 3
let a1 = document.querySelector('.aLink')
function testing(){
    console.log('mouse OVER')
}
a1.onmousehover = testing
a1.onclick = function(){
    console.log('the link was clicked')
}
//example 4
let mouse = document.querySelector('.mouseOut')
mouse.onmouseout = function(){
    console.log('MOUSE OUT')
}
//example 5
let b2 = document.querySelector('.btn2')
b2.addEventListener('click', function(){
    alert('hey there!')
})
//example 6
let btnColor = document.querySelector('.btnColor')
let divColor = document.querySelector('.divColor')
function randomRGB(){
    let randomRed= Math.floor(Math.random()*255)
    let randomGreen= Math.floor(Math.random()*255)
    let randomPurple= Math.floor(Math.random()*255)
    return`rgb(${randomRed},${randomPurple}, ${randomGreen})`
}
btnColor.addEventListener('click', function(){
    divColor.style.backgroundColor =randomRGB()
})
//EXAMPLE 7
let para = document.querySelector('.pmouse')
let btn3 = document.querySelector('.btn3')
function hover1(){
    para.innerHTML  += 'mouse Over'
}
function click1() {
    para.innerHTML +='clicked <br>'
}
para.addEventListener('mouseover', hover1)
/*btn3.addEventListener('dblclick',click1)*/
// Example 10
let inputTxt = document.querySelector('.inputTxt')
inputTxt.addEventListener('keydown',function(){
    console.log('KEYDOWN!')
})
///EXAMPLE11
let display1 = document.querySelector('.display')
window.addEventListener('scroll',function(){
    let pxTop = this.window.pageYOffset
    display1.innerHTML = `${pxTop} px from the top`
})
///EXAMPLE11
let topDiv = document.querySelector('.GOtop')
window.addEventListener('scroll', function(){
    let pxTop = window.pageYOffset
    if(pxTop>=100){
        topDiv.style.display= 'block'
    }
    else{
        topDiv.style.opacity='0'
    }
})

// Example 17
let QCCWebsite  = document.querySelector ('.linkQCC')
QCCWebsite. addEventListener('click', function(e){
    e.preventDefault();
    alert('QCC Website is OFF!')
})

