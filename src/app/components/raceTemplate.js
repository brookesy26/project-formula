import Card from "./card"
import CardContainer from "./cardContainer"
import ScheduleBreakdown from "./scheduleBreakdown"
import scheduleJson from "../json/scheduleData.json"
import cardStyle from "../css/card.module.css"
import { dateFromTo } from "../js/dateTime.mjs"

const RaceTemplate = ({ data }) => {

  return (
    <article>
      <h1>{data}</h1>
    </article>
  )
}

export default RaceTemplate