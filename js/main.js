$(function () {
let top = $(".article");
let topH = top.height();
let header = $(".header");
let scrollPos = $(window).scrollTop();

$(window).on("scroll", function () {
scrollPos = $(window).scrollTop();
if (scrollPos > topH) {
header.addClass("fixed");
} else {
header.removeClass("fixed");
}
});
});