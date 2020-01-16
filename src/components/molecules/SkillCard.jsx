import React from "react"
import { Box, Icon, Heading, Text, useColorMode, Flex } from "@chakra-ui/core"

const SkillCard = ({ icon, title, description, ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <Flex alignItems="start" justifyContent="start" {...props}>
      <Box
        rounded="full"
        backgroundColor={`mode.${colorMode}.cardBG`}
        p={4}
        size={20}
        mr={4}
      >
        <Icon name={icon} size={12} mb={6} />
      </Box>
      <Box>
        <Heading
          as="h4"
          fontWeight="700"
          fontSize="2xl"
          lineHeight="shorter"
          mb={3}
        >
          {title}
        </Heading>
        <Text fontSize="md" lineHeight="short">
          {description}
        </Text>
      </Box>
    </Flex>
  )
}

export default SkillCard
