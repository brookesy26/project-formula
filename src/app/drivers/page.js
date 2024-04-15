"use client"

import Title from "@/app/components/title"
import FullSection from "@/app/components/section"
import fs from "@/app/css/section.module.css"
import tS from "@/app/css/title.module.css"
import DriverCards from "@/app/components/drivers"
import { useEffect } from "react"

/*
drivers page
useEffect to return scroll position to top
jsx returned: (full section component) (title component) (driver cards component)
*/

export default function Drivers() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <FullSection className={fs.titleSection}>
        <Title headerLevel1={"Drivers"} link={"#cardsContainer"} className={tS.title} />
      </FullSection>

      <DriverCards />
    </>
  )
}


