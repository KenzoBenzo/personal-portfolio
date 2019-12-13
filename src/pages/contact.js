import React from "react"
import {
  useColorMode,
  Heading,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  LightMode,
  Box,
} from "@chakra-ui/core"
import Layout from "../components/layout"

const ContactPage = () => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <Box maxW="1000px" mx="auto">
        <Heading
          as="h2"
          lineHeight="shorter"
          fontWeight="900"
          color={`mode.${colorMode}.heading`}
          textAlign="center"
          mb={8}
        >
          Get in touch with Kenna
        </Heading>
        <form
          name="contact"
          data-netlify="true"
          method="post"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" />
          <Box>
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <Input
              type="name"
              id="name"
              aria-describedby="name-helper-text"
              placeholder="Your name"
              size="lg"
              mb={4}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              id="email"
              aria-describedby="email-helper-text"
              placeholder="Your email"
              size="lg"
              mb={4}
              is
            />
          </Box>
          <Box>
            <FormLabel>Message</FormLabel>
            <Textarea
              resize="none"
              placeholder="Type your message here..."
              size="lg"
              mb={4}
            />
          </Box>
          <Box>
            <FormLabel>Which company are you from?</FormLabel>
            <InputGroup mb={8} size="lg">
              <InputLeftAddon children="https://" />
              <Input rounded="0" placeholder="company-site" />
              <InputRightAddon children=".com" />
            </InputGroup>
          </Box>
          <LightMode>
            <Button
              size="lg"
              fontWeight={600}
              variantColor="primary"
              // isLoading={isSubmitting}
              type="submit"
              isFullWidth
            >
              Submit
            </Button>
          </LightMode>
        </form>
      </Box>
    </Layout>
  )
}

export default ContactPage
