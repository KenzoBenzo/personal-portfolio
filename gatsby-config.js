module.exports = {
  siteMetadata: {
    title: `Makenna's Portfolio`,
    description: `As a place to currate design and code acomplishments in my career, I've built this portfolio. The stack is Gatsby and GraphCMS. Email me makennasmutz@gmail.com`,
    author: `Makenna Smutz @kenzsmutz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F6FAFF`,
        theme_color: `#03005C`,
        display: `minimal-ui`,
        icon: `src/images/kennaFavicon.png`,
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        // You can get your Access Token by following this tutorial: http://developer.dribbble.com/v2/oauth/
        access_token:
          "15857a7dff290d186214cbde2043338fadb5ecd69ef5ae99e6417262bc54f966",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
