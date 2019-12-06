import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Box, Flex, Button, Text, Stack } from "@chakra-ui/core"

export default () => (
  <StaticQuery
    query={graphql`
      fragment Details on GCMS_FooterLink {
        iconName
        name
        slug
      }
      {
        gcms {
          social: footerLinks(where: { group: Social }) {
            ...Details
          }
          contact: footerLinks(where: { group: Contact }) {
            ...Details
          }
          work: footerLinks(where: { group: Work }) {
            ...Details
          }
        }
      }
    `}
    render={data => (
      <Box
        as="footer"
        bg="primary.500"
        px={16}
        py={8}
        d="flex"
        justifyContent="space-around"
        alignContent="flex-start"
        pos="absolute"
        bottom="0"
        left="0"
        right="0"
      >
        <Flex wrap="wrap" justify="space-around">
          <Stack textAlign="center" mx={16} my={0}>
            <Text fontWeight="bold" color="accent.500" as="u">
              Social
            </Text>
            {data.gcms.social.map((link, index) => (
              <Button
                as="a"
                target="_blank"
                variant="link"
                color="white"
                pb={2}
                href={link.slug}
                rel="noopener noreferrer"
                leftIcon={link.iconName}
                key={index}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
          <Stack textAlign="center" mx={16} my={0}>
            <Text fontWeight="bold" color="accent.500" as="u">
              Contact
            </Text>
            {data.gcms.contact.map((link, index) => (
              <Button
                as="a"
                target="_blank"
                variant="link"
                color="white"
                pb={2}
                href={link.slug}
                rel="noopener noreferrer"
                leftIcon={link.iconName}
                key={index}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
          <Stack textAlign="center" mx={16} my={0}>
            <Text fontWeight="bold" color="accent.500" as="u">
              Work
            </Text>
            {data.gcms.work.map((link, index) => (
              <Button
                as="a"
                target="_blank"
                variant="link"
                color="white"
                pb={2}
                href={link.slug}
                rel="noopener noreferrer"
                leftIcon={link.iconName}
                key={index}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </Flex>
      </Box>
    )}
  />
)
