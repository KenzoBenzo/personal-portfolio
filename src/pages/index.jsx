import React from "react"
import Layout from "../components/layouts/layout"
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
  Image,
} from "@chakra-ui/core"

import Hero from "../components/organisms/hero"

import ValueSection from "../components/organisms/ValueHorizontal"

import Testimonial from "../components/molecules/TestimonialCard"
import zach from "../static/zach.jpeg"
import matija from "../static/matija.jpeg"

import Skill from "../components/molecules/SkillCard"

import kenna from "../static/KennaSmutz.jpg"

const Homepage = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <SEO />

      <Hero
        title="Design + Code for Growth"
        subtitle="A high-performer that makes website creation seamless. Kenna is an energetic 23 year old that excels in execution of design, and frontend development."
        ctaText="Schedule a Call"
      />

      {/* Social proof section */}
      <Box maxW="1000px" mx="auto" py={16} px={8}>
        <Heading
          as="h4"
          fontSize="normal"
          fontWeight="900"
          letterSpacing="wide"
          color={`mode.${colorMode}.icon`}
          textAlign="center"
        >
          Companies that have worked with Kenna
        </Heading>
        <Flex wrap="wrap" justify="center">
          <Icon
            name="clickup"
            size={32}
            mx={4}
            color={`mode.${colorMode}.icon`}
          />
          <Icon
            name="graphcms"
            size={32}
            mx={4}
            color={`mode.${colorMode}.icon`}
          />
          <Icon name="taia" size={32} mx={4} color={`mode.${colorMode}.icon`} />
          <Icon
            name="altitude-activities"
            size={32}
            mx={4}
            color={`mode.${colorMode}.icon`}
          />
        </Flex>
      </Box>

      {/* Value Props Section */}
      <ValueSection {...features} />

      {/* Testimonials Section */}
      <Box maxW="1000px" mx="auto" py={16} px={8}>
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
            mb={4}
          />
          <Testimonial
            review="Makenna is very hard-working and enthusiastic, always full of ideas and fresh approaches. She is a fast learner and is very eager to progress and improve. I believe she has a very successful career ahead of her and wish her all the best in her future endeavours."
            reviewer="Matija Kovač"
            avatar={matija}
          />
        </Stack>
      </Box>

      {/* Skill Set section */}
      <Box maxW="1000px" mx="auto" py={16} px={8}>
        <Heading
          as="h2"
          mb={8}
          lineHeight="shorter"
          fontWeight="900"
          color={`mode.${colorMode}.heading`}
          textAlign="center"
        >
          Things Kenna excels at
        </Heading>
        <Flex wrap="wrap" justify="center" align="center">
          <Image
            src={kenna}
            height="300px"
            rounded="lg"
            mr={[0, 0, 8, 16]}
            mb={[16, 16, 16, 0]}
          />
          <Stack spacing={6} w={["100%", "100%", "50%"]}>
            <Skill
              icon="abstract5"
              title="Web Design"
              description="4 years of experience designing and is profficient in several tools such as Figma, Framer, UXpin, and Sketch. Kenna works on everything from stickers to application design."
            />
            <Skill
              icon="abstract4"
              title="Frontend Development"
              description="3 years of experience as a self-taught frontend developer. Kenna works daily with React and GraphQL but has worked briefly in Vue and Vanilla JavaScript as well."
            />
            <Skill
              icon="abstract6"
              title="UX Focus"
              description="Design and development without the user's experience at the core, is just drawing boxes. Kenna works with user testing and by-reflex, designs under ux principles and best practices."
            />
          </Stack>
        </Flex>
      </Box>

      {/* Sales funnel capture, download CV Section */}
      <Flex py={16} px={8}>
        <Box
          maxW="1000px"
          mx="auto"
          p={6}
          rounded="lg"
          backgroundColor={colorMode === "light" ? "gray.900" : "gray.100"}
        >
          <Flex wrap="wrap" align="center" justify="center">
            <Heading
              color={colorMode === "light" ? "gray.100" : "gray.900"}
              fontWeight={900}
              letterSpacing="wide"
              w={["100%", "100%", "75%"]}
              mr={[0, 0, 0, 4]}
              mb={[6, 6, 6, 0]}
              textAlign={["center", "center", "center", "left"]}
            >
              Want to know more about Kenna before chatting?
            </Heading>
            <LightMode>
              <Link
                href="https://drive.google.com/open?id=1e5KjZBdySbf8IhXp8R275ZJI6rnnFhtj"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button variantColor="primary" fontWeight={600} size="lg">
                  Download her CV
                </Button>
              </Link>
            </LightMode>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  )
}

const features = [
  {
    icon: "abstract1",
    title: "Web design",
    description:
      "In research, ideation, and execution - Kenna follows the latest trends and optimizes for growth.",
  },
  {
    icon: "abstract2",
    title: "Frontend code",
    description:
      "Frontend implementation or developer handoff, Kenna has got it covered.",
  },
  {
    icon: "abstract3",
    title: "Customer centric",
    description:
      "The silver lining of Kenna's workflow, is the customer and their needs - focused approach.",
  },
]

export default Homepage
