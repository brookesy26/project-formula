"use client"

import Title from "@/app/components/title"
import FullSection from "@/app/components/section"
import fs from "@/app/css/section.module.css"
import tS from "@/app/css/title.module.css"
import TeamCards from "@/app/components/teams"
import { useEffect } from "react"

export default function Teams() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <FullSection className={fs.titleSection}>
        <Title headerLevel1={"Teams"} link={"#cardsContainer"} className={tS.title} />
      </FullSection>

      <TeamCards />
    </>
  )
}


