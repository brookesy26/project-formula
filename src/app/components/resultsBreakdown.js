import sb from "@/app/css/card.module.css"

/*
takes in an array: loops over array items returning JSX for every element
to be used to display snippet of results top 3
*/
const ResultsBreakdown = ({ array, sectionIndex, className }) => {

  return (
    <section key={`results${sectionIndex}`} className={className}>
      {
        array.map((result, j) => (
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