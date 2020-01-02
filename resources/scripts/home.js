// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyIcons()};

// Get the header
const stickyHeader = document.getElementById("navbar-custom");

// Get the offset position of the navbar
let sticky = stickyHeader.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyIcons() {
  if (window.pageYOffset > sticky) {
    stickyHeader.classList.add("sticky");
  } else {
    stickyHeader.classList.remove("sticky");
  }
}

$('.covervid-video').coverVid(1920, 1080);

