// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function initiate() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
initiate();



window.addEventListener("load", () => {
  const firsth1 = document.querySelectorAll(".l1 h1,p");

  gsap.from(firsth1, {
    duration: 2, 
    y: 10,
    rotate: 2,
    opacity: 0,
    delay: 0.5,
    duration: 0.8, 
  });
  
});

// var tl3 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page4",
//         scroller: ".main",
//         // markers:true,
//         start: "top 80%",
//         end: "top 20%",
//         scrub: 3
//     }
//   })
//   tl3.to(".main",{
//     backgroundColor:"#080d13"
//   })

document.getElementById("myVideo").playbackRate = 0.8;

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main")

document.addEventListener("mousemove",(dets)=>{
  cursor.style.left = dets.x + 2 + "px";
  cursor.style.top = dets.y + 2 + "px";
})
