import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import makenna from "../images/KennaSmutz.jpg"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import { StaticQuery, graphql } from "gatsby"
import { Image, Flex } from "@chakra-ui/core"

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
        allDribleProjects {
          edges {
            node {
              cover
              url
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <div
          style={{
            padding: "64px 32px",
          }}
        >
          <Flex>
            <Image
              rounded="full"
              size="150px"
              src={makenna}
              alt="Makenna Smutz Profile Image"
              border="1px solid #BCCCDC"
              mx="auto"
            />
          </Flex>
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
            <span style={{ background: "#F4CBC3", padding: "0 2px" }}>
              DOING
            </span>
            .
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
