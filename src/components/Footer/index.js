import React from "react";
import { FooterWrapper, LogoWrapper } from "./styles";
import { Link } from "gatsby";
import Logo from "../../images/logo.png";

export function Footer() {
	return (
		<FooterWrapper id="Footer">
			<div className="Container">
				<div>
					<LogoWrapper src={Logo} alt="logo" />
					<p>Initially created to fight my own imposter syndrome. </p>
				</div>
				<ul className="footer-link">
					<li className="head">Pages</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/first-test">New? Start here</Link>
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
						frameBorder="0"
						marginHeight="0"
						marginWidth="0"
						title="Subcribe"
					></iframe>
					<p>Or follow me on twitter for instant updates</p>
				</div>
			</div>
		</FooterWrapper>
	);
}
