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
import Layout from "../components/layout"

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
            <span rol="img" aria-label="wave">
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
            <span rol="img" aria-label="kangaroo">
              🦘
            </span>
            Fun fact, most trampoline parks have a <Text as="i">Pro</Text> area
            that has olymic quality trampolines.
          </ListItem>
          <ListItem>
            Travelling{" "}
            <span rol="img" aria-label="airplane">
              ✈️
            </span>
          </ListItem>
          <ListItem>
            Guitar{" "}
            <span rol="img" aria-label="guitar">
              🎸
            </span>
          </ListItem>
          <ListItem>
            Snorkleing &amp; Surfing{" "}
            <span rol="img" aria-label="tropical fish">
              🐠
            </span>
            <span rol="img" aria-label="female surfer">
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
            <span rol="img" aria-label="usa flag">
              🇺🇸
            </span>{" "}
            currently living in Switzerland{" "}
            <span rol="img" aria-label="swiss flag">
              🇨🇭
            </span>
          </ListItem>
          <ListItem>
            I met my wife{" "}
            <span rol="img" aria-label="pride flag">
              🏳️‍🌈
            </span>{" "}
            in Costa Rica{" "}
            <span rol="img" aria-label="costa rican flag">
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
