import React from "react"
import Footer from "./organisms/footer"
import Banner from "./organisms/banner"
import Navigation from "./organisms/navigation"
import "./layout.css"
import { Stack, useColorMode } from "@chakra-ui/core"
import customTheme from "../../theme/theme"

export default function Layout({ children }) {
  const { colorMode } = useColorMode()
  const brandColorTheme = customTheme.colors.mode[colorMode]
  return (
    <>
      <Stack minH="90vh" backgroundColor={brandColorTheme.background}>
        <Banner />
        <Navigation />
        {children}
      </Stack>
      <Footer />
    </>
  )
}
