const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        gcms {
          portfolioWorks {
            title
            slug
            summary
            type
            body {
              markdown
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const projectTemplate = path.resolve(
    `./src/components/templates/projectTemplate.jsx`
  )
  result.data.gcms.portfolioWorks.forEach(project => {
    createPage({
      path: `/projects/${project.slug}/`,
      component: projectTemplate,
      context: {
        project,
      },
    })
  })
}
