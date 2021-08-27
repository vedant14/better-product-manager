import { useStaticQuery, graphql } from "gatsby";

export const useTestsQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allGraphCmsTest {
				nodes {
					id
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
	`);
	return data.allGraphCmsTest.nodes;
};
