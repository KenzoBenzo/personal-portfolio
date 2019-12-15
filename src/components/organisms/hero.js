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
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
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
      <Box
        width={[
          "100%", // base
          "100%", // 480px upwards
          "50%", // 768px upwards
        ]}
      >
        <Popover>
          <PopoverTrigger>
            <Badge variantColor="red" mb={4}>
              story behind this site? click me
            </Badge>
          </PopoverTrigger>
          <PopoverContent
            zIndex={4}
            backgroundColor={`mode.${colorMode}.cardBG`}
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Hey, I'm Kenna.</PopoverHeader>
            <PopoverBody>
              I love building websites for SaaS products and wanted to show off
              a bit of what I do. This page uses me as the product!
            </PopoverBody>
          </PopoverContent>
        </Popover>
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
        <Text color={`mode.${colorMode}.text`} lineHeight="tall" mb={8}>
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
