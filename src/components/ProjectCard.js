import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  padding: 32px;
  margin-bottom: 32px;

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin: 8px 0 0 0;
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

  p {
    border: 2px solid #f4cbc3;
    border-radius: 0px 10px;
    padding: 8px 16px;
    margin: 0 0 0 8px;
  }
`

const ProjectCard = ({ rawTags, title, summary, link }) => {
  let tags = rawTags.map(i => {
    return <p>{i}</p>
  })
  return (
    <Link
      to={link}
      alt="A project by makenna"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <Card>
        {tags ? <Tags>{tags}</Tags> : null}
        <h2>{title}</h2>
        <p>{summary}</p>
        <h4>Dive Deep with the Details -></h4>
      </Card>
    </Link>
  )
}

export default ProjectCard
