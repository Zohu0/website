const currentLocation = location.href;
const menuItem = document.querySelectorAll("a");
const menuLength = menuItem.length;


for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}


burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
rightNav = document.querySelector(".right-nav")
navList = document.querySelector(".nav-list")


burger.addEventListener("click", ()=>{
    rightNav.classList.toggle("v-class-resp");
    navList.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-nav-resp")
})


