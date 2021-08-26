import { useStaticQuery, graphql } from "gatsby"

export const useTestsQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allGraphCmsTest {
				nodes {
					title
					description
					slug
					coverImage {
						url
						fileName
					}
					testquestions {
						questionString
						answers
					}
				}
			}
		}
	`)
	return data.allGraphCmsTest.nodes
}
