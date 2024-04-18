"use client"

import Title from "@/app/components/title"
import ScheduleCards from "@/app/components/schedule"
import FullSection from "@/app/components/section"
import sectionStyle from "@/app/css/section.module.css"
import titleStyle from "@/app/css/title.module.css"
import { useEffect } from "react"
import ScrollIndicator from "@/app/components/scrollIndicator"

/*
schedule / home page
useEffect to return scroll position to top
jsx returned: (full section component) (title component) (ScheduleCards component)
*/

export default function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <FullSection className={sectionStyle.titleSection}>
        <Title headerLevel1={"Schedule"} link={"#cardsContainer"} className={titleStyle.title} />
        <ScrollIndicator className={sectionStyle.scrollIndicator} />
      </FullSection>
      <ScheduleCards />
    </>
  )
}