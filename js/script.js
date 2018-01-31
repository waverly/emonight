window.onload = function(){

  sliderAdjust();

  console.log(window.innerWidth);
  if (window.innerWidth > 1299){
    const para = document.querySelectorAll('.parallax-mirror');

    var position = $(window).scrollTop(); // should start at 0

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > position) {
        console.log("scrolling downwards");
        nav.classList.add("small");
        sitewrap.classList.add('active');
        para.forEach( (p) => {
          p.classList.add('active');
        } );
      } else {
        console.log("scrolling upwards");
        nav.classList.remove("small");
        sitewrap.classList.remove('active');
        para.forEach( (p) => {
          p.classList.remove('active');
        } );
      }
      position = scroll;
    });
  }
  else{
  }

  window.onresize = function(){

    sliderAdjust();

    // nav resize
    console.log('resized');
    if (window.innerWidth > 1299){
      const para = document.querySelectorAll('.parallax-mirror');
      var position = $(window).scrollTop(); // should start at 0
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          console.log("scrolling downwards");
          nav.classList.add("small");
          sitewrap.classList.add('active');
          para.forEach( (p) => {
            p.classList.add('active');
          } );
        } else {

        }
        position = scroll;
      });
    }
    else if (window.outerWidth < 1300){

    }
  }
}


const slider = document.querySelector('.carousel');
function sliderAdjust(){
  console.log('inside of slider adjust');
  // if (window.innerWidth < 1001 ){
  //   console.log('inside of small size');
  //   slider.setAttribute('data-flickity', '{ "groupCells": 1 }');
  // }
  //
  // else if (window.innerWidth > 1000 ){
  //   console.log('inside of LG size');
  //   slider.setAttribute('data-flickity', '{ "groupCells": 4 }');
  // }
}

// minimize nav and body margin-top on scroll
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const sitewrap = document.querySelector('.site-wrap');

// shop item - caption on $hover
const products = document.querySelectorAll('.product');
products.forEach( (product) => {
  product.onmouseover = function(){ product.classList.add("active"); console.log('moused over'); }
  product.onmouseout = function(){ product.classList.remove("active");}
})

// mobile menu on Click
const burger = document.querySelector('burger');
burger.addEventListener("click", ()=>{
  burger.classList.toggle("active");
  nav.classList.toggle("expand");
});

// clicking on any link in mobile will close menu

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", ()=>{
    nav.classList.toggle("expand");
  })
})

// collection 3
const colItems = document.querySelectorAll('.col-item');

colItems.forEach((item)=>{
  item.onmouseover = showCaption;
  item.onmouseout = removeCaption;
})

function showCaption(){
  this.classList.toggle('active');
}

function removeCaption(){
  this.classList.toggle('active');
}
