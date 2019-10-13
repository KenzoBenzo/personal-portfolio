import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import makenna from "../images/KennaSmutz.jpg"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import DribbbleCard from "../components/DribbbleCard"
import { StaticQuery, graphql } from "gatsby"
import { Image, Flex, Button, Link, Icon } from "@chakra-ui/core"

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
          }
        }
        allDribleProjects(limit: 12) {
          edges {
            node {
              cover
              url
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
            . In the future, I'd like to work with design systems more.
          </p>
          <Flex justifyContent="center" m={8}>
            <Button
              as="a"
              target="_blank"
              href="mailto:makennasmutz@gmail.com?subject=I want to work together!"
              variantColor="primary"
              size="lg"
            >
              Get in Touch
            </Button>
          </Flex>
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
            My Dribbble Shots
          </h2>
          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            maxW={1000}
            m="32px auto 0px auto"
          >
            {data.allDribleProjects.edges.map((card, index) => (
              <DribbbleCard
                key={index}
                cover={card.node.cover}
                url={card.node.url}
              />
            ))}
            <Link
              target="_blank"
              fontSize="lg"
              href="https://dribbble.com/KennaSmutz"
              m="32px 0 0 0"
              isExternal
            >
              See more <Icon name="external-link" mx="2px" />
            </Link>
          </Flex>
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
                link={`/projects/${card.slug}/`}
              />
            ))}
          </CardGroup>
        </div>
      </Layout>
    )}
  />
)
