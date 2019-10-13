import React from "react"
import { Text, Stack, Button } from "@chakra-ui/core"
import Layout from "../../components/layout"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import { Link } from "gatsby"

const Tags = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;

  p {
    border: 2px solid #f4cbc3;
    border-radius: 0px 10px;
    padding: 8px 16px;
    margin-right: 8px;
    height: fit-content;
  }
`

const ImgWrapper = styled.div`
  img {
    border-radius: 10px;
  }

  a {
    transition: all 0.2s;
    font-size: 16px;
  }

  a:hover {
    background: #f4cbc3;
    padding: 2px;
    border-radius: 2px;
  }
`

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
          <Tags>
            {data.gcms.portfolioCard.type.map(i => {
              return <p>{i}</p>
            })}
          </Tags>
        </Stack>
        <Stack maxW={1000} m="0 auto" p="64px 32px">
          <ImgWrapper>
            <ReactMarkdown
              source={data.gcms.portfolioCard.body.markdown}
              escapeHtml={false}
            />
          </ImgWrapper>
        </Stack>
      </Layout>
    )}
  />
)
