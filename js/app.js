const btn = document.querySelector ('.btn-con');
const btnText = document.querySelector('.btn-con .btn-text');
const btnIcon = document.querySelector ('.btn-con .btn-icon');

btn.addEventListener('click', () => {
  btn.classList.add('sending');
  btnText.innerHTML = ('sending...');

  setTimeout(() => {
    btn.classList.remove('sending');
    btnText.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('sent');
  }, 2000);
});



// Navbar show & hiden 
// $(function () {
//   var lastScrollTop = 0;
//   var $navbar = $('.navbar');

//   $(window).scroll(function(event){
//     var st = $(this).scrollTop();

//     if (st > lastScrollTop) {
//       $navbar.hide()
//     } else {
//       $navbar.show()
//     }
//     lastScrollTop = st;
//   });
// });



// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 500) {
//   $('.navbar').css('background','#3867d6');
//   } else {
//   $('.navbar').css('background','transparent');
//   }
//   });



const backToTopButton = document.querySelector("#back-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction () {
  if (window.pageYOffset > 300){
    if (!backToTopButton.classList.contains("btnEntrance")){
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else{
    if(backToTopButton.classList.contains("btnEntrance")){
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function(){
      backToTopButton.style.display = "none";
      }, 250);
      backToTopButton
    }
  }
}

backToTopButton.addEventListener("click", backToTop);
function backToTop(){
  window.scrollTo (0, 0);
}

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, 'easeInBack', function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


var mobilePromo = document.querySelector('.mobilepromo');
var pictPromoMobile = document.querySelector('.pictpromomobile');
var closePromo = document.querySelector('.closepromo')

mobilePromo.addEventListener('click', function(){
pictPromoMobile.classList.add('pictmobile');
});
closePromo.addEventListener('click', function(){
pictPromoMobile.classList.remove('pictmobile');
});

var instaFeed = document.querySelector('.instafeed');
var instagramFeed = document.querySelector('.instagram-feed');

instaFeed.addEventListener('click', function(){
  instagramFeed.classList.add('insfeed-active');
});