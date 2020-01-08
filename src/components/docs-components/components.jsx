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
  "Blockquote",
  "Button",
  "Card",
  "Checkbox",
  "Dropdown",
  "Heading",
  "Input",
  "Label",
  "Radio",
  "Select",
  "Table",
  "Tab",
  "Text",
  "Textarea",
  "Toggle",
  "Tooltip",
]
export default components
