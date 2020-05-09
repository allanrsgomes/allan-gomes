// Back to top
const backToTop = () => {

    const btnTop = document.getElementById('btn-top');
    const arrowTop = document.querySelector('#btn-top img');
    const navbar = document.querySelector('.container-navbar');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTop.classList.add('active');
            arrowTop.classList.add('active');
            navbar.classList.add('scrolled');
        } else {
            btnTop.classList.remove('active');
            arrowTop.classList.remove('active');
            navbar.classList.remove('scrolled');
        }
    });

    btnTop.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

};
backToTop();

// Menu
const navSlide = () => {

    const menuIcon = document.querySelector('.menu-icon');
    const responsiveMenu = document.querySelector('.mobile-menu');
    const linkMenu = document.querySelectorAll('.link-menu');
    const menuIcon2 = document.querySelector('.menu-icon');
    // Lines menu
    const lineOne = document.querySelector('.line1');
    const lineTwo = document.querySelector('.line2');
    const lineThree = document.querySelector('.line3');

    menuIcon.addEventListener('click', () => {
        responsiveMenu.classList.toggle('active');
        // Animation Lines
        lineOne.classList.toggle('active-lines');
        lineTwo.classList.toggle('active-lines');
        lineThree.classList.toggle('active-lines');
        menuIcon2.classList.toggle('active-icon');
    });

    // Close Menu links
    linkMenu.forEach(item => {
        item.addEventListener('click', () => {
            responsiveMenu.classList.remove('active');
            lineOne.classList.remove('active-lines');
            lineTwo.classList.remove('active-lines');
            lineThree.classList.remove('active-lines');
            menuIcon2.classList.remove('active-icon');
        });
    });

}
navSlide();

// Tabs system
const tabSystem = () => {

    var tabLinks = document.querySelectorAll(".tabs h3");
    var tabContent = document.querySelectorAll(".tab");


    tabLinks.forEach(function(el) {
        el.addEventListener("click", openTabs);
    });


    function openTabs(el) {
        var btnTarget = el.currentTarget;
        var services = btnTarget.dataset.services;

        tabContent.forEach(function(el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + services).classList.add("active");
        btnTarget.classList.add("active");
    }

}
tabSystem();

// Fade Animation
AOS.init({
    easing: 'ease-out-back',
    duration: 1200,
    delay: 200,
});