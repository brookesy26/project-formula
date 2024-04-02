import titleStyle from "../css/title.module.css"


const Title = ({ headerLevel1 }) => {

  return (
    <h1 className={titleStyle.title}>{headerLevel1}</h1>
  )
}

export default Title