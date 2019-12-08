import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  Box,
  Flex,
  Button,
  Text,
  Stack,
  Link,
  useColorMode,
} from "@chakra-ui/core"

export default () => {
  const { colorMode } = useColorMode()
  return (
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
          bg={`mode.${colorMode}.cardBG`}
          px={16}
          py={10}
          d="flex"
          justifyContent="space-around"
          alignContent="flex-start"
        >
          <Flex wrap="wrap" justify="space-around">
            <Stack textAlign="center" mx={16} my={0}>
              <Text fontWeight="bold" color={`mode.${colorMode}.text`}>
                Social
              </Text>
              {data.gcms.social.map((link, index) => (
                <Link href={link.slug} key={index} isExternal>
                  <Button variant="ghost" leftIcon={link.iconName}>
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Stack>
            <Stack textAlign="center" mx={16} my={0}>
              <Text fontWeight="bold" color={`mode.${colorMode}.text`}>
                Contact
              </Text>
              {data.gcms.contact.map((link, index) => (
                <Link href={link.slug} key={index} isExternal>
                  <Button variant="ghost" leftIcon={link.iconName}>
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Stack>
            <Stack textAlign="center" mx={16} my={0}>
              <Text fontWeight="bold" color={`mode.${colorMode}.text`}>
                Work
              </Text>
              {data.gcms.work.map((link, index) => (
                <Link href={link.slug} key={index} isExternal>
                  <Button variant="ghost" leftIcon={link.iconName}>
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Flex>
        </Box>
      )}
    />
  )
}
