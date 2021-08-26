import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Footer, New, NewUserTest } from "../components"

const StartHere = ({ data }) => {
	const [selectedRole, setSelectedRole] = useState(null)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	return (
		<Layout>
			<SEO
				title="New to the product manager tests?"
				description="Product manager tests"
				image={data.file.childrenImageSharp[0].resize}
				pathname="home"
			/>
			<New
				setSelectedRole={setSelectedRole}
				setSelectedAnswer={setSelectedAnswer}
			/>
			{selectedRole && (
				<NewUserTest
					selectedRole={selectedRole}
					selectedAnswer={selectedAnswer}
					setSelectedAnswer={setSelectedAnswer}
				/>
			)}
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
export default StartHere
