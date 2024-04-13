const MenuButton = ({ onClick, className, expandedState }) => {

  return (
    <button type="button" aria-label="main navigation" aria-expanded={expandedState} className={className} onClick={onClick}><div></div></button>
  )
}

export default MenuButton