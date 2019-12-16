import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  defaultTitle = `Kenna's Portfolio`,
  ogImage,
  ogUrl,
  title,
  children,
}) {
  const {
    site: {
      siteMetadata: {
        description: siteDescription,
        ogImage: siteOgImage,
        siteUrl,
        title: siteTitle,
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            ogImage
            siteUrl
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      defaultTitle={defaultTitle}
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kenna's Portfolio" />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        name="twitter:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content={ogImage || siteOgImage} />
      <meta property="og:url" content={ogUrl || siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kenzsmutz" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:image" content={ogImage || siteOgImage} />
      {children}
    </Helmet>
  )
}

export default SEO
