import React, { useState, useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout, SEO, Hero, AllTests, WhyTests, Footer } from "../components";
import { Link } from "gatsby";
// import { UserContext } from "../context/UserProvider";

const ExplorePage = () => {
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
				text="Hi curious mind"
				boldText="These are all the tests we have"
			/>
			<AllTests hide={false} />
			<Footer />
		</Layout>
	);
};

export default ExplorePage;
