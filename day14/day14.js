console.log ('Djenabou Diallo')
/* EXAMPLE 1 jQuery program*/ 
$('document').ready(function(){
$('.para2').css('border','ridge 5px pink')
$('.a').css({'color':'magenta', 'padding': '1em 2em','background-color': 'lightgreen'})
$('#pExamples').css('text-align','center')
//EXAMPLE2 //
$('div > p:odd').css('color', 'purple')
$('#pExamples > p.para5').css('font-size', '1.3em')
// select the next adjacent element
$('p+ul').css('border','orange dotted 1em')
//Example5//
let p4 =$('.para4')
p4.prev().css('background-color', 'purple')
p4.next().css('background-color', 'pink')
p4.parent().css('font-family', 'sans-serif')
//EXample6
$('.p_append').append('<b>NEW MESSAGE')
$('.p_prepend').append('<b>NEW LINE')
//EX 7
$('<h3> NEW HEADING </h3>').insertAfter('.p_appened').css('background-color', 'lightblue')

//EXAMPLE 10 //
$('#btnProperties').click(function(){
    $('.square').css('background-color','pink')
})
$('#addClass').click(function(){
    $('.square').addClass('btnColor')
})
$('#removeClass').click(function(){
    $('.square').removeClass('btnColor')
})
$('#toggleClass').click(function(){
    $('.toggleClass').toggleClass('btnColor')
})
//EXAMPLE 12 //
function hoverCircle(){
    $('.circle').addClass('btnColor')
    $('.circle').html('<p> Circle was hovered! </p>')
}

function resizeWindow(){  
  $('.circle').html('<p> Window was resized! </p>')
 }
function dblClickCircle(){  
    $('.circle').html('<p>Double click! </p>')
   }
   $('.circle').hover(hoverCircle)
   $(window).resize(resizeWindow)
   $('.circle').dblclick(dblClickCircle)


})
/* js code*/
