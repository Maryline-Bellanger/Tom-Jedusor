let btnScrollToTop = document.getElementById('myBtn');

btnScrollToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        btnScrollToTop.style.display = "block"
    } else {
        btnScrollToTop.style.display = "none";
    }
}