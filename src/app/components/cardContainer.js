"use client"
import containerStyle from "../css/cards.module.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import scheduleAnimationSequence from "../js/scheduleAni";
import teamAnimationSequence from "../js/teamAni";
import driverAnimationSequence from "../js/driversAni";


gsap.registerPlugin(useGSAP);

const CardContainer = ({ children, page }) => {

  useGSAP(() => {
    if (page == "schedule") scheduleAnimationSequence();
    if (page == "teams") teamAnimationSequence();
    if (page == "drivers") driverAnimationSequence();
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