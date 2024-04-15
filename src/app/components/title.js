
/*title component returns children wrapped inside a tag and h1*/

const Title = ({ headerLevel1, link, className }) => {

  return (
    <h1 className={className}><a href={link}>{headerLevel1}</a></h1>
  )
}

export default Title