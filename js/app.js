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


// scroll navbar
// scroll
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
                }, 1250, 'easeInOutExpo', function () {
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


//Navbar show & hiden 
$(function () {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');

  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if (st > lastScrollTop) { // scroll down
      
      // use this is jQuery full is used
      $navbar.hide()
      
      // use this to use CSS3 animation
      // $navbar.addClass("fade-out");
      // $navbar.removeClass("fade-in");
      
      // use this if no effect is required
      // $navbar.hide();
    } else { // scroll up
      
      // use this is jQuery full is used
      $navbar.show()
      
      // use this to use CSS3 animation
      // $navbar.addClass("fade-in");
      // $navbar.removeClass("fade-out");
      
      // use this if no effect is required
      // $navbar.show();
    }
    lastScrollTop = st;
  });
});



$(window).scroll(function () {
  if ($(window).scrollTop() >= 500) {
  $('.navbar').css('background','#0984e3');
  } else {
  $('.navbar').css('background','transparent');
  }
  });

