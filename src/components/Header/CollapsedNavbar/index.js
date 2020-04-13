import React, { useState, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutSide";
import Burger from "./Burguer";
import Menu from "./Menu";

export default function CollapsedNavbar(props) {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} {...props} />
    </div>
  );

  // return (
  //   <Menu right pageWrapId={"id"} outerContainerId={"root"} width={280}>
  //     <Brand>
  //       <NavLink to="/" isActive={matchesLocation(brand)}>
  //         PET-MAT
  //       </NavLink>
  //     </Brand>
  // {navigationItems.map((item) => (
  //   <ListItem key={item.path}>
  //     <NavLink to={item.path} isActive={matchesLocation(item.path)}>
  //       {item.title}
  //     </NavLink>
  //   </ListItem>
  // ))}
  //     <About>
  //       <NavLink to={about.path} isActive={matchesLocation(about)}>
  //         Sobre
  //       </NavLink>
  //     </About>
  //   </Menu>
  // );
}
