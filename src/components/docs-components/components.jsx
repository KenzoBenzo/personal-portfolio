/*import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Components = () => {
  const data = useStaticQuery(graphql`
    {
      componentMenu: allMdx(
        filter: { frontmatter: { menu: { eq: "Components" } } }
      ) {
        nodes {
          frontmatter {
            name
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.componentMenu.nodes.map(component => [component.frontmatter.name])}
    </div>
  )
}*/

const components = [
  "Alert",
  "Badge",
  "Button",
  "Input",
  "Text",
  "Toggle",
]
export default components
