import Card from "./card"
import CardContainer from "./cardContainer"
import ScheduleBreakdown from "./scheduleBreakdown"
import scheduleJson from "../json/scheduleData.json"
import cardStyle from "../css/card.module.css"
import { dateFromTo } from "../js/dateTime.mjs"

const ScheduleCards = () => {

  return (
    <>
      <CardContainer objectPath={scheduleJson.schedule}>

        {scheduleJson.schedule.map((race, i) => (

          <Card
            key={i}
            id={`card${i}`}
            testId={`card${i}`}
            className={`${cardStyle.scheduleCard} ${cardStyle.card}`}
            href={"/race"}
            pageId={race}
          >

            <section className={cardStyle.cardHeader}>
              <h2>{race.country.name}</h2>
              <img className={cardStyle.flag} src={race.country.image.url} />
              {/*displays date from - to (29 - 02)*/}
              <p className={cardStyle.dates}>{dateFromTo(race.sessions[0].date, race.race.date)}</p>
              <p className={cardStyle.round}>{`Round ${race.round}`}</p>
            </section>

            <section className={cardStyle.trackInfo}>
              <h3>{race.trackInfo.location}</h3>
              <p>{race.trackInfo.name}</p>
              <img src={race.trackInfo.image.url} alt={race.trackInfo.image.alt} /> {/*track image*/}
            </section>

            <ScheduleBreakdown
              object={race}
              sectionIndex={i}
              className={cardStyle.scheduleDetails}
            />
            <img className={cardStyle.backgroundImage} src={race.backgroundImage.url} alt={race.backgroundImage.alt} /> {/*background image*/}
          </Card>
        ))}

      </CardContainer >
    </>
  )
}

export default ScheduleCards