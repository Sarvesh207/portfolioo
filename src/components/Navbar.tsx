import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      
    },
    {
      name: "About",
      link: "/about",
      
    },
    {
      name: "Contact",
      link: "/contact",
      
    },
  ];
  return <div>
          <FloatingNav navItems={navItems} />

  </div>;
}

export default Navbar;
