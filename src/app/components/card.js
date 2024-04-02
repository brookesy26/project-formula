import cardStyle from "../css/card.module.css"

const Card = ({ heading, id }) => {

  return (
    <section id={id} className={cardStyle.card}>
      <h2>{heading}</h2>
    </section>
  )
}

export default Card