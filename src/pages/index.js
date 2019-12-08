import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import illustration from "../images/illustration.png"
import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Stack,
  Button,
  useColorMode,
} from "@chakra-ui/core"

const Homepage = () => {
  const { colorMode } = useColorMode()
  console.log(colorMode + " homepage")
  return (
    <Layout>
      <SEO title="Home" />
      <Flex
        isInline
        mx="auto"
        maxW="1200px"
        justifyContent="space-between"
        alignItems="center"
        py={16}
      >
        {/* <Image size="400px" src={illustration} alt="kenna's headshot" mr={16} /> */}
        <Box>
          <Heading mb={8} lineHeight="shorter" fontWeight="900">
            Placeholder heading tagline.
          </Heading>
          <Text color={`mode.${colorMode}.text`} lineHeight="tall" mb={10}>
            This product is the best thing ever and you should definitely use
            it. Seriously, no need to keep reading.
          </Text>
          <Stack isInline>
            <Button variantColor="primary" variant="solid">
              Schedule Demo
            </Button>
            <Button variant="ghost">Sign up</Button>
          </Stack>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Homepage
