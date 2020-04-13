import React from "react";
import { NavLink } from "react-router-dom";
import { StyledMenu } from "./styles";

export default function Menu({
  open,
  setOpen,
  navigationItems,
  matchesLocation,
  brand,
  about,
}) {
  return (
    <StyledMenu open={open}>
      <NavLink
        onClick={() => setOpen(false)}
        to={brand.path}
        isActive={matchesLocation(brand.path)}
      >
        {brand.title}
      </NavLink>
      {navigationItems.map((item) => (
        <NavLink
          onClick={() => setOpen(false)}
          key={item.path}
          to={item.path}
          isActive={matchesLocation(item.path)}
        >
          {item.title}
        </NavLink>
      ))}
      <NavLink
        onClick={() => setOpen(false)}
        to={about.path}
        isActive={matchesLocation(about.path)}
      >
        {about.title}
      </NavLink>
    </StyledMenu>
  );
}
