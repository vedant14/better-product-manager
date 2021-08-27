import React, { useState, useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
	Layout,
	SEO,
	Hero,
	NewUserTest,
	WhyTests,
	Footer,
} from "../components";
import { Link } from "gatsby";
import { UserContext } from "../context/UserProvider";

const FirstTestPage = () => {
	const [user] = useContext(UserContext);
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
			<Hero text="Hi fellow product person" boldText="Are you.." />
			<NewUserTest />
			<Footer />
		</Layout>
	);
};

export default FirstTestPage;
