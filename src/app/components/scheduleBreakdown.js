import { handleDate, handleTime } from "@/app/js/dateTime.mjs"
import sb from "@/app/css/card.module.css"

/*
takes in an object for specific arrays to be mapped over 
returns session specific data and race specific data 
calls handleDate and handleTime functions to manage and correctly display dates 
*/

const ScheduleBreakdown = ({ object, sectionIndex, className }) => {

  return (
    <>
      <section key={`session${sectionIndex}`} className={className}>
        {
          object.sessions.map((session, j) => (
            <section key={`session${j}`} className={sb.session}>
              {/*session date */}
              <p key={`session-date ${j}`} >{handleDate(session.date)}</p>
              {/*session name*/}
              <p key={`session-name ${j}`} >{session.name}</p>
              {/*session time*/}
              <p key={`session-time ${j}`} >{handleTime(session.date)}</p>
            </section>
          ))
        }
        {/*Race date*/}
        <section key={`race ${sectionIndex}`} className={sb.race}>
          < p key={`race-date ${sectionIndex}`}>{handleDate(object.race.date)}</p>
          {/*Race name*/}
          <p key={`race-name ${sectionIndex}`} >{object.race.name}</p>
          {/*Race time*/}
          <p key={`race-time ${sectionIndex}`}>{handleTime(object.race.date)}</p>
        </section>
      </section >
    </>
  );

}

export default ScheduleBreakdown 