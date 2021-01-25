let prevPageYOffset = window.pageYOffset;

window.onscroll = function () {
  const currentPageYOffset = window.pageYOffset;
  if (prevPageYOffset > currentPageYOffset) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevPageYOffset = currentPageYOffset;
};
