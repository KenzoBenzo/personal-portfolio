import React from "react"
import Footer from "./footer"
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

export default function Layout() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <AppContainer>
          <Banner />
          <Navigation />
        </AppContainer>
        <Footer />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

function AppContainer({ children }) {
  const { colorMode } = useColorMode()
  const brandColorTheme = customTheme.colors.mode[colorMode]
  console.log(colorMode)
  return (
    <Stack height="100vh" backgroundColor={brandColorTheme.background}>
      {children}
    </Stack>
  )
}

// const Layout = ({ children }) => {
//   const { colorMode } = useColorMode()
//   console.log(colorMode)
//   return (
//     <ThemeProvider theme={customTheme}>
//       <CSSReset />
//       <ColorModeProvider value={colorMode}>
//         <Stack
//           height="100vh"
//           backgroundColor={customTheme.colors.mode[colorMode].background}
//         >
//           <Banner />
//           <Navigation />
//           {children}
//         </Stack>
//         <Footer />
//       </ColorModeProvider>
//     </ThemeProvider>
//   )
// }

// export default Layout
