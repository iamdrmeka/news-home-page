

const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const menuPanel = document.getElementById("menu-panel");

menuBtn.addEventListener("click", function(){
    menuBtn.classList.toggle("menu-close");
    closeBtn.classList.toggle("menu-open");
    menuPanel.classList.toggle("show-mobile-menu");


});

closeBtn.addEventListener("click", function(){
    menuBtn.classList.toggle("menu-close");
    closeBtn.classList.toggle("menu-open");
    menuPanel.classList.toggle("show-mobile-menu");

});