gsap.registerPlugin(ScrollTrigger);
function splitTextIntoSpans(selector) {
  const element = document.querySelector(selector);
  const text = element.textContent;
  const splitText = text.split("").map(char => `<span class="char">${char}</span>`).join("");
  element.innerHTML = splitText;
}

// Split the text into spans
splitTextIntoSpans("#paraMain1");
splitTextIntoSpans("#paraMain2");
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#Main",
    pin: true,
    start: "top top",
    end: "+=700%",
    // markers: true,
    scrub: 1,
  },
});

tl.to(".pink", {
  duration: 1,
  left: "-50%",
  ease: "ease-in-out"
}, 0);

tl.to(".green", {
  duration: 1,
  left: "-50%",
  bottom: "-50%",
  ease: "ease-in-out"
}, 0);

tl.to(".big", {
  duration: 1,
  top: "50%",
  left: "150%",
  ease: "ease-in-out"
}, 0);

tl.to(".orange", {
  duration: 1,
  left: "120%",
  ease: "ease-in-out"
}, 0);

tl.to(".ovalMain", {
  duration: 1,
  scale: 5,
  ease: "ease-in-out"
}, 0);
tl.to("#headingMain", {
  duration: 0.4,
  opacity : 0,
  ease: "ease-in-out"
},0);
tl.to("#paraMain", {
  
  duration: 0.4,
  opacity: 1,
  ease: "ease-in-out"
}, 0);
tl.from("#paraMain1 .char", {
  duration: 0.2,
  opacity: 0.4,
  stagger: 0.05, 
  ease: "ease-in-out"
}, ">");
tl.from("#paraMain2 .char", {
  duration: 0.2,
  opacity: 0.4,
  stagger: 0.05, 
  ease: "ease-in-out"
}, ">");