import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import makenna from "../images/KennaSmutz.jpg"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import { StaticQuery, graphql } from "gatsby"

const Image = styled.img`
  height: 150px;
  width: 150px;
  clip-path: circle(50% at 50% 50%);
  border: 1px solid #bcccdc;
  border-radius: 100%;
  display: flex;
  margin: 0 auto;
`

const CardGroup = styled.div`
  max-width: 1000px;
  margin: 64px auto;
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        gcms {
          portfolioCards(where: { status: PUBLISHED }) {
            title
            slug
            summary
            type
            body {
              markdown
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <div style={{ padding: "64px 32px" }}>
          <Image src={makenna} alt="Makenna Smutz Profile Image" />
          <h1
            style={{
              textAlign: "center",
              fontSize: 48,
              fontWeight: 600,
              marginBottom: 32,
            }}
          >
            Hey, I’m Makenna!
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: 32,
              fontWeight: 400,
              maxWidth: 750,
              margin: "0 auto",
            }}
          >
            I design and code. I am a generalist that specializes in{" "}
            <span style={{ background: "#F4CBC3" }}>DOING</span>.
          </p>
        </div>

        <div style={{ padding: "64px 32px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: 48,
              fontWeight: 600,
              marginBottom: 0,
            }}
          >
            Projects in My Portfolio
          </h2>
          <CardGroup>
            {data.gcms.portfolioCards.map((card, index) => (
              <ProjectCard
                key={index}
                rawTags={card.type}
                title={card.title}
                summary={card.summary}
                link={`/${card.slug}/`}
              />
            ))}
          </CardGroup>
        </div>
      </Layout>
    )}
  />
)
