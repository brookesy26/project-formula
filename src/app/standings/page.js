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
  const [standingView, setStandingView] = useState("driver");

  function handleViewDriver() {
    setStandingView("driver")
  }

  function handleViewTeam() {
    setStandingView("team")
  }

  const driverActive = standingView == "driver" ? sStyles.active : "";
  const teamActive = standingView == "team" ? sStyles.active : "";

  return (
    <>
      <Title headerLevel1={"standings"} className={`${titleStyle.title} ${sStyles.standings}`} link="#buttons" />

      <section className={sStyles.buttonContainer} id="buttons">
        <button onClick={handleViewDriver} className={`${sStyles.button1} ${driverActive}`}>driver</button>
        <button onClick={handleViewTeam} className={`${sStyles.button2} ${teamActive}`}>team</button>
      </section>

      <section className={sStyles.resultsContainer}>
        <StatusChecker
          objState={standingView}
          itemState={"driver"}
          trueElements={<><h2>driver standings</h2><DriverStandings array={driverStandings.standings} className={sStyles.results} /></>}
          falseElements={<><h2>team standings</h2><TeamStandings array={teamStandings.standings} className={sStyles.results} /></>}
        />
      </section>
    </>
  )
}