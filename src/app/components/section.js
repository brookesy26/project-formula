
const FullSection = ({ className, ariaHidden, children, id }) => {
  return (
    <section id={id} className={className} >{children}</section>
  )
}

export default FullSection