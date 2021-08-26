const path = require("path")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        pages: allGraphCmsTest(
          sort: { order: ASC, fields: testquestions___test___publishedAt }
        ) {
          nodes {
            id
            slug
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.pages.nodes.forEach(page => {
    createPage({
      component: path.resolve("./src/templates/test.js"),
      context: {
        id: page.id,
        page,
      },
      path: `/tests/${page.slug}`,
    })
  })
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "develop-html" || stage === "build-html") {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ["main"],
      },
    })
  } else {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ["browser", "module", "main"],
      },
    })
  }
}
