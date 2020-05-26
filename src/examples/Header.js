import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        title
        author
        data
        description
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name, age },
        author,
        description,
        data,
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>{title}</h1>
      <p>{name}</p>
      <p>{age}</p>
      {data.map((item, ind) => (
        <div key={ind}>
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  )
}

export default Header
