import React from "react"
import {
  Stack,
  Button,
  IconButton,
  Icon,
  Flex,
  useColorMode,
} from "@chakra-ui/core"
import { Link } from "gatsby"

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
      <Link to="/">
        <Icon name="Logo" color={`mode.${colorMode}.logo`} size={10} w={32} />
      </Link>
      <Stack isInline>
        <Link to="/about-me/">
          <Button variantColor="gray" variant="ghost">
            About me
          </Button>
        </Link>
        <Link to="/contact/">
          <Button variantColor="gray" variant="ghost">
            Contact
          </Button>
        </Link>
        <Link to="/projects/">
          <Button variantColor="gray" variant="ghost">
            My projects
          </Button>
        </Link>
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
          transition="all 0.2s"
        />
      </Stack>
    </Flex>
  )
}

export default Navigation
