"use client"

import Card from "./card"
import containerStyle from "../css/cards.module.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import scheduleAnimationSequence from "../js/scheduleAni";
import FullSection from "./section"

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
      {/* Section require for scroll feature - hidden from screen readers*/}
      <FullSection className={containerStyle.ending} ariaHidden={"true"} />
    </>
  )
}

export default CardContainer