const scrollers1 = document.querySelectorAll(".scroller1");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers1.forEach((scroller1) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller1.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner1 = scroller1.querySelector(".scroller__inner1");
    const scrollerContent1 = Array.from(scrollerInner1.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent1.forEach((item) => {
      const duplicatedItem1 = item.cloneNode(true);
      duplicatedItem1.setAttribute("aria-hidden", true);
      scrollerInner1.appendChild(duplicatedItem1);
    });
  });
}
