import Link from "next/link"
import linkStyles from "../css/links.module.css"
const NavLinks = ({ onClick }) => {
  return (
    <ul className={linkStyles.ul}>
      <li><Link href={"/"} onClick={onClick} scroll={false}>Schedule</Link></li>
      <li><Link href={"/standings"} onClick={onClick} scroll={false}>Standings</Link></li>
      <li><Link href={"/teams"} onClick={onClick} scroll={false}>Teams</Link></li>
      <li><Link href={"/drivers"} onClick={onClick} scroll={false}>Drivers</Link></li>
    </ul>
  )
}

export default NavLinks