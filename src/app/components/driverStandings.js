import sb from "@/app/css/card.module.css";

/*
to display the driver specific standings on standings page 
displayed inside a table 
takes in an array (results) and maps over the elements 
*/
const DriverStandings = ({ array, className }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          <th>POS</th>
          <th>Name</th>
          <th>Team</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {array.map((result, j) => (
          <tr key={`result${j}`} className={sb.session}>
            <td>{j + 1}</td>
            <td>{result.name}</td>
            <td>{result.team}</td>
            <td>{result.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DriverStandings;
