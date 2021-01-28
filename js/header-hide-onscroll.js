let prevPageYOffset = window.pageYOffset;

window.onscroll = function () {
    const currentPageYOffset = window.pageYOffset;

    document.getElementById("header").style.boxShadow =
        "0px 1px 10px rgba(0, 0, 0, " +
        Math.min(currentPageYOffset / 200, 0.5) +
        ")";
    document.getElementById("header").style.backgroundColor =
        "rgba(42, 42, 42 ," + currentPageYOffset / 200 + ")";

    if (prevPageYOffset > currentPageYOffset) {
        document.getElementById("header").style.top = "0";
    } else if (currentPageYOffset > 500) {
        const offsetHeight = document.getElementById("header").offsetHeight;
        document.getElementById("header").style.top = "-" + offsetHeight + "px";
        document.getElementById("header").style.boxShadow = "none";
    }

    prevPageYOffset = currentPageYOffset;
};
