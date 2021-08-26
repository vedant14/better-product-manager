import { useStaticQuery, graphql } from "gatsby"

export const useSiteConfigQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allSiteconfigJson {
				nodes {
					name
					link
				}
			}
		}
	`)
	return data.allSiteconfigJson.nodes
}
