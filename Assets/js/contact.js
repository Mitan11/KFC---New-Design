
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

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var x = document.getElementById("mySidenav-1");
            if (parseInt(x.style.width) <= 884) {
                document.getElementById("openNavIcon-1").style.display = "block";
                x.style.width = "0";
            }
        });
    });
});