let open_menu = false;

function toggleMenu(x) {
    const classname = "open";
    const currentPageYOffset = window.pageYOffset;

    if (open_menu) {
        open_menu = false;
        x.classList.remove(classname);
        document.body.classList.remove(classname);
        document.getElementById("mobile-menu").classList.remove(classname);
        document.getElementById("header").style.boxShadow =
            "0px 1px 10px rgba(0, 0, 0, " +
            Math.min(currentPageYOffset / 200, 0.5) +
            ")";
    } else {
        open_menu = true;
        x.classList.add(classname);
        document.body.classList.add(classname);
        document.getElementById("mobile-menu").classList.add(classname);
        document.getElementById("header").style.boxShadow = "none";
    }
}
