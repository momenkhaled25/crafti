/*
* MOBILE NAVBAR TOGGLE
*/
const navbar = document.querySelector("[data-navbar]");
const dataNavtoggler = document.querySelectorAll("[data-nav-toggle]");
const overLay = document.querySelector("[data-overlay]");



// for( let i=0 ; i<dataNavtoggler.length ; i++){
//     dataNavtoggler[i].addEventListener("click",function(){
//         navbar.classList.toggle("active");
//         overLay.classList.toggle("active");
//     })   
// }



dataNavtoggler.forEach((button)=>{
    button.addEventListener("click",() =>{
        navbar.classList.toggle("active");
        overLay.classList.toggle("active");
})
})



/*
*Active header
*/
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    header.classList.toggle("active", this.scrollY >= 50);
});



