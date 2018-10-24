console.log('😎')

import app from './../scss/app.scss'

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
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
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$('.contact-us p').click(function () {
    $(this).hide();
    $('.formulaire-contact').show();
});

$('.exit-formulaire-contact span').click( function () {
    $('.formulaire-contact').hide();
    $('.contact-us p').show();

});
$('.formulaire-contact form button').click(function (event) {
    var email_address = $('.formulaire-contact form input');
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!email_regex.test(email_address.val())){
      alert('this is not valid email');
      event.preventDefault(); return false;
    }
    event.preventDefault();
    var form_contact = $('.formulaire-contact form');
    form_contact.children().hide();
    form_contact.append("<p>Nous avons bien reçu votre message, nous reviendrons vers vous dans les plus brefs délais</p>");
});