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
} from "@chakra-ui/core"
import theme from "../../../theme/theme"
import Layout from "../../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Link } from "gatsby"

const Page = () => {
  const { colorMode } = useColorMode()
  const data = useStaticQuery(graphql`
    {
      gcms {
        portfolioCard(where: { id: "ck0qmcbly5stt0b380tl1bwlo" }) {
          title
          type
          body {
            markdown
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Stack isInline mx="auto" spacing={4}>
        <Heading
          as="h2"
          fontSize="4xl"
          lineHeight="shorter"
          fontWeight="900"
          color={`mode.${colorMode}.heading`}
          textAlign="center"
        >
          {data.gcms.portfolioCard.title}
        </Heading>
        {data.gcms.portfolioCard.type.map(i => {
          return (
            <Tag variantColor="blue" size="lg" fontWeight={600} ml={4}>
              {i}
            </Tag>
          )
        })}
      </Stack>
      <Stack maxW={1000} mx="auto" py={16} px={8}>
        <ReactMarkdown
          source={data.gcms.portfolioCard.body.markdown}
          escapeHtml={false}
          renderers={{
            list: props => (
              <List styleType="disc" stylePos="outside" spacing={4} {...props}>
                {props.children}
              </List>
            ),
            listItem: props => <ListItem {...props}>{props.children}</ListItem>,
            paragraph: props => (
              <Text {...props} mb={6}>
                {props.children}
              </Text>
            ),
            link: props => (
              <a
                {...props}
                style={{ color: theme.colors.mode[colorMode].link }}
              >
                {props.children}
              </a>
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
          <Link to="/">
            <Button variantColor="primary" size="lg" mt={6}>
              Go back home
            </Button>
          </Link>
        </LightMode>
      </Stack>
    </Layout>
  )
}

export default Page
