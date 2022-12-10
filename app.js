gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        start: "top top",
        end: "100% 100%",
        scrub: true,
    }
})

tl.to(".header", {y: "-100vh", duration: 20, delay: 6});
tl.to(".container p", {y: "-100vh", duration: 20}, "-=20");
tl.to("#image", {x: "10vw", opacity: .5, duration: 10})