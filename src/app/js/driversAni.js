import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(useGSAP);


export default function driverAnimationSequence() {
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
      opacity: 1
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
  FadeIn(tl, "#card10")

  moveUp(tl, "#card8");
  moveUp(tl, "#card9");

  moveOut(tl, "#card8");
  FadeIn(tl, "#card11")

  moveUp(tl, "#card9");
  moveUp(tl, "#card10");

  moveOut(tl, "#card9");
  FadeIn(tl, "#card12")

  moveUp(tl, "#card10");
  moveUp(tl, "#card11");

  moveOut(tl, "#card10");
  FadeIn(tl, "#card13")

  moveUp(tl, "#card11");
  moveUp(tl, "#card12");

  moveOut(tl, "#card11");
  FadeIn(tl, "#card14")

  moveUp(tl, "#card12");
  moveUp(tl, "#card13");

  moveOut(tl, "#card12");
  FadeIn(tl, "#card15")

  moveUp(tl, "#card13");
  moveUp(tl, "#card14");

  moveOut(tl, "#card13");
  FadeIn(tl, "#card16")

  moveUp(tl, "#card14");
  moveUp(tl, "#card15");

  moveOut(tl, "#card14");
  FadeIn(tl, "#card17")

  moveUp(tl, "#card15");
  moveUp(tl, "#card16");

  moveOut(tl, "#card15");
  FadeIn(tl, "#card18")

  moveUp(tl, "#card16");
  moveUp(tl, "#card17");

  moveOut(tl, "#card16");
  FadeIn(tl, "#card19")

  moveUp(tl, "#card17");
  moveUp(tl, "#card18");

  moveOut(tl, "#card17");

  moveUp(tl, "#card18");
  moveUp(tl, "#card19");

  moveOut(tl, "#card18");
  moveUp(tl, "#card19");
}
