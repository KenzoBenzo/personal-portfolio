import { Box, Heading, Icon, useColorMode, Button } from "@chakra-ui/core"
import React from "react"
import components from "./components"
import { ComponentLink, stringToUrl, TopNavLink } from "./NavLink"
import { Link } from "gatsby"

const topNavLinks = ["Theme"]

// const utilsNavLinks = ["useClipboard", "useDisclosure", "useTheme"]

const NavGroupHeading = props => (
  <Heading
    fontSize="sm"
    color="gray.500"
    letterSpacing="wide"
    mb={2}
    textTransform="uppercase"
    {...props}
  />
)

export const SideNavContent = ({
  pathName,
  contentHeight = "calc(100vh)",
  ...props
}) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      position="relative"
      overflowY="auto"
      borderRightWidth="1px"
      borderRightColor={`mode.${colorMode}.cardBG`}
      {...props}
    >
      <Box
        as="nav"
        top="0"
        height={contentHeight}
        aria-label="Main navigation"
        fontSize="sm"
        px={[8, 8, 8, 12]}
        py={4}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            name="Logo"
            color={`mode.${colorMode}.logo`}
            size={10}
            w={32}
            h="40px"
            mt={0}
            mr={3}
            display={["none", "none", "flex"]}
          />
          <Link to="/docs/">
            <Button
              size="sm"
              fontWeight="700"
              h="24px"
              px={2}
              letterSpacing="tighter"
              display={["none", "none", "flex"]}
            >
              docs
            </Button>
          </Link>
        </Link>

        <Box mt={10} mb={8}>
          <TopNavLink href="/docs/">Docs Introduction</TopNavLink>
          {topNavLinks.map(link => (
            <TopNavLink key={link} pathName={pathName} href={stringToUrl(link)}>
              {link}
            </TopNavLink>
          ))}
        </Box>

        <Box mb="10">
          <NavGroupHeading>Components</NavGroupHeading>
          {components.map(link => (
            <ComponentLink
              key={link}
              pathName={pathName}
              href={stringToUrl(link)}
            >
              {link}
            </ComponentLink>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
const SideNavContainer = props => (
  <Box
    position="fixed"
    left="0"
    width="100%"
    height="100%"
    top="40"
    right="0"
    {...props}
  />
)

const SideNav = props => {
  return (
    <SideNavContainer {...props}>
      <SideNavContent />
    </SideNavContainer>
  )
}

export default SideNav
