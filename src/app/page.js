
import Title from "../app/components/title"
import CardLooper from "./components/cardLooper"
import FullSection from "./components/section"
import SectionStyle from "./css/section.module.css"

export default function Home() {


  return (
    <>
      <Title headerLevel1={"Calendar"} />
      {/* <FullSection className={SectionStyle.intro} /> */}
      <CardLooper />
      <FullSection className={SectionStyle.ending} />
      <FullSection className={SectionStyle.lowerSection} ariaHidden={"true"} />
    </>
  )
}