
//----scroll----

$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

//----go top----

$(document).ready(function() {
  $('body').append('<a href="#" id="go-top" title="go-top">go-top</a>');
});

$(function() {
  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow")
    })
  }
});

$(function() {
  $("#go-top").scrollToTop();
});

