import React from "react"
import {
  Heading,
  Stack,
  Button,
  useColorMode,
  Tag,
  LightMode,
  Text,
  List,
  ListItem,
  Image,
  Link,
} from "@chakra-ui/core"
import theme from "../../../theme/theme"
import Layout from "../layout"
import ReactMarkdown from "react-markdown"
import { Link as GatsbyLink } from "gatsby"

const Page = ({ pageContext: { project } }) => {
  const { colorMode } = useColorMode()
  return (
    <Layout>
      <Stack isInline mx="auto" spacing={4} pt={16} px={8}>
        <Heading
          as="h2"
          fontSize="4xl"
          lineHeight="shorter"
          fontWeight="900"
          color={`mode.${colorMode}.heading`}
          textAlign="center"
        >
          {project.title}
        </Heading>
        {project.type.map(i => {
          return (
            <Tag variantColor="blue" size="lg" fontWeight={600} ml={4}>
              {i}
            </Tag>
          )
        })}
      </Stack>
      <Stack maxW={1000} mx="auto" mt={8} pb={16} px={8}>
        <ReactMarkdown
          source={project.body.markdown}
          escapeHtml={false}
          renderers={{
            list: props => (
              <List styleType="disc" stylePos="outside" spacing={4} {...props}>
                {props.children}
              </List>
            ),
            listItem: props => (
              <ListItem {...props} display="flex">
                {props.children}
              </ListItem>
            ),
            paragraph: props => (
              <Text {...props} mb={6}>
                {props.children}
              </Text>
            ),
            link: props => (
              <Link
                {...props}
                style={{
                  color: theme.colors.mode[colorMode].link,
                  display: "flex",
                }}
              >
                {props.children}
              </Link>
            ),
            image: props => <Image {...props} rounded="lg" />,
            heading: props => (
              <Heading {...props} color={`mode.${colorMode}.heading`}>
                {props.children}
              </Heading>
            ),
            text: Text,
          }}
        />
        <LightMode>
          <GatsbyLink to="/">
            <Button variantColor="primary" size="lg" mt={6}>
              Go back home
            </Button>
          </GatsbyLink>
        </LightMode>
      </Stack>
    </Layout>
  )
}

export default Page