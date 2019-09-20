import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

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
  p {
    font-family: "Victor Mono";
    font-style: italic;
    font-weight: 700;
    color: #f4cbc3;
    text-decoration: underline;
  }
  a {
    color: inherit;
    text-decoration: none;
    display: block;
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
        <LinkGroup>
          <p>Social</p>
          {data.gcms.social.map((link, index) => (
            <a
              href={link.slug}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {/* {iconName ? <img src={link.iconName} /> : null} */}
              {link.name}
            </a>
          ))}
        </LinkGroup>
        <LinkGroup>
          <p>Contact</p>
          {data.gcms.contact.map((link, index) => (
            <a
              href={link.slug}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {/* {iconName ? <img src={link.iconName} /> : null} */}
              {link.name}
            </a>
          ))}
        </LinkGroup>
        <LinkGroup>
          <p>Work</p>
          {data.gcms.work.map((link, index) => (
            <a
              href={link.slug}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {/* {iconName ? <img src={link.iconName} /> : null} */}
              {link.name}
            </a>
          ))}
        </LinkGroup>
      </Footer>
    )}
  />
)
