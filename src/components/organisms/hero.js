import React from "react"
import {
  useColorMode,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  LightMode,
  Link,
} from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroComponent = ({ title, flare, subtitle, ctaText }) => {
  const { colorMode } = useColorMode()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/Illustration.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Flex
      mx="auto"
      maxW="1000px"
      justifyContent="space-between"
      alignItems="center"
      py={16}
      px={8}
      display={["block", "block", "flex"]}
    >
      <Box
        width={[
          "100%", // base
          "100%", // 480px upwards
          "50%", // 480px upwards
        ]}
        mr={[0, 0, 16]}
        mb={[16, 16, 0]}
      >
        <Img fluid={data.file.childImageSharp.fluid} alt="Illustration" />
      </Box>
      {/* <Image
        src={image}
        alt="Illustration"
        width={[
          "100%", // base
          "100%", // 480px upwards
          "50%", // 480px upwards
        ]}
        mr={[0, 0, 16]}
        mb={[16, 16, 0]}
      /> */}
      <Box
        width={[
          "100%", // base
          "100%", // 480px upwards
          "50%", // 768px upwards
        ]}
      >
        <Heading
          mb={4}
          as="h1"
          lineHeight="shorter"
          fontWeight="900"
          color={`mode.${colorMode}.heading`}
          letterSpacing="wider"
        >
          {title} {flare ? <Text as="i">{flare}</Text> : null}
        </Heading>
        <Text color={`mode.${colorMode}.text`} lineHeight="tall" mb={6}>
          {subtitle}
        </Text>
        <Stack isInline>
          <LightMode>
            <Link
              href="https://calendly.com/makennasmutz/chat?month=2019-12"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <Button
                variantColor="primary"
                variant="solid"
                fontWeight="600"
                letterSpacing="tight"
                size="lg"
              >
                {ctaText}
              </Button>
            </Link>
          </LightMode>
        </Stack>
      </Box>
    </Flex>
  )
}

export default HeroComponent
