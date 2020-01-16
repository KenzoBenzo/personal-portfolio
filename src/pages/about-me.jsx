import React from "react"
import {
  Heading,
  useColorMode,
  Box,
  Avatar,
  Text,
  Stack,
  Code,
  List,
  ListItem,
  LightMode,
  Link,
  Button,
} from "@chakra-ui/core"
import Layout from "../components/layouts/layout"

import kenna from "../static/KennaSmutz.jpg"

const AboutPage = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <Box maxW="1000px" mx="auto" py={16} px={8}>
        <Stack
          isInline
          alignItems="center"
          spacing={4}
          justifyContent="center"
          mb={8}
        >
          <Avatar size="lg" src={kenna} />
          <Heading
            lineHeight="base"
            fontWeight={900}
            letterSpacing="wide"
            color={`mode.${colorMode}.heading`}
            as="h2"
          >
            Hey, I'm Makenna{" "}
            <span role="img" aria-labelledby="wave">
              👋
            </span>
          </Heading>
        </Stack>
        <Text lineHeight="taller" mb={6}>
          I design and code.{" "}
          <strong>
            I want to work with ambitious, but human companies on their
            experience and aesthetic.{" "}
          </strong>
          I'm really passionate about connecting the two specialties as they are
          so powerful when intertwined. I have a wide skillset, and specialize
          in producing fantastic content.
        </Text>
        <Text lineHeight="taller" mb={8}>
          I've worked in startups for all of my career, switching disciplines
          from <Code variantColor="blue">Customer Support</Code>,{" "}
          <Code variantColor="blue">Marketing</Code>,{" "}
          <Code variantColor="blue">Web Development</Code>, and{" "}
          <Code variantColor="blue">Design</Code>. This affords me the
          perspective to make well rounded decisions, which is really empowering
          in any team.
        </Text>

        <Heading as="h2" fontSize="2xl" mb={4}>
          Hobbies
        </Heading>
        <Text lineHeight="taller" mb={2} fontSize="md">
          I have a few hobbies outside of design and code:
        </Text>
        <List styleType="disc" mb={8} spacing={2}>
          <ListItem>
            Trampolining{" "}
            <span role="img" aria-labelledby="kangaroo">
              🦘
            </span>
            Fun fact, most trampoline parks have a <Text as="i">Pro</Text> area
            that has olymic quality trampolines.
          </ListItem>
          <ListItem>
            Travelling{" "}
            <span role="img" aria-labelledby="airplane">
              ✈️
            </span>
          </ListItem>
          <ListItem>
            Guitar{" "}
            <span role="img" aria-labelledby="guitar">
              🎸
            </span>
          </ListItem>
          <ListItem>
            Snorkleing &amp; Surfing{" "}
            <span role="img" aria-labelledby="tropical fish">
              🐠
            </span>
            <span role="img" aria-labelledby="female surfer">
              🏄‍♀️
            </span>
          </ListItem>
        </List>

        <Heading as="h2" fontSize="2xl" mb={4}>
          Quick facts
        </Heading>
        <List styleType="disc" mb={8} spacing={2}>
          <ListItem>
            I'm American{" "}
            <span role="img" aria-labelledby="usa flag">
              🇺🇸
            </span>{" "}
            currently living in Switzerland{" "}
            <span role="img" aria-labelledby="swiss flag">
              🇨🇭
            </span>
          </ListItem>
          <ListItem>
            I met my wife{" "}
            <span role="img" aria-labelledby="pride flag">
              🏳️‍🌈
            </span>{" "}
            in Costa Rica{" "}
            <span role="img" aria-labelledby="costa rican flag">
              🇨🇷
            </span>
          </ListItem>
          <ListItem>
            I'm self taught using online courses and real world experience
          </ListItem>
          <ListItem>I'm 22 years old</ListItem>
        </List>
        <Text lineHeight="taller" mb={6}>
          {" "}
          Think we could be an interesting fit for each other?
        </Text>
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
              Schedule a Call
            </Button>
          </Link>
        </LightMode>
      </Box>
    </Layout>
  )
}

export default AboutPage
