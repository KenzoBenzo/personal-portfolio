import React from "react"
import {
  Stack,
  Button,
  IconButton,
  Icon,
  Flex,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
} from "@chakra-ui/core"
import { Link } from "gatsby"

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex
      py={4}
      px={[8, 8, 8, 12]}
      isInline
      justifyContent="space-between"
      backgroundColor={`mode.${colorMode}.background`}
      borderBottomWidth="1px"
      borderBottom={`mode.${colorMode}.icon`}
      zIndex={0}
    >
      <Link to="/">
        <Icon name="Logo" color={`mode.${colorMode}.logo`} size={10} w={32} />
      </Link>

      <Stack isInline spacing={4} display={["block", "block", "none"]}>
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
        <IconButton ref={btnRef} icon="hamburger" onClick={onOpen} />
      </Stack>

      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={btnRef}
        size="sm"
        backgroundColor={`mode.${colorMode}.cardBG`}
      >
        <DrawerContent
          shadow="none"
          backgroundColor={`mode.${colorMode}.cardBG`}
        >
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader>
            <Link to="/">
              <Icon
                name="Logo"
                color={`mode.${colorMode}.logo`}
                size={10}
                w={32}
              />
            </Link>
          </DrawerHeader>
          <DrawerBody py={6}>
            <Stack justify="center" align="center">
              <Link to="/docs/">
                <Button variantColor="gray" variant="ghost" mx="auto">
                  Design Docs
                </Button>
              </Link>
              <Link to="/about-me/">
                <Button variantColor="gray" variant="ghost" mx="auto">
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
            </Stack>
          </DrawerBody>
          <DrawerFooter d="flex" justifyContent="center">
            <Stack isInline>
              <IconButton icon="twitter" isRound color="gray.500" />
              <IconButton icon="linkedin" isRound color="gray.500" />
              <IconButton icon="github" isRound color="gray.500" />
              <IconButton icon="dribbble" isRound color="gray.500" />
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Stack isInline display={["none", "none", "flex"]}>
        <Link to="/docs/">
          <Button variantColor="gray" variant="ghost" mx="auto">
            Design Docs
          </Button>
        </Link>
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
