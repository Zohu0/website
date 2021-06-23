const video = document.getElementById("myVideo")
const btn = document.getElementById("myBtn")



function playPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}


const burger = document.getElementById("burger");
const navbar = document.getElementsByClassName("navbar");
const logo = document.getElementsByClassName("logo");
const navItems = document.getElementsByClassName("navItems");

burger.addEventListener("click", ()=>{
    navbar[0].classList.toggle("h-nav-resp");
    logo[0].classList.toggle("v-resp");
    navItems[0].classList.toggle("v-resp");
})




