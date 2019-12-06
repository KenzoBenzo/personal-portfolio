import React from "react"
import Footer from "./organisms/footer"
import Banner from "./organisms/banner"
import Navigation from "./organisms/navigation"
import "./layout.css"
import {
  ColorModeProvider,
  ThemeProvider,
  CSSReset,
  Stack,
  useColorMode,
} from "@chakra-ui/core"
import customTheme from "../../theme/theme"

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <AppContainer>
          <Banner />
          <Navigation />
          {children}
        </AppContainer>
        <Footer />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

function AppContainer({ children }) {
  const { colorMode } = useColorMode()
  const brandColorTheme = customTheme.colors.mode[colorMode]
  return (
    <Stack minH="100vh" backgroundColor={brandColorTheme.background}>
      {children}
    </Stack>
  )
}
