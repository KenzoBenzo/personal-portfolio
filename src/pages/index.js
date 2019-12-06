import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import makenna from "../images/KennaSmutz.jpg"
// import { StaticQuery, graphql } from "gatsby"
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
  return (
    <Layout>
      <SEO title="Home" />
      <Flex isInline mx="auto" maxW="1000px">
        <Image
          size="150px"
          rounded="full"
          src={makenna}
          alt="kenna's headshot"
          mr={12}
          border="1px"
          borderColor="gray.500"
        />
        <Box maxW="650px">
          <Heading color={`mode.${colorMode}.text`} mb={8} lineHeight="shorter">
            Deliver tomorrow’s multi-channel experiences.
          </Heading>
          <Text color={`mode.${colorMode}.text`} lineHeight="tall" mb={10}>
            Reunite your developers and content teams to deliver digital
            experiences across all platforms. GraphCMS is the API-first GraphQL
            native CMS built for tomorrow’s cross-platform needs.
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
