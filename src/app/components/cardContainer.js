"use client"
import containerStyle from "@/app/css/cards.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import scheduleAnimationSequence from "@/app/js/scheduleAni";
import teamAnimationSequence from "@/app/js/teamAni";
import driverAnimationSequence from "@/app/js/driversAni";

/*
registers GSAP plugin
calls GSAP's custom hook to check which animation function to call dependent on page
JSX returned: children jsx with section container 
*/

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