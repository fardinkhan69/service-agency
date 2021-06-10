import React from "react";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
          <h2>Solver Agency</h2>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 cursor-pointer hover:text-gray-900">Home</a>
            <a class="mr-5 cursor-pointer hover:text-gray-900">Blog</a>
            <a class="mr-5 cursor-pointer hover:text-gray-900">Services</a>
            <a class="mr-5 cursor-pointer hover:text-gray-900">Contact Us</a>
          </nav>
          <button class="inline-flex items-center bg-purple-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Book Now
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
