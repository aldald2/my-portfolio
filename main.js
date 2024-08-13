
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Claire","UX/UI Designer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


document.addEventListener("DOMContentLoaded", function(){
  const path = window.location.pathname;

  if(path.includes("index.html")){
    const content = "I'm Claire.";
    const text = document.querySelector("p");
    let i = 0;

    function typing(){
      if(i < content.length){
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
      } else{
        clearInterval(typingInterval);
      }
    }

    let typingInterval;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          typingInterval = setInterval(typing, 50);
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.2} );

    const triggerElement = document.querySelector('[data-trigger]');
    observer.observe(triggerElement);
  }
});