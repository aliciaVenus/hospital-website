

let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("slider");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
    
    
    
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slider");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 10000); // Change image every 2 seconds
    }


    // gallery

    var fullimg1 = document.getElementById("fullimg1");
    var fullimg = document.getElementById("fullimg");

    function openfullimg(pic){
        fullimg1.style.display = "flex";
        fullimg.src = pic;
    }

    function closefullimg(){
        fullimg1.style.display = "none";
    }

    // Services

    var currentIndex = 1;
    displaySlides(currentIndex);
   
   
    function displaySlides(num) {
   var x;
   var slides = document.getElementsByClassName("all-services");
   if (num > slides.length) { currentIndex = 1 }
   if (num < 1) { currentIndex = slides.length }
   for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
   }
   slides[currentIndex - 1].style.display = "block";
   }
   
   function setSlides(num) {
   displaySlides(currentIndex += num);
   }
   


  //  reveal in scroll

  ScrollReveal({ reset: true });

  ScrollReveal().reveal(".gal-title", {
    duration: 4000,
    scale: 0.85
  });
  

   

   
