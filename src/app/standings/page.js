import Title from "../components/title"
import FullSection from "../components/section"
import sStyles from "../css/section.module.css"

export default function Standings() {
  return (
    <FullSection className={sStyles.titleSection}>
      <Title headerLevel1={"Standings"} link={"/"} />
    </FullSection>
  )
}