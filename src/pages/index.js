import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Heading,
  Box,
  Stack,
  useColorMode,
  Icon,
  Button,
  LightMode,
  Link,
  Flex,
} from "@chakra-ui/core"

import Hero from "../components/organisms/hero"
import illustration from "../static/Illustration.png"

import ValueSection from "../components/organisms/ValueHorizontal"

const Homepage = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <SEO title="Home" />

      <Hero
        image={illustration}
        title="Design.Code. "
        flare="Kenna."
        subtitle="A do-er that makes website creation seamless. Kenna is a bubbly 22 year old that excels in execution, design, and frontend development."
        ctaText="Schedule a Call"
      />

      {/* Social proof section */}
      <Box maxW="1000px" mx="auto" py={16}>
        <Heading
          as="h4"
          fontSize="normal"
          fontWeight="900"
          letterSpacing="wide"
          color={`mode.${colorMode}.icon`}
          textAlign="center"
        >
          Companies that kenna has worked with
        </Heading>
        <Stack isInline spacing={8} color={`mode.${colorMode}.icon`}>
          <Icon name="clickup" size={32} color={`mode.${colorMode}.icon`} />
          <Icon name="graphcms" size={32} color={`mode.${colorMode}.icon`} />
          <Icon name="taia" size={32} color={`mode.${colorMode}.icon`} />
          <Icon
            name="altitude-activities"
            size={32}
            color={`mode.${colorMode}.icon`}
          />
        </Stack>
      </Box>

      {/* Value Props Section */}
      <ValueSection {...features} />

      {/* Testimonials Section */}

      {/* Sales funnel capture, download CV Section */}
      <Flex py={16}>
        <Box
          maxW="1000px"
          mx="auto"
          p={6}
          rounded="lg"
          backgroundColor={colorMode === "light" ? "gray.900" : "gray.100"}
        >
          <Stack isInline d="flex" alignItems="center" spacing={16}>
            <Heading
              color={colorMode === "light" ? "gray.100" : "gray.900"}
              fontWeight={900}
              letterSpacing="wide"
            >
              Want to know more about Kenna before chatting?
            </Heading>
            <LightMode>
              <Link
                href="https://drive.google.com/open?id=1hE94D2oyM19R1cmp8X-DPw6ICf8Lw3BM"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button variantColor="primary" fontWeight={600} size="lg">
                  Download her CV
                </Button>
              </Link>
            </LightMode>
          </Stack>
        </Box>
      </Flex>
    </Layout>
  )
}

const features = [
  {
    icon: "abstract1",
    title: "Tester #1 here",
    description:
      "This is the grandest feature ever. Please for the love of god hire makenna.",
  },
  {
    icon: "abstract2",
    title: "Tester #2 here",
    description:
      "This is the grandest feature ever. Please for the love of god hire makenna.",
  },
  {
    icon: "abstract3",
    title: "Tester #3 here",
    description:
      "This is the grandest feature ever. Please for the love of god hire makenna.",
  },
]

export default Homepage
