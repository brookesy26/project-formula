import sb from "@/app/css/card.module.css";

/*
to display the race specific results 
displayed inside a tbale contained within a details element
takes in an array (results) and maps over the elements 
*/

const FullRaceResults = ({ array, className }) => {
  return (
    <details className={className}>
      <summary>Click to reveal</summary>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver Name</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {array.map((result, j) => (
            <tr key={`result${j}`} className={sb.session}>
              <td>{result.position}</td>
              <td>{result.driver.name}</td>
              <td>{result.driver.team}</td>
              <td>{result.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
};

export default FullRaceResults;
