"use client"

import Title from "@/app/components/title";
import titleStyle from "@/app/css/title.module.css"
import sStyles from "@/app/css/standings.module.css"
import driverStandings from "@/app/json/driverStandings.json";
import teamStandings from "@/app/json/teamStandings.json";
import TeamStandings from "@/app/components/teamStandings";
import DriverStandings from "@/app/components/driverStandings";
import StatusChecker from "@/app/components/statusChecker"
import { useState } from "react";


export default function Standings({ }) {
  /*state holder for button*/
  const [standingView, setStandingView] = useState("driver");

  /*set driver state function*/
  function handleViewDriver() {
    setStandingView("driver")
  }

  /*set team state function*/
  function handleViewTeam() {
    setStandingView("team")
  }


  /*ternary operator checks for css class*/
  const driverActive = standingView == "driver" ? sStyles.active : "";
  const teamActive = standingView == "team" ? sStyles.active : "";

  return (
    <>
      {/*title component h1 + href*/}
      <Title headerLevel1={"standings"} className={`${titleStyle.title} ${sStyles.standings}`} link="#buttons" />

      <section className={sStyles.buttonContainer} id="buttons">
        {/* buttons that call state functions on click*/}
        <button onClick={handleViewDriver} className={`${sStyles.button1} ${driverActive}`}>driver</button>
        <button onClick={handleViewTeam} className={`${sStyles.button2} ${teamActive}`}>team</button>
      </section>

      <section className={sStyles.resultsContainer}>
        {/*status checker component to handle aray looping through a tenary operator*/}
        <StatusChecker
          objState={standingView}
          itemState={"driver"}
          /*case true: use driver standings component*/
          trueElements={<>
            <h2>driver standings</h2>
            <DriverStandings array={driverStandings.standings} className={sStyles.results} /></>}
          /*case false: use team standings component*/
          falseElements={<>
            <h2>team standings</h2>
            <TeamStandings array={teamStandings.standings} className={sStyles.results} /></>}
        />
      </section>
    </>
  )
}