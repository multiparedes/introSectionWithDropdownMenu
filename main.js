const hambMenu = document.querySelector(".hamburger-link");
const menuIcon = document.querySelector(".hamburger");
const navContainer = document.querySelector(".mobile-nav");

const navMenu = document.querySelector(".navigation-container");

hambMenu.addEventListener("click", () => {

    var menuStat = navMenu.getAttribute("data-shown");

    if(menuStat == "false") {
        navMenu.setAttribute("data-shown", "true");
        navContainer.style.position = "fixed";
        menuIcon.style.backgroundImage = "url('images/icon-close-menu.svg')";
    } else {
        navMenu.setAttribute("data-shown", "false");
        navContainer.style.position = "absolute";
        menuIcon.style.backgroundImage = "url('images/icon-menu.svg')";
    }
})

const dropdowns = document.querySelectorAll(".dropdown")

for (let index = 0; index < dropdowns.length; index++) {
    dropdowns[index].addEventListener("click", () => {

        var dropdownStatus = dropdowns[index].nextElementSibling.getAttribute("data-shown");

        if(dropdownStatus == "false") {
            dropdowns[index].nextElementSibling.setAttribute("data-shown", "true");
            dropdowns[index].getElementsByTagName("span")[0].style.backgroundImage = "url('images/icon-arrow-up.svg')";
        } else {
            dropdowns[index].nextElementSibling.setAttribute("data-shown", "false");
            dropdowns[index].getElementsByTagName("span")[0].style.backgroundImage = "url('images/icon-arrow-down.svg')";
        }
    })    
}