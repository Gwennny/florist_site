const logo = document.querySelectorAll('#logo path');
for(let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is  ${logo[i].getTotalLength()}`);
}
const navSlide= () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.5}s`
                }
            })
    //Burger Animation
    burger.classList.toggle('toggle')
    });


    //animating links 
    
}
 navSlide();


 const slideImage = document.querySelectorAll(".slide-image");
 const slidesContainer = document.querySelector(".slides-container");
 const nextBtn = document.querySelector("next-btn");
 const prevBtn = document.querySelector(".prev-btn");
 const navigationDots = document.querySelector(".navigation-dots");
let numberOfImages = slideImage.length;
let sldeWidth = slideImage[0].clientWidth;

 //setting up the image slider 
 function init(){
     /*
     slideImage[0] = 0
     slideImage[1] = 100%
     slideImage[2] = 200%
     */
    slideImage.forEach((img, i)=>{
        img.style.left = i * 50% + "%";
    });
    slideImage[0].classList.add("active");
 }
 init();
 function createNavigationDots(){
     for (let i = 0; i < numberOfImages; i++){
         const dot = document.createElement("div");
         dot.classList.add("single-dot");
         navigationDots.appendChild(dot);
     }
     navigationDots.children[0].classList.add("active");
 }
//next button
nextBtn.addEventListener("click",()=>{
    slidesContainer.style.transform = "translateX(-" + 70 +"px)";
});