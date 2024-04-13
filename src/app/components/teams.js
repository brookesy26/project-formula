import Card from "@/app/components/card";
import CardContainer from "@/app/components/cardContainer"
import cardStyle from "@/app/css/card.module.css";
import Image from "next/image";
import teamsJson from "@/app/json/teams.json";

const TeamCard = () => {

  return (
    <>
      <CardContainer page={"teams"}>

        {teamsJson.teams.map((team, i) => (

          <Card
            key={i}
            id={`card${i}`}
            testId={`card${i}`}
            className={`${cardStyle.teamCard} ${cardStyle.card}`}
            href={"/teams/team"}
            pageId={team}
          >
            <section className={cardStyle.headerContainer}>
              <h2>{team.teamName}</h2>
              <img className={cardStyle.flag} src={`/${team.images.flag.url}`} alt={team.images.flag.alt} />
              <p className={cardStyle.driver1}>{team.drivers[0].name}</p>
              <p className={cardStyle.driver2}>{team.drivers[1].name}</p>
            </section>

            {/* background image */}
            <Image
              priority={true}
              loading={"eager"}
              width={1024}
              height={1024}
              className={cardStyle.teamImage}
              src={`/${team.images.team.url}`}
              alt={team.images.team.alt} />

          </Card>
        ))}

      </CardContainer >
    </>
  )
}

export default TeamCard;