"use client"

import Link from "next/link"
import linkStyles from "@/app/css/links.module.css"
import { useState } from "react"

/*
component to house the page links for navigation
calls handleClick function on click to handle logic, page is passed through to be set in state
onClick function to be passed to activate expanded / toggled on click to close the nav
tenery operators used within classNames that  check if the page is active 
*/

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