!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";var o=n(2);!function(t){t&&t.__esModule}(o);console.log("😎"),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){var t=$(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}}),$(".contact-us p").click(function(){$(this).hide(),$(".formulaire-contact").show()}),$(".exit-formulaire-contact span").click(function(){$(".formulaire-contact").hide(),$(".contact-us p").show()}),$(".formulaire-contact form button").click(function(t){if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test($(".formulaire-contact form input").val()))return alert("this is not valid email"),t.preventDefault(),!1;t.preventDefault();var e=$(".formulaire-contact form");e.children().hide(),e.append("<p>Nous avons bien reçu votre message, nous reviendrons vers vous dans les plus brefs délais</p>")})},function(t,e){}]);
//# sourceMappingURL=bundle.js.map