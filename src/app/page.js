import Title from "../app/components/title"
import ScheduleCards from "./components/schedule"
import FullSection from "./components/section"
import sectionStyle from "./css/section.module.css"

export default function Home() {

  return (
    <>
      <FullSection className={sectionStyle.titleSection}>
        <Title headerLevel1={"Schedule"} link={"#cardsContainer"} />
      </FullSection>
      <ScheduleCards />
    </>
  )
}