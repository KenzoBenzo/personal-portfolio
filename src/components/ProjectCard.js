import React from "react"
import { Link } from "gatsby"
import { Box, Text } from "@chakra-ui/core"

const ProjectCard = ({ rawTags, title, summary, link }) => {
  let tags = rawTags.map(i => {
    return (
      <Text
        border="2px solid"
        fontWeight="bold"
        borderColor="accent.500"
        borderTopRightRadius={8}
        borderBottomLeftRadius={8}
        py={2}
        px={8}
        mr={4}
      >
        {i}
      </Text>
    )
  })
  return (
    <Link
      to={link}
      alt="A project by makenna"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <Box
        bg="white"
        p={8}
        shadow="0px 0px 15px rgba(0, 0, 0, 0.05)"
        borderRadius="lg"
        mb={8}
      >
        {tags ? (
          <Box
            d="flex"
            justifyContent="flex-end"
            mt={-12}
            mr={-12}
            lineHeight="short"
          >
            {tags}
          </Box>
        ) : null}
        <Text fontSize="3xl" fontWeight="bold">
          {title}
        </Text>
        <Text>{summary}</Text>
        <Text fontWeight="bold">Dive Deep with the Details -></Text>
      </Box>
    </Link>
  )
}

export default ProjectCard
