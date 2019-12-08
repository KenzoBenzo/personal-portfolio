const React = require("react")
const customTheme = require("./theme/theme")
const {
  ColorModeProvider,
  ThemeProvider,
  CSSReset,
} = require("@chakra-ui/core")

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        {element}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
