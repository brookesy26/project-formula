"use client"

import scheduleJson from "@/app/json/scheduleData.json"
import resultsJson from "@/app/json/results"
import Title from "@/app/components/title";
import titleStyle from "@/app/css/title.module.css"
import ScheduleBreakdown from "@/app/components/scheduleBreakdown";
import cS from "@/app/css/race.module.css";
import { dateFromTo } from "@/app/js/dateTime.mjs";
import { useEffect, useState } from "react";
import StatusChecker from "@/app/components/statusChecker";
import FullRaceResults from "@/app/components/fullRaceResults";

export default function Race({ params }) {
  const [visibility, setVisibility] = useState("")

  function handleDetailsShow() {
    visibility == "" ? setVisibility(cS.visible) : setVisibility("");
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const race = scheduleJson.schedule.find(race => race.id === parseInt(params.id));
  const results = resultsJson.races.find(result => result.raceID === parseInt(params.id));

  return (
    <>
      <Title headerLevel1={race.country.name} className={`${titleStyle.title} ${cS.title}`} />
      <section className={cS.scheduleContainer}>
        <StatusChecker
          objState={race.status}
          itemState={"pending"}
          trueElements={
            <>
              <h2>Schedule</h2>
              <p className={cS.date}>{dateFromTo(race.sessions[0].date, race.race.date)}</p>
              <ScheduleBreakdown object={race} className={cS.schedule} /></>}
          falseElements={
            <>
              <h2>Results</h2>
              <FullRaceResults
                object={results}
                className={cS.results}
              />
            </>}
        />
      </section>

      <section className={cS.track}>
        <h2>{race.trackInfo.location}</h2>
        <p>{race.trackInfo.name}</p>

        <img className={cS.img} src={`/${race.trackInfo.image.url}`} alt={race.trackInfo.image.alt}></img>

        <section>
          <h2>Statistics</h2>
          <details>
            <summary onClick={handleDetailsShow}>Click to view</summary>
            <ul className={visibility}>
              <li><p><span>First Grand Prix </span>{race.trackInfo["First Grand Prix"]}</p></li>
              <li><p><span>Number of Laps</span> {race.trackInfo["Number of Laps"]}</p></li>
              <li><p><span>Circuit Length </span> {race.trackInfo["Circuit Length"]}</p></li>
              <li><p><span>Race Distance </span> {race.trackInfo["Race Distance"]}</p></li>
              <li><p><span>Lap Record </span> {race.trackInfo["Lap Record"]}</p></li>
            </ul>
          </details>
        </section>
      </section>

      <section className={cS.bio}>
        <h2>track information</h2>
        <details>
          <summary>Click to view</summary>
          {race.trackInfo.bio.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </details>

      </section>
    </>
  )
}

