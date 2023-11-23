import React from "react";

export const Navbar = () => {
  return (
    <header className="container">
      <nav
        className="flex flex-row m-5
       justify-between items-center"
      >
        <img
          className="max-w-[10%] max-h-[10%]"
          src="/public/logo/logo.png"
          alt="brand-logo"
        />
        <ul className="flex flex-row gap-4 ">
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
              Vechile Models
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
        <ul className="gap-4 md:hidden lg:block lg:flex  lg:flex-row">
          <li>
            <a className="font-bold " href="#">
              Sign In
            </a>
          </li>
          <li>
            <a
              className="font-bold px-10 py-4 bg-[#ff4d30] rounded-md"
              href="btn-primary "
            >
              Register
            </a>
          </li>
        </ul>
        <div className="block lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="tabler-icon tabler-icon-menu-2"
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
