





const body = document.body;
const html = document.documentElement;
const personal = document.querySelector(".personal");


const burger = document.querySelector(".menu-dropdown");
const narrow = document.querySelector(".narrow-menu");



burger.addEventListener("click", function (e){
  if(narrow.style.display=="none"){
    narrow.style.display = "block";
  } else {
    narrow.style.display="none"
  }
})

function adjustSideNav(){
  const side = document.querySelector("#side-nav-container")
if(window.innerWidth < 995){
  console.log(window.innerWidth)


  side.classList.remove("col-sm-auto");
  side.classList.add("col-sm");


} else {
  side.classList.add("col-sm-auto");
  side.classList.remove("col-sm");
}
}

adjustSideNav();

window.onresize = adjustSideNav;
