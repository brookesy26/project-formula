import RaceTemplate from "../../components/raceTemplate"
import scheduleJson from "../../json/scheduleData.json"

export default function Race({ params }) {

  const race = scheduleJson.schedule.find(race => race.id === parseInt(params.id));

  return (
  
  )
}

