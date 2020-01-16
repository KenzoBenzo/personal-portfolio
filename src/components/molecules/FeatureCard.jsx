import React from "react"
import { Box, Icon, Heading, Text, useColorMode } from "@chakra-ui/core"

const FeatureCard = ({ icon, title, description, ...props }) => {
  const { colorMode } = useColorMode
  return (
    <Box p={4} {...props}>
      <Icon name={icon} size={16} mb={6} color={`mode.${colorMode}.icon`} />
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
  )
}

export default FeatureCard
