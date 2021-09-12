// https://greensock.com/forums/topic/19789-follow-by-mouse/

gsap.registerPlugin(ScrollTrigger);

const moveVerical = () => {
  gsap.set(".third-section-vector", { xPercent: -50, yPercent: -50 });

  const vectorSection = document.querySelector(".svg-vector-third-section");
  const pos = { y: window.innerHeight / 2 };
  const mouse = { y: pos.y };
  const speed = 0.35;

  // const xSet = gsap.quickSetter(vectorSection, "x", "px");
  const ySet = gsap.quickSetter(vectorSection, "y", "px");

  window.addEventListener("mousemove", (e) => {
    // mouse.x = e.x;
    mouse.y = e.y;
  });

  gsap.ticker.add(() => {
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    // pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    // xSet(pos.x);
    ySet(pos.y);
  });
};

const animationFadein = () => {
  gsap.utils.toArray("#wave").forEach((el, index) => {
    console.log(el);
    // https://www.youtube.com/watch?v=X7IBa7vZjmo
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "20px 50%",
        toggleActions: "restart pause reverse pause",
        // onLeave: () => console.log("enter"),
        // scrub: true,
        // markers: true,
      },
    });

    tl.set(el, { transformOrigin: "center center" }).fromTo(
      el,
      { opacity: 0, scale: 0.8, y: "+=100" },
      { opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false }
    );
  });
};

moveVerical();
animationFadein();
