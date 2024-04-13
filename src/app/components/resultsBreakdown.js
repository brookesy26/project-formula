import sb from "../css/card.module.css"


const ResultsBreakdown = ({ object, sectionIndex, className }) => {

  return (
    <section key={`results${sectionIndex}`} className={className}>
      {
        object.results.map((result, j) => (
          <section key={`result${j}`} className={sb.session}>
            <p key={`result-position ${j}`} >{result.position}</p>
            <p key={`result-driverName ${j}`} >{result.driver.name}</p>
            <p key={`result-pts ${j}`}>{result.points}</p>
          </section>
        ))
      }
    </section >
  )

}

export default ResultsBreakdown 