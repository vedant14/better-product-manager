import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Hero, AllTests, Footer } from "../components"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Product manager tests"
        description="Product manager tests"
        image={data.file.childrenImageSharp[0].resize}
        pathname="home"
      />
      <Hero />
      <AllTests hide={false} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    file(name: { eq: "social-card-twitter" }) {
      name
      childrenImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
  }
`
export default IndexPage
