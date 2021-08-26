import React from "react"
import { FooterWrapper } from "./styles"
import { Link } from "gatsby"

export function Footer() {
	return (
		<FooterWrapper id="Footer">
			<div className="Container">
				<div>
					<h3>My Logo</h3>
					<p>Initially created to fight my own imposter syndrome. </p>
				</div>
				<ul className="footer-link">
					<li className="head">Pages</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/start-here">New? Start here</Link>
					</li>
				</ul>
				<ul className="footer-link">
					<li className="head">Others</li>
					<li>Templates (coming soon)</li>
				</ul>
				<div>
					<iframe
						className="form"
						src="https://tally.so/embed/wg5Dlm?hideTitle=1&alignLeft=1&transparentBackground=1"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
						title="Subcribe"
					></iframe>
					<p>Or follow me on twitter for instant updates</p>
				</div>
			</div>
		</FooterWrapper>
	)
}
