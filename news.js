

const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const menuPanel = document.getElementById("menu-panel");
const overLay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function(){
    menuBtn.classList.toggle("menu-close");
    closeBtn.classList.toggle("menu-open");
    menuPanel.classList.toggle("show-mobile-menu");
    overLay.classList.toggle("over-show");


});

closeBtn.addEventListener("click", function(){
    menuBtn.classList.toggle("menu-close");
    closeBtn.classList.toggle("menu-open");
    menuPanel.classList.toggle("show-mobile-menu");
    overLay.classList.toggle("over-show");


});

overLay.addEventListener('click', function(){
    menuBtn.classList.toggle("menu-close");
    closeBtn.classList.toggle("menu-open");
    menuPanel.classList.toggle("show-mobile-menu");
    overLay.classList.toggle("over-show");


});

// this code would have been written better and shorter if I have learn looping, but for now, This is howi can do it till I get better with Javascript.


