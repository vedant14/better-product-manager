import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const FooterWrapper = styled.div`
	background: ${colors.white};
	margin-top: 100px;
	overflow: hidden;
	padding: 30px auto;
	> div {
		display: grid;
		grid-template-columns: 1fr;
		@media screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		margin-top: 50px;
		margin-bottom: 100px;
	}
	.footer-link {
		list-style-type: none;
		padding-inline-start: 0px;

		> li > a {
			color: ${colors.washedBlack};
			border-bottom: 3px solid #f2c94c;
		}
	}
	.head {
		font-weight: 600;
		font-size: 24px;
		line-height: 30px;
		color: ${colors.primaryBlack};
	}
	.form {
		height: 250px;
		@media screen and (min-width: 768px) {
			height: 230px;
		}
	}
`
