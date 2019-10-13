import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Flex, Button } from "@chakra-ui/core"

const Footer = styled.footer`
  background: #03005c;
  color: #fff;
  margin-bottom: 0;
  padding: 64px 32px;
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
`

const LinkGroup = styled.div`
  text-align: center;
  margin: 0 64px;
  p {
    font-family: "Inter var";
    font-style: italic;
    font-weight: 700;
    color: #f4cbc3;
    text-decoration: underline;
  }
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    margin-bottom: 4px;
  }
`

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
      <Footer>
        <Flex wrap="wrap" justify="space-around" size="1000">
          <LinkGroup>
            <p>Social</p>
            {data.gcms.social.map((link, index) => (
              <Button
                as="a"
                target="_blank"
                variant="link"
                href={link.slug}
                rel="noopener noreferrer"
                leftIcon={link.iconName}
                key={index}
              >
                {link.name}
              </Button>
            ))}
          </LinkGroup>
          <LinkGroup>
            <p>Contact</p>
            {data.gcms.contact.map((link, index) => (
              <Button
                as="a"
                target="_blank"
                variant="link"
                href={link.slug}
                rel="noopener noreferrer"
                leftIcon={link.iconName}
                key={index}
              >
                {link.name}
              </Button>
            ))}
          </LinkGroup>
          <LinkGroup>
            <p>Work</p>
            {data.gcms.work.map((link, index) => (
              <Button
                as="a"
                target="_blank"
                variant="link"
                href={link.slug}
                rel="noopener noreferrer"
                leftIcon={link.iconName}
                key={index}
              >
                {link.name}
              </Button>
            ))}
          </LinkGroup>
        </Flex>
      </Footer>
    )}
  />
)
