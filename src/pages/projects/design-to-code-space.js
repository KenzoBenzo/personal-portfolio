import React from "react"
import { Text, Stack, Button, Flex, Box } from "@chakra-ui/core"
import Layout from "../../components/layout"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Link } from "gatsby"

// a {
//   transition: all 0.2s;
//   font-size: 16px;
// }

// a:hover {
//   background: #f4cbc3;
//   padding: 2px;
//   border-radius: 2px;
// }

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Layout>
        <Stack isInline align="flex-end" justify="center">
          <Text fontSize="5xl" textAlign="center" mb="0" lineHeight="base">
            {data.gcms.portfolioCard.title}
          </Text>
          <Box display="flex" lineHeight="short">
            {data.gcms.portfolioCard.type.map(i => {
              return (
                <Text
                  border="2px solid"
                  fontWeight="bold"
                  borderColor="accent.500"
                  borderTopRightRadius={10}
                  borderBottomLeftRadius={10}
                  py={2}
                  px={4}
                  mr={4}
                  fontSize="2xl"
                  lineHeight="short"
                >
                  {i}
                </Text>
              )
            })}
          </Box>
        </Stack>
        <Stack maxW={1000} m="0 auto" p="64px 32px">
          <ReactMarkdown
            source={data.gcms.portfolioCard.body.markdown}
            escapeHtml={false}
          />
        </Stack>
        <Flex justify="center">
          <Link to="/">
            <Button variantColor="primary" size="lg" m={8}>
              Go back home
            </Button>
          </Link>
        </Flex>
      </Layout>
    )}
  />
)
