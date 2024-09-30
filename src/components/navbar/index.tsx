"use client";

import siteConfig from "@/site.config.json";
import { cn } from "@utils/cn";
import Link from "next/link";
import { useCallback, useState } from "react";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto px-4 lg:max-w-2xl">
        <div className="flex flex-col items-center backdrop-blur-xl backdrop-filter bg-primary-900/60 border border-primary-800 md:flex-row md:items-center md:justify-between mx-auto p-2 md:p-4 relative lg:rounded-2xl rounded-xl shadow-md shadow-emerald-200/10 w-full">
          <div className="w-full items-center flex flex-row justify-between md:justify-start">
            <Link
              className="text-white font-semibold inline-flex text-sm items-center font-display pl-2 hover:text-white/50"
              href="/#about"
            >
              {siteConfig.title}
            </Link>

            <button
              onClick={toggleMenu}
              className="text-zinc-400 inline-flex focus:outline-none focus:text-white hover:text-accent-300 items-center justify-center md:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          <nav
            className={cn(
              `flex-col md:flex-row flex-grow flex justify-center md:flex items-center`,
              !isOpen && "!hidden md:!flex"
            )}
          >
            <ul className="mt-5 md:mt-0 items-center gap-2 justify-center list-none md:inline-flex md:ml-auto md:space-y-0 md:text-left space-y-2 text-center">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="px-2 text-sm text-white hover:text-secondary-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
