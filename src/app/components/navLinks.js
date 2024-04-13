"use client"

import Link from "next/link"
import linkStyles from "../css/links.module.css"
import { useState } from "react"

const NavLinks = ({ onClick }) => {
  const [activePage, setActivePage] = useState("schedule");

  function handleClick(page) {
    setActivePage(page);
    onClick();
  }

  return (
    <ul className={linkStyles.ul}>
      <li><Link href={"/#cardsContainer"} onClick={() => handleClick("schedule")} className={activePage == "schedule" ? linkStyles.activePage : ""} scroll={false}>Schedule</Link></li>
      <li><Link href={"/standings"} onClick={() => handleClick("standings")} className={activePage == "standings" ? linkStyles.activePage : ""} scroll={false}>Standings</Link></li>
      <li><Link href={"/teams"} onClick={() => handleClick("teams")} className={activePage == "teams" ? linkStyles.activePage : ""} scroll={false}>Teams</Link></li>
      <li><Link href={"/drivers"} onClick={() => handleClick("drivers")} className={activePage == "drivers" ? linkStyles.activePage : ""} scroll={false}>Drivers</Link></li>
    </ul>
  )
}

export default NavLinks