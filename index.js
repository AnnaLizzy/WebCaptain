var slideIndex=1;
showSlides(slideIndex);
// next/ pre controls
   function plusSlides(n){
      showSlides(slideIndex += n);
   }
   function currentSlide(n){
       showSlides(slideIndex += n);
   }
   function showSlides(n){
       var i;
       var slides = document.getElementsByClassName("mySlides");
       var dots = document.getElementsByClassName("dot");
       if (n > slides.length){ slideIndex=1}
       if (n < 1){ slideIndex = slides.length}
       for (i=0;i<slides.length;i++){
           slides[i].style.display= "none";
       }
       for (i = 0; i<dots.length;i++){
           dots[i].className= dots[i].className.replace("active", "");
       }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += "active";
   
   }
//slide auto
   var slideIndex = 0;
   showSlides();
   
   function showSlides() {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1}
     slides[slideIndex-1].style.display = "block";
     setTimeout(showSlides, 7000); // Change image every 7 seconds
   } 
// dark-mode
function myfunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
/* menu ẩn 
function openNav(){
    document.getElementById("mySidenav").style.width ="250px";
    document.getElementById(body).style.marginLeft="250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById(body).style.marginLeft="0";
}*/
function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}
//modal boxes
var modal =document.getElementById("myModal");
var btn = document.getElementById("mybtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick= function(){
    modal.style.display="block";
}
span.onclick=function(){
    modal.style.display="none";
}
window.onclick=function(event){
    if(event.targget == modal){
        modal.style.display= "none";
    }
}