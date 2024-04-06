import Card from "./card"
import calObj from "../json/schedule.json"
import CardLooper from "./cardContainer"


const DriverCards = () => {

  return (
    <>
      <CardLooper>
        <Card heading={i + 1} key={i} id={`card${i}`} testId={`card${i}`} />
      </CardLooper>
    </>
  )
}

export default DriverCards