import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  padding: 32px;

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin: 0;
  }

  h4 {
    font-style: italic;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
  }
`

const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -32px;
  margin-right: -32px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;
  font-family: Victor Mono;
`
const Code = styled.div`
  border: 2px solid #f4cbc3;
  border-radius: 0px 10px;
  padding: 8px 16px;
`
const Design = styled.div`
  border: 2px solid #03005c;
  border-radius: 0px 10px;
  padding: 8px 16px;
  margin-left: 8px;
`

const ProjectCard = () => (
  <Link
    to="/graphcms-website/"
    alt="GraphCMS Website"
    style={{ color: "inherit", textDecoration: "none" }}
  >
    <Card>
      <Tags>
        <Code>Code</Code>
        <Design>Design</Design>
      </Tags>
      <h2>
        The title of the project will go here. The title of the project will go
        here.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
        venenatis nunc amet, dui sed proin et. Elementum sapien quis nisl tempor
        bibendum scelerisque ultrices urna nam. Non ultrices at nunc elit,
        integer amet cursus nisl bibendum. Tempor vel adipiscing nunc enim proin
        tellus cursus. Tristique convallis dolor velit, urna lorem enim turpis
        venenatis ut. Commodo ultrices pulvinar.
      </p>
      <h4>Dive Deep with the Details -></h4>
    </Card>
  </Link>
)

export default ProjectCard
