import React from "react"
import { useColorMode, Box, Heading, Stack } from "@chakra-ui/core"

import ValueCard from "../molecules/FeatureCard"

const ValueSection = ({ ...features }) => {
  const { colorMode } = useColorMode()
  return (
    <Box maxW="1000px" mx="auto" py={16}>
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
      <Stack isInline>
        <ValueCard
          icon={features[0].icon}
          title={features[0].title}
          description={features[0].description}
        />
        <ValueCard
          icon={features[1].icon}
          title={features[1].title}
          description={features[1].description}
        />
        <ValueCard
          icon={features[2].icon}
          title={features[2].title}
          description={features[2].description}
        />
      </Stack>
    </Box>
  )
}

export default ValueSection
