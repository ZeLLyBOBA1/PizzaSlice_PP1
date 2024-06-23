const navigationHeight = document.querySelector('header').offsetHeight;

console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 10 + "px");


let popUpLabel = document.getElementById("pop-up-label");
let sidebarCheckbox = document.getElementById("sidebar-checkbox");

function closeSidebar(event){
    sidebarCheckbox.checked = false;
}

popUpLabel.addEventListener("click", closeSidebar)
    


