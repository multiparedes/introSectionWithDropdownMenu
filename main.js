const hambMenu = document.querySelector(".hamburger-link");
const menuIcon = document.querySelector(".hamburger");

const navMenu = document.querySelector(".navigation-container");

hambMenu.addEventListener("click", () => {

    var menuStat = navMenu.getAttribute("aria-selected");

    if(menuStat == "false") {
        navMenu.setAttribute("aria-selected", "true")

        menuIcon.style.backgroundImage = "url('images/icon-close-menu.svg')"
    } else {
        navMenu.setAttribute("aria-selected", "false")

        menuIcon.style.backgroundImage = "url('images/icon-menu.svg')"

    }
})

const dropdowns = document.querySelectorAll(".dropdown")

for (let index = 0; index < dropdowns.length; index++) {
    dropdowns[index].addEventListener("click", () => {

        var dropdownStatus = dropdowns[index].nextElementSibling.getAttribute("aria-active");
        console.log(dropdownStatus)

        if(dropdownStatus == "false") {
            dropdowns[index].nextElementSibling.setAttribute("aria-active", "true");
            dropdowns[index].getElementsByTagName("span")[0].style.backgroundImage = "url('images/icon-arrow-up.svg')"
        } else {
            dropdowns[index].nextElementSibling.setAttribute("aria-active", "false")
            dropdowns[index].getElementsByTagName("span")[0].style.backgroundImage = "url('images/icon-arrow-down.svg')"

        }
    })    
}