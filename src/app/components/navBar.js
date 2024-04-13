"use client"
import MenuButton from "./menuButton"
import NavLinks from "./navLinks"
import { useState } from "react"

const NavBar = () => {
  const [toggle, setToggle] = useState("closed")
  const [expandedState, setExspandedState] = useState(false)


  const handleMenuToggle = () => {
    expandedState == false ? setExspandedState(true) : setExspandedState(false);
    toggle == "closed" ? setToggle("open") : setToggle("closed");
  }

  return (
    <>
      <nav className={toggle} >
        <MenuButton onClick={handleMenuToggle} expandedState={expandedState} />
        <NavLinks onClick={handleMenuToggle} />
      </nav>
    </>

  )
}

export default NavBar