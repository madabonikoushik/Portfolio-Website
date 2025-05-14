var typed= new Typed(".text",{
    strings:["Frontend Developer", "Student","Software Developer"],
   typeSpeed:100,
   backSpeed:100, 
   backDelay:1000,
   loop:true
});
  window.addEventListener("scroll", function () {
    const topButton = document.querySelector(".top");
    const homeSection = document.getElementById("home");
    const homeHeight = homeSection.offsetHeight;
    
    if (window.scrollY > homeHeight - 100) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });
