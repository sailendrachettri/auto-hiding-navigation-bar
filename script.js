let lastScrollY = window.scrollY;
let hamburgerMenu = document.querySelector("#right svg");
let isMenuHidden = true;

window.addEventListener("scroll", ()=>{
    const currentScrollY = window.scrollY;

    if(currentScrollY > lastScrollY){
        console.log("Scroll downward");

        gsap.to("nav", {
            y: -100,
            duration: 1
        })
    }else {
        console.log("Scroll upward");
         gsap.to("nav", {
            y: 0,
            duration: 1
        })
    }

    lastScrollY = currentScrollY;
})


// For the nav items
const timelineForNav = gsap.timeline();

timelineForNav.from("#left", {
    y: 10,
    duration: 0.5,
    delay: 0.3,
    opacity: 0
})

timelineForNav.from("#right ul li", {
    y: 10,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1
})

// For the mobile menu
hamburgerMenu.addEventListener("click", ()=>{
    isMenuHidden = false;
    
    gsap.to("#menubar", {
        x: -500,
        duration: 1
    })
})