import sb from "@/app/css/card.module.css";

/*
to display the team specific standings on standings page 
displayed inside a table 
takes in an array (results) and maps over the elements 
*/

const TeamStandings = ({ array, className }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          <th>POS</th>
          <th>Team</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {array.map((team, j) => (
          <tr key={`result${j}`} className={sb.session}>
            <td>{j + 1}</td>
            <td>{team.name}</td>
            <td>{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamStandings;
