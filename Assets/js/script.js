// Preloder
const loder = document.getElementById("preloder");
window.addEventListener('load',function(){
    loder.style.display = 'none';
});

// After HTML is loded this Script will be loded
document.addEventListener('DOMContentLoaded', function () {

    // Toggle Navigation of mobile screen
    const openNav = document.querySelector('#openNavIcon-1');
    const closeNav = document.querySelector('.closebtn-1');
    const toggles = document.querySelectorAll('.menu-btn-1');

    openNav.addEventListener('click', function () {
        document.getElementById("openNavIcon-1").style.display = "none";
        document.getElementById("mySidenav-1").style.width = "100%";
    });

    closeNav.addEventListener('click', function () {
        document.getElementById("openNavIcon-1").style.display = "block";
        document.getElementById("mySidenav-1").style.width = "0";
    });

toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        var x = document.getElementById("mySidenav-1");
        if (parseInt(x.style.width) <= 884) {
            document.getElementById("openNavIcon-1").style.display = "block";
            x.style.width = "0";
        }
    });
});


    // Slider
    const slides = document.querySelectorAll(".sliders");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let i = 0;

    function ActiveSlide(n) {
        for (slide of slides)
            slide.classList.remove("enable");
        slides[n].classList.add("enable");
    }

    // Previous Button

    prev.addEventListener('click', function () {
        if (i === 0) {
            i = slides.length - 1;
            ActiveSlide(i);
        } else {
            i--;
            ActiveSlide(i);
        }
    });

    // Next Button

    function nextSlide() {
        if (i === slides.length - 1) {
            i = 0;
        } else {
            i++;
        }
        ActiveSlide(i);
    }

    next.addEventListener('click', nextSlide);

    // Auto-change slides every 5 seconds
    setInterval(nextSlide, 5000);

});