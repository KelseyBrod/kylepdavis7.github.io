window.addEventListener('scroll', parallax);

function parallax() {
    
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".parallax");
    var parallaxh = document.querySelector(".parallaxh");
    var coords = (scrolled * .8) + 'px';
    var coords2 = (scrolled * .2) + 'px';
    parallax.style.transform = 'translateY(' + coords + ')';
    parallaxh.style.transform = 'translateX(' + coords2 + ')';
    
};