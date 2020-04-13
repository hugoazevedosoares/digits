import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, Navigation } from "./styles";

export default function Navbar({
  matchesLocation,
  brand,
  navigationItems,
  about,
}) {
  return (
    <List>
      <ListItem>
        <NavLink to="/" isActive={matchesLocation(brand)}>
          {brand.title}
        </NavLink>
      </ListItem>
      <Navigation>
        <List>
          {navigationItems.map((item) => (
            <ListItem
              key={item.path}
              className={item.disabled ? "inner-link-holder--disabled" : ""}
            >
              <NavLink to={item.path} isActive={matchesLocation(item.path)}>
                {item.title}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Navigation>
      <ListItem>
        <NavLink to={about.path} isActive={matchesLocation(about)}>
          {about.title}
        </NavLink>
      </ListItem>
    </List>
  );
}
