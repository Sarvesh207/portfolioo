import React from "react";

function Header() {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur">
        <a
          href=""
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-serif hover:bg-white/10 hover:text-white "
        >
          Home
        </a>
        <a
          href=""
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-serif hover:bg-white/10 hover:text-white"
        >
          Projects
        </a>
        <a
          href=""
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-serif hover:bg-white/10 hover:text-white"
        >
          About
        </a>
        <a
          href=""
          className="px-4 py-1.5 rounded-full text-white/70 text-sm font-serif bg-white text-gray-900 hover:bg-white/10 hover:text-white"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
