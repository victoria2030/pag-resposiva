
const btn=document.getElementById("btn-bar");
const nav=document.getElementById("nav");

console.log(btn);

let flat=false;

btn.addEventListener(("click"), function(){

  if(!flat){
    nav.classList.add("slide-nav")
    flat=true;
  }else{
    nav.classList.remove("slide-nav")
    flat=false;
  }
})

