import React from "react";

export const Navbar = () => {
  return (
    <header className="container">
      <nav className="flex flex-row m-5 justify-between items-center">
        <img
          className="max-w-[30%] max-h-[30%] sm:max-w-[10%] sm:max-h-[10%]"
          src="/public/logo/logo.png"
          alt="brand-logo"
        />
        <ul className="hidden md:flex flex-row gap-4">
          <li>
            <a className="font-bold " href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-bold " href="#">
              About
            </a>
          </li>
          <li>
            <a className="font-bold " href="#">
              Vehicle Models
            </a>
          </li>
          <li>
            <a className="font-bold " href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a className="font-bold " href="#">
              Our Team
            </a>
          </li>
          <li>
            <a className="font-bold " href="#">
              Contact
            </a>
          </li>
        </ul>
        <ul className="hidden md:flex gap-4">
          <li>
            <a className="font-bold " href="#">
              Sign In
            </a>
          </li>
          <li>
            <a
              className="font-bold px-10 py-4 bg-[#ff4d30] rounded-md text-white"
              href="btn-primary "
            >
              Register
            </a>
          </li>
        </ul>
        <div className="block md:hidden">
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
        </div>
      </nav>
    </header>
  );
};
