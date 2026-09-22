"use client";

import { useState } from "react";
import Image from "next/image";
import { useNavigation } from "../hooks/useNavigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    handleHomeClick,
    handleAboutClick,
    handleSkillsClick,
    handlePortfolioClick,
  } = useNavigation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (clickHandler: () => void) => {
    clickHandler();
    closeMenu(); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#bbb7ae] bg-[#e8e5df]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <button
          aria-label="Go to homepage"
          className="flex items-center transition-transform hover:scale-105"
          onClick={() => handleNavigation(handleHomeClick)}
        >
         <Image
  src="/imole1.png"
  alt="Built by Imole"
  width={160}
  height={64}
  priority
  className="h-10 rounded-sm w-auto sm:h-12 object-contain"
/>
        </button>

        <ul className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-6 border-b border-[#bbb7ae] bg-[#e8e5df] px-6 py-6 font-mono text-lg uppercase tracking-[0.2em] sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:border-0 sm:bg-transparent sm:p-0`}>
          <li>
            <button
              className="transition-colors hover:text-[#FFB400]"
              onClick={() => handleNavigation(handleHomeClick)}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="transition-colors hover:text-[#FFB400]"
              onClick={() => handleNavigation(handleAboutClick)}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="transition-colors hover:text-[#FFB400]"
              onClick={() => handleNavigation(handleSkillsClick)}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="transition-colors hover:text-[#FFB400]"
              onClick={() => handleNavigation(handlePortfolioClick)}
            >
              Portfolio
            </button>
          </li>
        </ul>

        <div
          role="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          tabIndex={0}
          className="flex cursor-pointer flex-col gap-1.5 sm:hidden"
          onClick={toggleMenu}
        >
          <span className="h-px w-6 bg-[#151515]"></span><span className="h-px w-6 bg-[#151515]"></span><span className="h-px w-6 bg-[#151515]"></span>
        </div>
      </div>
    </nav>
  );
}
