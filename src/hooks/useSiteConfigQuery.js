import { useStaticQuery, graphql } from "gatsby";

export const useSiteConfigQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allSiteconfigJson {
				nodes {
					id
					name
					link
				}
			}
		}
	`);
	return data.allSiteconfigJson.nodes;
};
