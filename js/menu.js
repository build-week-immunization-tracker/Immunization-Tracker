const menu = $(".mobile-links");

$(".border").click(function() {
  if (menu.is(":visible")) {
    menu.slideUp("slow");
  } else {
    menu.slideDown("slow");
  }
});
