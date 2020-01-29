import React from "react"
import {
  Heading,
  Flex,
  Link,
  Stack,
  Box,
  useColorMode,
  Button,
} from "@chakra-ui/core"
import Layout from "../components/layouts/layout"
import { graphql, useStaticQuery } from "gatsby"

import DribbbleCard from "../components/molecules/DribbbleCard"
import ProjectCard from "../components/molecules/ProjectCard"

export default () => {
  const { colorMode } = useColorMode()
  const data = useStaticQuery(graphql`
    {
      gcms {
        portfolioWorks(where: { status: PUBLISHED }) {
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
      <Box py={16} px={8} mx='auto'>
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
          {data.gcms.portfolioWorks.map((work, index) => (
            <ProjectCard
              key={index}
              rawTags={work.type}
              title={work.title}
              summary={work.summary}
              link={`/projects/${work.slug}/`}
            />
          ))}
        </Stack>
      </Box>

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
            <Button rightIcon="external-link" variant="ghost" mt={6} size="lg">
              See more
            </Button>
          </Link>
        </Flex>
      </Box>
    </Layout>
  )
}
