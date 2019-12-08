import React from "react"
import { useColorMode, Box, Heading, Stack } from "@chakra-ui/core"

import FeatureCard from "../molecules/FeatureCard"

const FeatureSection = ({ ...features }) => {
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
        <FeatureCard
          icon={features[0].icon}
          title={features[0].title}
          description={features[0].description}
        />
        <FeatureCard
          icon={features[1].icon}
          title={features[1].title}
          description={features[1].description}
        />
        <FeatureCard
          icon={features[2].icon}
          title={features[2].title}
          description={features[2].description}
        />
        {/* {features.map((feature, i) => (
          <FeatureCard
            key={i}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))} */}
      </Stack>
    </Box>
  )
}

export default FeatureSection
