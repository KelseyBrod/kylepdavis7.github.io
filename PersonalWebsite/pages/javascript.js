window.addEventListener('scroll', parallax);

function parallax() {
    
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".newbox2");
    var parallax2 = document.querySelector(".newbox3");
    var parallax3 = document.querySelector(".newbox4");
    if (scrolled>700){
        var coords2 = ((scrolled-701)*-2) + 'px';
        var coords3 = (scrolled) + 'px';
    } else {
        var coords2 = 0 ;
        var coords3 = (scrolled) + 'px';
    }
    if (scrolled>1400){
        var coords4 = ((scrolled-1401)*2) + 'px';
        var coords5 = (scrolled) + 'px';
    } else {
        var coords4 = 0 ;
        var coords5 = (scrolled) + 'px';
    }
    var coords = (scrolled)*2 + 'px';
    var coords1 = (scrolled) + 'px';
    
   
    parallax.style.transform = 'translate(' + coords + ',' + coords1 + ')' ;
    parallax2.style.transform = 'translate(' + coords2 + ',' + coords3 +')';
    parallax3.style.transform = 'translate(' + coords4 + ',' + coords5 +')';
};