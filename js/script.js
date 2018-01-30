// window.onload = function(){
//   const para = document.querySelectorAll('.parallax-mirror');
//   window.addEventListener("scroll", navScroll);
//
//   function navScroll(){
//     let scrollTop = window.pageYOffset;
//     console.log(para)
//
//     if (scrollTop > 100){
//       nav.classList.add("small");
//       sitewrap.classList.add('active');
//       para.forEach( (p) => {
//         p.classList.add('active');
//       } );
//     }
//
//     else if(scrollTop < 100 && nav.classList.contains("small")){
//       nav.classList.remove("small");
//       sitewrap.classList.remove('active');
//       para.forEach( (p) => {
//         p.classList.remove('active');
//       } );
//     }
//   }
// }

// minimize nav and body margin-top on scroll
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const sitewrap = document.querySelector('.site-wrap');

// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});

// shop item - caption on $hover
const products = document.querySelectorAll('.product');
products.forEach( (product) => {
  product.onmouseover = function(){ product.classList.add("active"); }
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

// news images - caption on $hover
const newsItems = document.querySelectorAll('.news-items .item');

newsItems.forEach((item)=>{
  item.onmouseover = showCaption;
  item.onmouseout = removeCaption;
})

function showCaption(){
  this.classList.toggle('active');
}

function removeCaption(){
  this.classList.toggle('active');
}

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
