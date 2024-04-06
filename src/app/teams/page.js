import Title from "../components/title"
import FullSection from "../components/section"
import fs from "../css/section.module.css"

export default function Teams() {
  return (
    <FullSection className={fs.titleSection}>
      <Title headerLevel1={"Schedule"} link={"/"} />
    </FullSection>
  )
}