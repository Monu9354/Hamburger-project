const menuIcon = document.querySelector(".menu-icon-container");
const toggleMenu = document.querySelector(".nav-content-container");
const toggleMenuCloser = document.querySelector(".menu-closer");


menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu.classList.remove('show-menu');
    document.addEventListener("click" , () => {
        toggleMenu.classList.add("show-menu");
    })
    toggleMenu.addEventListener("click" , (e) => {
        e.stopPropagation();
        
    })
    toggleMenuCloser.addEventListener("click", () => {
        toggleMenu.classList.add("show-menu");
        
    })
}) 