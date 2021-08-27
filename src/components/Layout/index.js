import React from "react";
import { LayoutWrapper } from "./styles";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Header } from "../Header";
export function Layout({ children }) {
	return (
		<LayoutWrapper>
			<Header />
			<GlobalStyles />
			<main>{children}</main>
		</LayoutWrapper>
	);
}
