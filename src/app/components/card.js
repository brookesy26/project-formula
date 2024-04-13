"use client"
import Link from "next/link"

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