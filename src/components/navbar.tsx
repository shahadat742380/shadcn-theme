import React from "react";
import { Toggle } from "./toggle";
import Link from "next/link";

interface NavLink {
  link: string;
  href: string;
}

const Navbar = () => {
  const navLinks: NavLink[] = [
    {
      link: "Home",
      href: "/",
    },
    {
      link: "About",
      href: "/about",
    },
    {
      link: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="bg-white py-5 shadow-lg dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div>
          <h1 className="text-black dark:text-white font-semibold text-2xl">
            Logo
          </h1>
        </div>
        <div>
          <ul className="flex gap-8">
            {navLinks?.map((nav, idx) => (
              <li key={idx}>
                <Link
                  href={nav.href}
                  className="text-gray-900 dark:text-gray-200"
                >
                  {nav.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
