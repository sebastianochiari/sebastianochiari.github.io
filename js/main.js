$(document).ready(function() {
    var navbar = document.getElementById("nav");
    if(window.screen.width < 991) {
        console.log("Sono dentro al primo if");
        navbar.classList.add("bg-white");
    }
});