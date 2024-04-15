/*container component*/
const FullSection = ({ className, children, id }) => {
  return (
    <section id={id} className={className}>{children}</section>
  )
}

export default FullSection