import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import makenna from "../images/KennaSmutz.jpg"
import ProjectCard from "../components/ProjectCard"
import DribbbleCard from "../components/DribbbleCard"
import { StaticQuery, graphql } from "gatsby"
import { Image, Flex, Button, Link, Icon, Stack, Text } from "@chakra-ui/core"

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
          <Text fontSize="5xl" textAlign="center" fontWeight="medium" mb={4}>
            Hey, I’m Makenna!
          </Text>
          <Text
            fontSize="4xl"
            textAlign="center"
            fontWeight="normal"
            maxW={750}
            mx="auto"
          >
            I design and code. I am a generalist that specializes in{" "}
            <span style={{ background: "#F4CBC3", padding: "0 2px" }}>
              DOING
            </span>
            . In the future, I'd like to work with design systems more.
          </Text>
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
          <Text fontSize="5xl" textAlign="center" fontWeight="medium" mb={0}>
            My Dribbble Shots
          </Text>
          <Flex
            align="center"
            justify="center"
            wrap="wrap"
            maxW={1100}
            mx="auto"
            mt={0}
            mb={4}
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
          <Text fontSize="5xl" textAlign="center" fontWeight="medium" mb={0}>
            Projects in My Portfolio
          </Text>
          <Stack maxW={1000} mx="auto" my={4}>
            {data.gcms.portfolioCards.map((card, index) => (
              <ProjectCard
                key={index}
                rawTags={card.type}
                title={card.title}
                summary={card.summary}
                link={`/projects/${card.slug}/`}
              />
            ))}
          </Stack>
        </div>
      </Layout>
    )}
  />
)
