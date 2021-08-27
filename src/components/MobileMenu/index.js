import React from "react";
// Styles
import { OverrideGlobalStyle, NavScroll, Wrapper } from "./styles";

export function MobileMenu({ menuOpen, items, setMenuOpen }) {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <NavScroll>
          {items.map((item) => (
            <a key={item.id} href={`#${item.link}`}>
              <li onClick={() => setMenuOpen(false)}>{item.name}</li>
            </a>
          ))}
        </NavScroll>
      </Wrapper>
    </>
  );
}
