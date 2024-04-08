"use client"
import MenuButton from "./menuButton"
import NavLinks from "./navLinks"
import { useState } from "react"

const NavBar = () => {
  const [toggle, setToggle] = useState("closed")

  const handleMenuToggle = () => {
    toggle == "closed" ? setToggle("open") : setToggle("closed")
  }

  return (
    <>
      <nav className={toggle} >
        <MenuButton onClick={handleMenuToggle} />
        <NavLinks onClick={handleMenuToggle} />
      </nav>
    </>

  )
}

export default NavBar