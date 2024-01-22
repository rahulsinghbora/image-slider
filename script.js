let flag=0;

const slides=document.querySelectorAll(".slide")
const button=document.querySelector(".buttons")

slides[flag].style.display="block"
button.addEventListener("click",(e)=>{

    if(e.target.classList.contains("next")){
        for(let each of slides){
            each.style.display="none"
        } flag = (flag + 1) % slides.length;
        slides[flag].style.display="block"
    }
    else if(e.target.classList.contains("old")){
        for(let each of slides){
            each.style.display="none"
        }flag = (flag - 1 + slides.length) % slides.length;
        slides[flag].style.display="block"
    }
})
    