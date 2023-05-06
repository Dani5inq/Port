const hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-menu")

hambuger.addEventListener('click', () =>{
    hambuger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hambuger.classList.remove('active')
    navMenu.classList.remove('active')
}))

const logo = document.getElementById("loggo")
const lc = document.getElementsByClassName("logo")

const logoColor = () =>{
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   logo.style.color = '#' + randomColor;

}
logo.addEventListener("click", logoColor)