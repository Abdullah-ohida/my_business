// ==== Get Date =======
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// ==== Fixed NaBar===
const navBar = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav");
    } else {
        navBar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-top")
    } else {
        topLink.classList.remove("show-top")
    }
});
$(document).ready(function () {
    $('.project-flex').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

