import React from "react"
import { Nav } from "./styles"
import { Link } from "gatsby"

export function Menu({ items }) {
	return (
		<Nav>
			{items.map(item => (
				<li key={item.id}>
					<Link to={item.link}>{item.name}</Link>
				</li>
			))}
		</Nav>
	)
}
