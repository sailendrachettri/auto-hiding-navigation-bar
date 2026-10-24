let lastScrollY = window.scrollY;

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