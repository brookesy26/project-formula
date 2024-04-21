"use client"
import MenuButton from "@/app/components/menuButton"
import NavLinks from "@/app/components/navLinks"
import { useState } from "react"

/*
container for menu button and links #note links are set to visibility hidden on load for accessability 
event function to handle on click logic, uses ternery operators to set states 
toggle state used for a class 
expandedState passed to menu button for aria tags
menuButton component and navLinks components called within the JSX
*/
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