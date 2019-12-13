import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Text,
  Tag,
  Stack,
  useColorMode,
  Heading,
  Button,
} from "@chakra-ui/core"

const ProjectCard = ({ rawTags, title, summary, link }) => {
  let tags = rawTags.map(i => {
    return (
      <Tag variantColor="blue" size="md" fontWeight={600}>
        {i}
      </Tag>
    )
  })
  const { colorMode } = useColorMode()
  return (
    <GatsbyLink
      to={link}
      alt="A project by makenna"
      style={{ textDecoration: "none" }}
    >
      <Box bg={`mode.${colorMode}.cardBG`} p={6} borderRadius="lg" mb={8}>
        {tags ? (
          <Stack isInline justifyContent="flex-end">
            {tags}
          </Stack>
        ) : null}
        <Heading
          as="h3"
          fontSize="3xl"
          fontWeight="900"
          letterSpacing="wide"
          mb={4}
        >
          {title}
        </Heading>
        <Text mb={6}>{summary}</Text>
        <Button rightIcon="arrow-forward" fontWeight="600" variant="ghost">
          Dive Deep with the Details
        </Button>
      </Box>
    </GatsbyLink>
  )
}

export default ProjectCard
