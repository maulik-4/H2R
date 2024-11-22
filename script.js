Shery.imageEffect(".back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    aspect: { value: 2.0658499234303216 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.07, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.83, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.43, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

let elems = document.querySelectorAll(".elems");

elems.forEach((elem) => {
  let allH1 = elem.querySelectorAll("h1");
  let index = 0;
  let animating = false;

  document.querySelector(".main").addEventListener("click", () => {
    if (!animating) {
      animating = true;
      gsap.to(allH1[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 0.5,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === allH1.length - 1 ? (index = 0) : index++;

      gsap.to(allH1[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
