const profile = document.getElementById("profile");
const sideBar = document.querySelector(".sidebar");
const bottomNavs = document.querySelector(".nav-links");

profile.addEventListener("click", (e) => {
    e.preventDefault();
    sideBar.classList.toggle("sidebar-animated");
    bottomNavs.classList.toggle("nav-links-animated");
});
