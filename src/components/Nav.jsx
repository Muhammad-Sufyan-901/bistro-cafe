import React from "react";

function Nav({ navData }) {
  return (
    <nav className="w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-6">
        {navData.map(({ href, name }, index) => (
          <li key={index}>
            <a
              href={href}
              className="text-xl capitalize font-primary italic hover:text-dark transition-all duration-300"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
