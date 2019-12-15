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
  Flex,
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
        <Flex wrap="wrap" justifyContent="space-between">
          <Heading
            as="h3"
            fontSize={["2xl", "3xl"]}
            fontWeight="900"
            letterSpacing="wide"
            mb={4}
            color={`mode.${colorMode}.heading`}
          >
            {title}
          </Heading>
          {tags ? (
            <Stack isInline mt={[4, 4, 0]}>
              {tags}
            </Stack>
          ) : null}
        </Flex>
        <Text mb={4} color={`mode.${colorMode}.text`}>
          {summary}
        </Text>
        <Button rightIcon="arrow-forward" fontWeight="600" variant="ghost">
          Dive Deep with the Details
        </Button>
      </Box>
    </GatsbyLink>
  )
}

export default ProjectCard
