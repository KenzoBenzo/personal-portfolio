import React from "react"
import {
  Stack,
  Button,
  IconButton,
  Icon,
  Flex,
  useColorMode,
} from "@chakra-ui/core"

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      py={4}
      px={12}
      isInline
      justifyContent="space-between"
      background={`mode${colorMode}.background`}
    >
      <Icon name="Logo" color={`mode.${colorMode}.logo`} size={10} w={32} />
      <Stack isInline>
        <Button variantColor="gray" variant="ghost">
          About me
        </Button>
        <Button variantColor="gray" variant="ghost">
          Contact
        </Button>
        <Button variantColor="gray" variant="ghost">
          My work
        </Button>
        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          variant="ghost"
          color={`mode.${colorMode}.text`}
          ml="2"
          fontSize="20px"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : "sun"}
        />
      </Stack>
    </Flex>
  )
}

export default Navigation
