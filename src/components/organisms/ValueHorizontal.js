import React from "react"
import { useColorMode, Box, Heading, Flex } from "@chakra-ui/core"

import ValueCard from "../molecules/FeatureCard"

const ValueSection = ({ ...features }) => {
  const { colorMode } = useColorMode()
  return (
    <Box maxW="1000px" mx="auto" py={16} px={8}>
      <Heading
        as="h2"
        mb={8}
        lineHeight="shorter"
        fontWeight="900"
        color={`mode.${colorMode}.heading`}
        textAlign="center"
      >
        What you get when working with Kenna
      </Heading>
      <Flex wrap="wrap" justify={["start", "start", "center"]}>
        <ValueCard
          w={["100%", "50%", "33%"]}
          icon={features[0].icon}
          title={features[0].title}
          description={features[0].description}
        />
        <ValueCard
          w={["100%", "50%", "33%"]}
          icon={features[1].icon}
          title={features[1].title}
          description={features[1].description}
        />
        <ValueCard
          w={["100%", "50%", "33%"]}
          icon={features[2].icon}
          title={features[2].title}
          description={features[2].description}
        />
      </Flex>
    </Box>
  )
}

export default ValueSection
