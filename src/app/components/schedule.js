import Card from "@/app/components/card"
import CardContainer from "@/app/components/cardContainer"
import ScheduleBreakdown from "@/app/components/scheduleBreakdown"
import scheduleJson from "@/app/json/scheduleData.json"
import cardStyle from "@/app/css/card.module.css"
import { dateFromTo } from "@/app/js/dateTime.mjs"
import ResultsBreakdown from "@/app/components/resultsBreakdown"
import Image from "next/image"
import StatusChecker from "@/app/components/statusChecker"

/*
calls cardContainer component passing in the current page and JSX children elements
maps over json file to produce required cards (using the card component, JSX children elements are entered within)

*/

const ScheduleCards = () => {

  return (
    <>
      <CardContainer page={"schedule"}>
        {/*cardContainer children below*/}
        {scheduleJson.schedule.map((race, i) => (

          <Card
            key={i}
            id={`card${i}`}
            testId={`card${i}`}
            className={`${cardStyle.scheduleCard} ${cardStyle.card}`}
            href={"/race"}
            pageId={race}
          >
            {/*card children below*/}

            <section className={cardStyle.cardHeader}>
              <h2>{race.country.name}</h2>
              {/*flag image */}
              <img className={cardStyle.flag} src={`/${race.country.image.url}`} alt={race.country.image.alt} />
              {/*displays date from - to (29 - 02) using dateFromTo function*/}
              <p className={cardStyle.dates}>{dateFromTo(race.sessions[0].date, race.race.date)}</p>
              <p className={cardStyle.round}>{`Round ${race.round}`}</p>
            </section>

            <section className={cardStyle.trackInfo}>
              <h3>{race.trackInfo.location}</h3>
              <p>{race.trackInfo.name}</p>
              <Image width={100} height={100} src={`/${race.trackInfo.image.url}`} alt={race.trackInfo.image.alt} /> {/*track image*/}
            </section>

            <section className={cardStyle.scheduleContainer}>
              {/*calls tenery operator component to check state
              if true returns the scheduleBreakdown (schedule section)
              if false returns resultsBreakdown (results section)
              */}
              <StatusChecker
                objState={race.status}
                itemState={"pending"}
                trueElements={<>
                  <h3>schedule</h3>
                  <ScheduleBreakdown object={race} sectionIndex={i} className={cardStyle.scheduleDetails} />
                </>}
                falseElements={<>
                  <h3>Results</h3>
                  <ResultsBreakdown
                    array={race.results}
                    sectionIndex={i}
                    className={cardStyle.scheduleDetails} />
                </>}
              />
            </section>

            {/*card background image*/}
            <Image
              priority={true}
              loading={"eager"}
              width={1024}
              height={1024}
              className={cardStyle.backgroundImage}
              src={`/${race.backgroundImage.url}`}
              alt={race.backgroundImage.alt} />

            {/*card children end*/}
          </Card>
        ))}

        {/*cardContrainer children end*/}
      </CardContainer >
    </>
  )
}

export default ScheduleCards