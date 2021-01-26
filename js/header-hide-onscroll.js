let prevPageYOffset = window.pageYOffset;

window.onscroll = function () {
  const currentPageYOffset = window.pageYOffset;
  if (prevPageYOffset > currentPageYOffset) {
    document.getElementById("header").style.top = "0";
    document.getElementById("header").style.boxShadow =
      "0px 2px 4px rgba(0, 0, 0, 0.1)";
  } else if (currentPageYOffset > 200) {
    const offsetHeight = document.getElementById("header").offsetHeight;
    document.getElementById("header").style.top = "-" + offsetHeight + "px";
    document.getElementById("header").style.boxShadow = "none";
  }
  prevPageYOffset = currentPageYOffset;
};
