import Link from "next/link"


/*Card component: children elements entered are contained within a next Link component(optimised a tag) and a section container
children elements are any JSX entered when the component is called
link href: passes over thepageId.id can be accessed as params for dynamic routing 
*/

const Card = ({ id, testId, children, className, href, pageId }) => {

  return (
    <section id={id} className={className} data-testid={testId}>

      <Link href={`${href}/${pageId.id}`} scroll={false}>

        {children}

      </Link>
    </section>
  )
}

export default Card