import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, Brand, Navigation, About } from "./styles";

export default function Navbar({
  matchesLocation,
  brand,
  navigationItems,
  about,
}) {
  return (
    <List>
      <Brand>
        <NavLink to="/" isActive={matchesLocation(brand)}>
          PET-MAT
        </NavLink>
      </Brand>
      <Navigation>
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.path}>
              <NavLink to={item.path} isActive={matchesLocation(item.path)}>
                {item.title}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Navigation>
      <About>
        <NavLink to={about.path} isActive={matchesLocation(about)}>
          Sobre
        </NavLink>
      </About>
    </List>
  );
}
