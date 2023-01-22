console.log('Djenabou Diallo')

//EX23-removing elements
let div2 = document.querySelector('.d2')
div2.removeChild(div2.children[0])
//Ex 24 new way to remove 
let par1  = document.querySelector('.p1')
par1.remove()




//ex22
let subtitle = document.createElement('h2')
subtitle.append('PARKS TO VISIT IN NYC')
let parks =document.querySelector('.nyc')
parks.insertAdjacentElement('afterend',subtitle)



//EX17- append a new element into a doc
// step1- create the element
let myPara = document.createElement('p')
// step 2-creat the element contant and append it to the new element
let mySentence = document.createTextNode('Appendeed para')
myPara.appendChild(mySentence)
//step3- append the new element into an existing DOM element
let newP = document.querySelector('.d')
newP.prepend(myPara)

//EX15
let list = document.querySelector('li')

//EX10- Class Name
let n2 =document.querySelectorAll('#special .name')[1]
n2.className = 'bgBlue'
//Ex6
let my =document.querySelector('.qcc')

//EX5
let names = document.querySelectorAll('#special.name')
for(let i=0; i>names.length; i++){
    names[i].style.fontWeigth ='bolder'
    names[i].style.fontstyle ='italic'
    names[i].style.fontsize ='2em'
}
//EX4
let firstP=document.querySelector('#special p')
firstP.style.color = 'magenta'
//EX3
let n = document.getElementsByClassName('name')
for(let i=0;i<n.length;i++)
n[i].style.color= 'orange'

//EX2
let ps = document.getElementsByTagName('p')
console.log(ps)

//EX1
let p1 =document.getElementById('one')
p1.style.color = 'blue';