import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(useGSAP);


//functions for team aniamtions using GSAP
export default function teamAnimationSequence() {
  function moveUp(timeline, target) {
    timeline.to(target, {
      scale: "+=0.1",
      y: "+=50",
    }, "-=0.5");
  }

  function moveOut(timeline, target) {
    timeline.to(target, {
      yPercent: 200,
      opacity: 0
    });
  }

  function FadeIn(timeline, target) {
    timeline.to(target, {
      scale: "+=0.1",
      opacity: 1,
      visibility: "visible",
    }, "-=0.5");
  }

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cardsContainer",
      pin: true,
      pinSpacing: true,
      start: "+=10%",
      end: "1000%",
      scrub: 1,
      // markers: true,
    }
  })


  moveOut(tl, "#card0");
  FadeIn(tl, "#card3")

  moveUp(tl, "#card1");
  moveUp(tl, "#card2");

  moveOut(tl, "#card1");
  FadeIn(tl, "#card4")

  moveUp(tl, "#card2");
  moveUp(tl, "#card3");

  moveOut(tl, "#card2");
  FadeIn(tl, "#card5")

  moveUp(tl, "#card3");
  moveUp(tl, "#card4");

  moveOut(tl, "#card3");
  FadeIn(tl, "#card6")

  moveUp(tl, "#card4");
  moveUp(tl, "#card5");

  moveOut(tl, "#card4");
  FadeIn(tl, "#card7")

  moveUp(tl, "#card5");
  moveUp(tl, "#card6");

  moveOut(tl, "#card5");
  FadeIn(tl, "#card8")

  moveUp(tl, "#card6");
  moveUp(tl, "#card7");

  moveOut(tl, "#card6");
  FadeIn(tl, "#card9")

  moveUp(tl, "#card7");
  moveUp(tl, "#card8");

  moveOut(tl, "#card7");

  moveUp(tl, "#card8");
  moveUp(tl, "#card9");

  moveOut(tl, "#card8");

  moveUp(tl, "#card9");
}
