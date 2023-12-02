import React from "react";

const Footer = () => {
  return (
    <footer class="shadow-lg shadow-black p-7">
      <div class="container  mx-auto  ">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo/logo.png" class="h-12" alt="Flowbite Logo" />
          </a>
          <ul class="flex flex-wrap items-center mb-6  font-medium text-black sm:mb-0 dark:text-black">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block  text-black text-center dark:text-black">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Car Rental™
          </a>
          . Made by Jatin Bhandari 🧑‍💻
        </span>
      </div>
    </footer>
  );
};

export default Footer;
