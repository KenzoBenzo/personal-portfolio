import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Box, Stack, useColorMode, Icon } from "@chakra-ui/core"

import Hero from "../components/organisms/hero"
import illustration from "../images/Illustration.png"

import FeatureSection from "../components/organisms/FeaturesHorizontal"

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
        ctaText="Schedule Demo"
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

      {/* Features Section */}
      <FeatureSection {...features} />
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
