import React from "react"
import { Text, Badge, Stack, Button, Flex, useColorMode } from "@chakra-ui/core"

const Banner = () => {
  const { colorMode } = useColorMode()
  return (
    <Stack
      backgroundColor={`mode.${colorMode}.cardBG`}
      d="flex"
      isInline
      py={2}
      px={12}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex isInline>
        <Badge variantColor="blue" variant="subtle" mr={4}>
          New Dribbble Shot
        </Badge>
        <Text
          m={0}
          lineHeight="base"
          fontSize="sm"
          color={`mode.${colorMode}.text`}
        >
          New GraphCMS Website Design
        </Text>
      </Flex>
      <Button
        as="a"
        fontSize="sm"
        size="sm"
        m={0}
        variantColor="primary"
        variant="ghost"
      >
        Check out the post ->
      </Button>
    </Stack>
  )
}

export default Banner
