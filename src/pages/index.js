import React, { useState, useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Layout,
  SEO,
  Hero,
  FirstTestCard,
  WhyTests,
  Footer,
} from "../components";
import { Link } from "gatsby";
// import { UserContext } from "../context/UserProvider";

const IndexPage = () => {
  // const [user] = useContext(UserContext);
  const image = useStaticQuery(graphql`
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
  `);

  return (
    <Layout>
      <SEO
        title="Product manager tests"
        description="Product manager tests"
        image={image.file.childrenImageSharp[0].resize}
        pathname="home"
      />
      <Hero
        text="The most fun way to become"
        boldText="a better product manager"
      />
      <FirstTestCard />
      <WhyTests />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
