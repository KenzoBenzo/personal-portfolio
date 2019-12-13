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

import Testimonial from "../components/molecules/TestimonialCard"
import zach from "../static/zach.jpeg"
import matija from "../static/matija.jpeg"

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
      <Box maxW="1000px" mx="auto" py={16}>
        <Heading
          as="h2"
          mb={8}
          lineHeight="shorter"
          fontWeight="900"
          color={`mode.${colorMode}.heading`}
          textAlign="center"
        >
          What people have to say about Kenna
        </Heading>
        <Stack spacing={8}>
          <Testimonial
            review="Makenna is an innate design-thinker, perfectly suited for fabricating the tools and content needed to operate successful marketing campaigns. Makenna is well-informed of trends in her field and understands the importance of experience from a user's perspective. Her iterative process is a great fit at technology companies willing to push themselves beyond the traditional and into the transformational. I've witnessed Makenna manage multiple projects simultaneously, meeting deadlines that were beyond reasonable and doing so while providing quality work that was effectively communicated to a team around the world, even from her remote position. I'd be lucky to have the chance to work with Makenna again in the future; whoever gets the chance in the meantime will be better off for having it."
            reviewer="Zachary Snader"
            avatar={zach}
          />
          <Testimonial
            review="Makenna is very hard-working and enthusiastic, always full of ideas and fresh approaches. She is a fast learner and is very eager to progress and improve. I believe she has a very successful career ahead of her and wish her all the best in her future endeavours."
            reviewer="Matija Kovač"
            avatar={matija}
          />
        </Stack>
      </Box>

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
