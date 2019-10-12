/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import "./layout.css"
import { ThemeProvider } from "@chakra-ui/core"
import customTheme from "../../theme/theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* header goes here */}
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
