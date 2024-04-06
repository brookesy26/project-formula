import titleStyle from "../css/title.module.css"


const Title = ({ headerLevel1, link }) => {

  return (
    <h1 className={titleStyle.title}><a href={link}>{headerLevel1}</a></h1>
  )
}

export default Title