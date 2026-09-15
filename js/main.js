$(function () {
  const header = $(".header");
  const scrollOffset = 100; 

  function checkScroll() {
    let scrollPos = $(window).scrollTop();

    if (scrollPos > scrollOffset) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  checkScroll();
  $(window).on("scroll resize", checkScroll);
});
