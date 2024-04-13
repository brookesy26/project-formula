import Card from "@/app/components/card";
import CardContainer from "@/app/components/cardContainer";
import cardStyle from "@/app/css/card.module.css";
import Image from "next/image";
import driversJson from "@/app/json/drivers.json";

const DriverCard = () => {

  return (
    <>
      <CardContainer page={"drivers"}>

        {driversJson.drivers.map((driver, i) => (

          <Card
            key={i}
            id={`card${i}`}
            testId={`card${i}`}
            className={`${cardStyle.driverCard} ${cardStyle.card}`}
            href={"/drivers/driver"}
            pageId={driver}
          >
            <section className={cardStyle.headerContainer}>
              <h2>{driver.name}</h2>
              <img className={cardStyle.flag} src={`/${driver.images.flag.url}`} alt={driver.images.flag.alt} />
              <p>{driver.team}</p>
            </section>

            <section className={cardStyle.stats}>
              <p><span>DOB </span>{driver.dob}</p>
              <p><span>Height </span> {driver.height}</p>
              <p><span>Nationality </span> {driver.nationality}</p>
            </section>

            {/* background image */}
            <Image
              loading={"lazy"}
              width={896}
              height={1344}
              className={cardStyle.headshot}
              src={`/${driver.images.headshot.url}`}
              alt={driver.images.headshot.alt} />
          </Card>
        ))}

      </CardContainer >
    </>
  )
}

export default DriverCard;