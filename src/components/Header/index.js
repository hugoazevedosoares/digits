import React from "react";
import Navbar from "./Navbar";
import CollapsedNavbar from "./CollapsedNavbar";
import Media from "react-media";

const brand = {
  title: "Dígitos verificadores",
  path: "/",
};

const navigationItems = [
  {
    title: "CPF",
    path: "/cpf",
  },
  {
    title: "ISBN (EM BREVE)",
    path: "/isbn",
    disabled: true,
  },
  {
    title: "Código de barras (EM BREVE)",
    path: "/barcode",
    disabled: true,
  },
];

const about = {
  title: "Sobre",
  path: "/about",
};

function matchesLocation({ path }) {
  return (match, location) => location === path;
}

const props = {
  brand,
  navigationItems,
  about,
  matchesLocation,
};

export default function Header() {
  return (
    <Media query="(max-width: 900px)">
      {(matches) =>
        matches ? <CollapsedNavbar {...props} /> : <Navbar {...props} />
      }
    </Media>
  );
}
