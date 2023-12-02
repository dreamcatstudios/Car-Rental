import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container">
      <nav className="flex flex-row mt-6 m-5 sm:m-8 justify-between items-center">
        <img
          className="max-w-[30%] sm:max-w-[20%] md:max-w-[10%]"
          src="/logo/logo.png"
          alt="brand-logo"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-row gap-4">
          <li>
            <a className="font-bold  hover:text-[#ff4d30]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-bold  hover:text-[#ff4d30]" href="#">
              About
            </a>
          </li>
          <li>
            <a className="font-bold  hover:text-[#ff4d30]" href="#">
              Vehicle Models
            </a>
          </li>
          <li>
            <a className="font-bold  hover:text-[#ff4d30]" href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-[#ff4d30]" href="#">
              Our Team
            </a>
          </li>
          <li>
            <a className="font-bold  hover:text-[#ff4d30]" href="#">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-menu-2"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 right-0 bg-white w-screen h-screen shadow-md z-[999]">
            <ul className="flex w-full h-full flex-col gap-7 items-center justify-center">
              <li>
                <a
                  onClick={toggleMenu}
                  className="font-bold hover:text-[#ff4d30] text-4xl"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMenu}
                  className="font-bold hover:text-[#ff4d30] text-4xl"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMenu}
                  className="font-bold hover:text-[#ff4d30] text-4xl"
                  href="#"
                >
                  Vehicle Models
                </a>
              </li>

              <li>
                <a
                  onClick={toggleMenu}
                  className="font-bold hover:text-[#ff4d30] text-4xl"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
