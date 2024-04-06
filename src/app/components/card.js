import cardStyle from "../css/card.module.css"

const Card = ({ id, testId, children, className }) => {

  return (
    <section id={id} className={className} data-testid={testId}>
      {children}
    </section>
  )
}

export default Card