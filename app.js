const btn = document.querySelector('.box')
const boby = document.querySelector('.boby')
const boxer = document.querySelector('.boxx')
const bobyy = document.querySelector('.bobyy')
const foxy = document.querySelector('.foxy')
const foxyy = document.querySelector('.foxyy')
const lucky = document.querySelector('.lucky')
const luckyy = document.querySelector('.luckyy')

btn.addEventListener('click', toggleMe)
boby.addEventListener('click', toggleUs)
foxy.addEventListener('click', toggleFoxy)
lucky.addEventListener('click', toggleLucky)

function toggleMe(){
  if(btn.checked){
    boxer.style.display = 'block';
  } else {
    boxer.style.display = 'none';
  }
}

function toggleUs(){
  if(boby.checked){
    bobyy.style.display = 'block';
  } else {
    bobyy.style.display = 'none';
  }
}

function toggleFoxy(){
  if(foxy.checked){
    foxyy.style.display = 'block';
  } else { 
  foxyy.style.display = 'none';
  }
}

function toggleLucky(){
  if(lucky.checked){
   luckyy.style.display = 'block';
  } else {
    luckyy.style.display = 'none';
  }
}


$(function() {
  $(document).scroll(function(){
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
 })

$('#mainNavbar a').on('click', function(event){
 if (this.hash !== '') {
 event.preventDefault();

 const hash = this.hash;

 $('html, body').animate(
   {
     scrollTop: $(hash).offset().top - 100
   },1000
 );

 }
 });



  $(function() {
    const $gallary = $('.gallary a').simpleLightbox();
  })