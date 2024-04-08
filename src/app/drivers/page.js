import Title from "../components/title"
import FullSection from "../components/section"
import driverStyles from "../css/section.module.css"

export default function Drivers() {
  return (
    <FullSection className={driverStyles.titleSection}>
      <Title headerLevel1={"Drivers"} link={"/"} />
    </FullSection>
  )
}