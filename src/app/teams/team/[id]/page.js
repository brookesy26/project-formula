"use client"
import Title from "@/app/components/title";
import tStyles from "@/app/css/team.module.css"
import Image from "next/image"
import { useEffect, useState } from "react";
import teamJson from "@/app/json/teams.json";

export default function Driver({ params }) {
  const [visibility, setVisibility] = useState("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  function handleDetailsShow() {
    visibility == "" ? setVisibility(tStyles.visible) : setVisibility("");
  }

  const team = teamJson.teams.find(team => team.id === parseInt(params.id));

  return (
    <>
      <Title headerLevel1={team.teamName} className={tStyles.title} link={"#teamStats"} />
      <main className={tStyles.main}>
        <section className={tStyles.statsContainer} id="teamStats">
          <h2>Statistics</h2>
          <details>
            <summary onClick={handleDetailsShow}>Click to view</summary>
            <ul className={visibility}>
              <li><p><span>base </span>{team.base}</p></li>
              <li><p><span>team Chief </span> {team.teamChief}</p></li>
              <li><p><span>technical Chief </span> {team.technicalChief}</p></li>
              <li><p><span>chassis </span> {team.chassis}</p></li>
              <li><p><span>power Unit </span> {team.powerUnit}</p></li>
              <li><p><span>year Of Entry </span> {team.yearOfEntry}</p></li>
              <li><p><span>world Championships </span> {team.worldChampionshipsWon}</p></li>
              <li><p><span>pole Positions</span> {team.polePositions}</p></li>
              <li><p><span>fastest Laps </span> {team.fastestLaps}</p></li>
            </ul>
          </details>
        </section>

        <section className={tStyles.bioSection}>
          <h2>Profile</h2>
          <details>
            <summary>Click to view</summary>
            {team.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </details>
        </section>
        <Image
          loading={"lazy"}
          width={896}
          height={1344}
          className={"d"}
          src={`/${team.images.team.url}`}
          alt={team.images.team.alt} />
      </main>

    </>
  )
}
