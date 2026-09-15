$(function () {
  const $header = $(".header");
  const $top = $(".article");
  let topH = $top.outerHeight();
  let ticking = false;

  function updateHeader() {
    const scrollPos = window.scrollY;
    if (scrollPos > topH) {
      $header.addClass("fixed");
    } else {
      $header.removeClass("fixed");
    }
    console.log(scrollPos); // лог тут, де змінна існує
    ticking = false;
  }

  $(window).on("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });

  $(window).on("resize", function () {
    topH = $top.outerHeight();
  });
});