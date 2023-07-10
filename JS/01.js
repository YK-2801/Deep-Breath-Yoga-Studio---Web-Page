window.addEventListener("scroll", function() {
    var navBar = document.querySelector(".navBar");
    navBar.classList.toggle("backgroundNav", window.scrollY > 0);
})

let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navBar');
let navlist = document.querySelector('.navlist');

burger.addEventListener('click', function(){
        navbar.classList.toggle('h-nav-resp');
        navlist.classList.toggle('v-nav-resp');
})