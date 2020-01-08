import React from "react"
import PropTypes from "prop-types"

import { Divider, Stack, Button, Box, useColorMode } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "../docs-components/MDXComponents"
import SideNav from "../docs-components/SideNav"
import DocsNavigation from "../docs-components/docsNavigation"

import "./layout.css"

const Main = props => <Box as="main" minH="90vh" mx="auto" {...props} />

const Footer = props => {
  const { colorMode } = useColorMode()
  return (
    <footer {...props}>
      <Divider borderColor={`mode.${colorMode}.cardBG`} />
      <Stack isInline justify="center">
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Roadmap</Button>
        <Button variant="ghost">Release History</Button>
        <Button variant="ghost">Contribute</Button>
      </Stack>
    </footer>
  )
}

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <MDXProvider components={MDXComponents}>
      <Box backgroundColor={`mode.${colorMode}.background`}>
        <SideNav
          display={["none", null, "block"]}
          maxWidth="18rem"
          width="full"
        />
        <Box
          pl={[0, null, "18rem"]}
          backgroundColor={`mode.${colorMode}.background`}
          py={2}
        >
          <DocsNavigation />
          <Main maxWidth="46rem" pt={8} px={5}>
            {children}
          </Main>
          <Footer />
        </Box>
      </Box>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
