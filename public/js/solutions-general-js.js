/*A General JS file for Solar, Wind, Microhydro & Geothermal*/
window.onscroll = function() {myFunction()};

const main_navbar = document.getElementById("main_navbar");
const sub_navbar = document.getElementById("sub_navbar");
let sticky = window.innerHeight - 100;

function myFunction() {
  if (window.scrollY >= sticky) {
    console.log("Running sticky!")
    main_navbar.classList.add("first_sticky");
    sub_navbar.classList.add("second_sticky");
  } else {
    console.log("Not running sticky!")
    main_navbar.classList.remove("first_sticky");
    sub_navbar.classList.remove("second_sticky");
  }
}