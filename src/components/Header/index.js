import React, { useState } from "react";
import { Link } from "gatsby";
import { HeaderWrapper, LogoWrapper } from "./styles";
import { Menu } from "../Menu";
import { Hamburger } from "../Hamburger";
import { MobileMenu } from "../MobileMenu";
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery";
import Logo from "../../images/logo.png";

export function Header({ page }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const siteConfig = useSiteConfigQuery();
	return (
		<HeaderWrapper menuOpen={menuOpen}>
			<div className="Container">
				<Link to="/" id="logo">
					<LogoWrapper src={Logo} alt="Logo" />
				</Link>
				<MobileMenu
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					items={siteConfig}
				/>
				<Menu items={siteConfig} />
				<Hamburger
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					id="Hamburger"
				/>
			</div>
		</HeaderWrapper>
	);
}
