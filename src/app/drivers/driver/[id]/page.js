"use client"
import Title from "@/app/components/title";
import dStyles from "@/app/css/driver.module.css"
import Image from "next/image"
import { useEffect, useState } from "react";
import driversJson from "@/app/json/drivers.json";


/*
driver specific page (dependant on which card is clicked returns the driver specific page)
param is passed over from a next Link for dynamic routing param returns the id of the clicked card
*/

export default function Driver({ params }) {
  const [visibility, setVisibility] = useState("")

  //handles scroll to top instantly on load

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  //visibility state logic handler
  function handleDetailsShow() {
    visibility == "" ? setVisibility(dStyles.visible) : setVisibility("");
  }

  /*locates the correct driver from the driverJson file corrosponding with the clicked driver on previous page */
  const driver = driversJson.drivers.find(driver => driver.id === parseInt(params.id));

  return (
    <>
      <Title headerLevel1={driver.name} className={`${dStyles.title}`} link={"#driverStats"} />

      <section className={dStyles.statsContainer} id="driverStats">
        <h2>Statistics</h2>
        <details>
          <summary onClick={handleDetailsShow}>Click to view</summary>
          <ul className={visibility}>
            <li><p><span>Date of birth </span>{driver.dob}</p></li>
            <li><p><span>Height </span> {driver.height}</p></li>
            <li><p><span>Nationality </span> {driver.nationality}</p></li>
            <li><p><span>podiums </span> {driver.podiums}</p></li>
            <li><p><span>points </span> {driver.points}</p></li>
            <li><p><span>grand Prix Entered </span> {driver.grandPrixEntered}</p></li>
            <li><p><span>world Championships </span> {driver.worldChampionships}</p></li>
            <li><p><span>Highest Race Finish </span> {driver.highestRaceFinish}</p></li>
            <li><p><span>Highest Grid Position </span> {driver.highestGridPosition}</p></li>
          </ul>
        </details>

        <Image
          loading={"lazy"}
          width={896}
          height={1344}
          className={"d"}
          src={`/${driver.images.headshot.url}`}
          alt={driver.images.headshot.alt} />
      </section>

      <section className={dStyles.bioSection}>
        <h2>Biography</h2>
        <details>
          <summary>Click to view</summary>

          {driver.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

        </details>
      </section>
    </>
  )
}
