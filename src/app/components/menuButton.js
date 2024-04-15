const MenuButton = ({ onClick, className, expandedState }) => {

  /*
  navigation menu button component with required tags
  takes in a function to run on click 
  aria-label due to no text being within the button for accessability 
  aria-expanded used for accessability 
  */
  return (
    <button type="button" aria-label="main navigation" aria-expanded={expandedState} className={className} onClick={onClick}><div></div></button>
  )
}

export default MenuButton