// Feb 3, 2018

window.onload = function(){
  // minimize nav, add body/parallax margin-top on scroll
  const nav = document.querySelector('nav');
  const body = document.querySelector('body');
  const sitewrap = document.querySelector('.site-wrap');


  if (window.innerWidth > 1299){
    const para = document.querySelectorAll('.parallax-mirror');
    var position = $(window).scrollTop(); // should start at 0
    var lastScrollTop = 0;
    // element to detect scroll direction of
    var el = $(window),

    // initialize last scroll position
    lastY = el.scrollTop();

    el.on('scroll', function() {
        // get current scroll position
        var currY = el.scrollTop(),
        // determine current scroll direction
        y = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');

        console.log(currY, lastY, y);

        if (y === 'down'){
          if (currY > 10){
          console.log('nav should have small class');
            nav.classList.add("small");
            if (sitewrap){
              sitewrap.classList.add('active');
            }
            para.forEach( (p) => {
              p.classList.add('active');
            } );
          }
        }
        else if (y === 'up'){
          if (currY > 10){
            console.log('scrolling upwards - nav should not have small class');
            nav.classList.remove("small");
            if (sitewrap){
              sitewrap.classList.remove('active');
            }
            para.forEach( (p) => {
              p.classList.remove('active');
            } );
          }
        }
        lastY = currY;
    });
  }

  window.onresize = function(){

    // nav resize
    if (window.innerWidth > 1299){
      const para = document.querySelectorAll('.parallax-mirror');
      var position = $(window).scrollTop(); // should start at 0
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          nav.classList.add("small");
          if (sitewrap){
            sitewrap.classList.add('active');
          }
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
