import React from "react";
import Navbar from "./Navbar";
import CollapsedNavbar from "./CollapsedNavbar";
import Media from "react-media";

const brand = {
  title: "PET-MAT UFOP",
  path: "/",
};

const navigationItems = [
  {
    title: "CPF",
    path: "/cpf",
  },
  {
    title: "Cartão de crédito",
    path: "/credit",
  },
  {
    title: "Código de barras",
    path: "/barcode",
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
