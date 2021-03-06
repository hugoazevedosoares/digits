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
}
