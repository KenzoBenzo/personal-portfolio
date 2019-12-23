import { Box, Heading, Icon, useColorMode } from "@chakra-ui/core"
import React from "react"
import components from "./components"
import { ComponentLink, stringToUrl, TopNavLink } from "./NavLink"
import { Link } from "gatsby"

const topNavLinks = [
  "Getting Started",
  "Principles",
  "Style Props",
  "Color Mode",
  "Responsive Styles",
  "Theme",
  "Recipes",
]

const utilsNavLinks = ["useClipboard", "useDisclosure", "useTheme"]

const NavGroupHeading = props => (
  <Heading
    fontSize="xs"
    color="gray.400"
    letterSpacing="wide"
    mb={2}
    textTransform="uppercase"
    {...props}
  />
)

export const SideNavContent = ({ contentHeight = "calc(100vh)", ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" overflowY="auto" borderRightWidth="1px" {...props}>
      <Box
        as="nav"
        top="0"
        height={contentHeight}
        aria-label="Main navigation"
        fontSize="sm"
        px={[8, 8, 8, 12]}
        py={4}
      >
        <Link to="/">
          <Icon
            name="Logo"
            color={`mode.${colorMode}.logo`}
            size={10}
            w={32}
            mb={8}
            display={["none", "none", "flex"]}
          />
        </Link>

        <Box mb="8">
          {topNavLinks.map(link => (
            <TopNavLink key={link} href={stringToUrl(link)}>
              {link}
            </TopNavLink>
          ))}
        </Box>

        <Box mb="10">
          <NavGroupHeading>Components</NavGroupHeading>
          {components.map(link => (
            <ComponentLink key={link} href={stringToUrl(link)}>
              {link}
            </ComponentLink>
          ))}
        </Box>

        <Box mb="10">
          <NavGroupHeading>Utilities</NavGroupHeading>
          {utilsNavLinks.map(link => (
            <ComponentLink key={link} href={stringToUrl(link)}>
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
