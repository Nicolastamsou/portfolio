document.addEventListener("DOMContentLoaded", function() {
    var btnScrollToTop = document.getElementById("btnScrollToTop");

    if (btnScrollToTop) {
        btnScrollToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 100) {
            btnScrollToTop.style.display = "block";
        } else {
            btnScrollToTop.style.display = "none";
        }
    });
});




