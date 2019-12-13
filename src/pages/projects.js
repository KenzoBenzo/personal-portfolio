import React from "react"
import {
  Heading,
  Text,
  Flex,
  Link,
  Icon,
  Stack,
  Box,
  useColorMode,
  Button,
} from "@chakra-ui/core"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

import DribbbleCard from "../components/molecules/DribbbleCard"
import ProjectCard from "../components/molecules/ProjectCard"

export default () => {
  const { colorMode } = useColorMode()
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <Layout>
      <Box maxW="1100px" mx="auto" py={16} px={8}>
        <Heading
          as="h2"
          fontSize="4xl"
          mb={8}
          lineHeight="shorter"
          fontWeight="900"
          color={`mode.${colorMode}.heading`}
          textAlign="center"
        >
          My Dribbble Shots
        </Heading>
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
            href="https://dribbble.com/KennaSmutz"
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Button rightIcon="external-link" variant="ghost" mt={6}>
              See more
            </Button>
          </Link>
        </Flex>
      </Box>

      <div style={{ padding: "64px 32px" }}>
        <Heading
          as="h2"
          fontSize="4xl"
          mb={8}
          lineHeight="shorter"
          fontWeight="900"
          color={`mode.${colorMode}.heading`}
          textAlign="center"
        >
          Projects in My Portfolio
        </Heading>
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
  )
}
