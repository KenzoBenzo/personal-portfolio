require("dotenv").config({
  path: `.env.local`,
})

const siteUrl = `https://kenna.xyz`

module.exports = {
  siteMetadata: {
    title: `Makenna's Portfolio`,
    description: `As a place to currate design and code acomplishments in my career, I've built this portfolio. The stack is Gatsby and GraphCMS. Email me makennasmutz@gmail.com`,
    author: `Makenna Smutz <makennasmutz@gmail.com>`,
    siteUrl,
    ogImage: `https://media.graphcms.com/h3X21pTS7mfTghpu5Cow`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "gcms",
        url:
          "https://api-euwest.graphcms.com/v1/ck0qlr3qr1fdt01cp5pkp0qg2/master",
        headers: {
          Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kennas-personal-portfolio`,
        short_name: `Makenna Smutz`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#9F00FF`,
        display: `minimal-ui`,
        icon: `src/static/kennaFavicon.png`,
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token:
          "15857a7dff290d186214cbde2043338fadb5ecd69ef5ae99e6417262bc54f966",
      },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: `${process.env.FULLSTORY_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TOKEN}`,
        head: true,
        anonymize: true,
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layouts/docsLayout.jsx"),
        },
      },
    },
  ],
}
