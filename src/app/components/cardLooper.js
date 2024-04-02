"use client"

import Card from "./card"
import calObj from "../json/schedule.json"
import containerStyle from "../css/cards.module.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const CardLooper = () => {

  useGSAP(() => {
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
        opacity: 1
      }, "-=0.8");
    }

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ending",
        start: "top",
        end: "+=500%",
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

    moveUp(tl, "#card10");
    moveUp(tl, "#card11");

    moveOut(tl, "#card10");

    moveUp(tl, "#card11");


  });

  return (
    <section id={"cardsContainer"} className={containerStyle.cardContainer}>
      {
        calObj.schedule.map((e, i) => (
          <Card heading={i + 1} key={i} id={`card${i}`} />
        ))
      }
    </section>
  )
}

export default CardLooper