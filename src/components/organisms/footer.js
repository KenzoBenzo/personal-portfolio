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
  Divider,
  Icon,
  IconButton,
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
        <Box as="footer" bg={`mode.${colorMode}.cardBG`} py={10}>
          <Box maxW="1000px" mx="auto">
            <Flex wrap="wrap" justify="space-around">
              <Stack textAlign="center" mx={16} my={0}>
                <Text fontWeight="900" color={`mode.${colorMode}.text`}>
                  Social
                </Text>
                {data.gcms.social.map((link, index) => (
                  <Link
                    href={link.slug}
                    key={index}
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="ghost"
                      leftIcon={link.iconName}
                      color="gray.500"
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </Stack>
              <Stack textAlign="center" mx={16} my={0}>
                <Text fontWeight="900" color={`mode.${colorMode}.text`}>
                  Contact
                </Text>
                {data.gcms.contact.map((link, index) => (
                  <Link
                    href={link.slug}
                    key={index}
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="ghost"
                      leftIcon={link.iconName}
                      color="gray.500"
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </Stack>
              <Stack textAlign="center" mx={16} my={0}>
                <Text fontWeight="900" color={`mode.${colorMode}.text`}>
                  Work
                </Text>
                {data.gcms.work.map((link, index) => (
                  <Link
                    href={link.slug}
                    key={index}
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="ghost"
                      leftIcon={link.iconName}
                      color="gray.500"
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </Stack>
            </Flex>
            <Divider borderColor="gray.300" mb={4} mt={4} />
            <Flex justifyContent="space-between">
              <Icon name="Logo" color="gray.500" size={10} w={24} />
              <Stack isInline>
                <IconButton icon="twitter" isRound color="gray.500" />
                <IconButton icon="linkedin" isRound color="gray.500" />
                <IconButton icon="github" isRound color="gray.500" />
                <IconButton icon="dribbble" isRound color="gray.500" />
              </Stack>
            </Flex>
          </Box>
        </Box>
      )}
    />
  )
}
