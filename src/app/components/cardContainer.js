"use client"
import containerStyle from "../css/cards.module.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import scheduleAnimationSequence from "../js/scheduleAni";

gsap.registerPlugin(useGSAP);

const CardContainer = ({ children }) => {

  useGSAP(() => {
    scheduleAnimationSequence()
  });

  return (
    <>
      {/* Card container section*/}
      <section id={"cardsContainer"} data-testid={'cardsContainer'} className={containerStyle.cardContainer}>
        {children}
      </section>
    </>
  )
}

export default CardContainer