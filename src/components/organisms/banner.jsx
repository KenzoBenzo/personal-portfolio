import React from "react"
import {
  Text,
  Badge,
  Stack,
  Button,
  Flex,
  useColorMode,
  Link,
} from "@chakra-ui/core"

const Banner = () => {
  const { colorMode } = useColorMode()
  return (
    <Stack
      backgroundColor={`mode.${colorMode}.cardBG`}
      display={["none", "none", "flex"]}
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
      <Link
        href="https://dribbble.com/KennaSmutz"
        _hover={{ textDecoration: "none" }}
        isExternal
      >
        <Button
          fontSize="sm"
          size="sm"
          m={0}
          variantColor="primary"
          variant="ghost"
        >
          Check out the post ->
        </Button>
      </Link>
    </Stack>
  )
}

export default Banner
