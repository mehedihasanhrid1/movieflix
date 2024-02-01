import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);



  const navlist = (
    <>
     <Link to="/">Home</Link>
     <li>Shows</li>
     <li>Live</li>
     <li>Ticket</li>
     <Link to="/bookings">Bookings</Link>
    </>
  );

  return (
    <section className="shadow-md bg-blue-100">
      <div className="px-4 md:px-5">
        <nav className="flex items-center justify-between py-4">
          <a
            href="#"
            className="text-[26px] md:text-3xl font-semibold leading-none text-gray-800"
          >
            Movie<span className="text-red-500">Flix</span>
          </a>
          <ul className="hidden lg:w-auto lg:space-x-6 lg:items-center lg:flex text-lg font-medium text-gray-700 ml-7 cursor-pointer">
              {navlist}
            </ul>
          <div className="flex justify-between items-center flex-row-reverse lg:flex-row lg:space-x-2">
            <div className="lg:hidden">
              <button
                className="flex items-center px-3 py-2 text-red-500 border border-red-200  rounded hover:text-red-600 hover:border-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block">

                  <a href="#">
                    <button className="inline-block px-5 py-3 mr-4  font-semibold leading-none text-red-500 border border-red-500 rounded hover:text-red-400 hover:border-red-400">
                      Log In
                    </button>
                  </a>
                  <a href="#">
                    <button className="inline-block px-5 py-3 mr-2 font-semibold leading-none text-gray-100 bg-red-500 hover:bg-red-400 border border-gray-100 rounded">
                      Register
                    </button>
                  </a>
               
            </div>
          </div>
        </nav>
        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-900 opacity-25 lg:hidden ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        ></div>
        <div
          className={`absolute inset-0 z-50 h-screen p-3 duration-500 transform bg-red-50 w-80 lg:hidden lg:transform-none lg:relative ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        >
          <div className="flex justify-between">
            <a className="p-2 text-2xl font-bold" href="#">
              Movie<span className="text-red-500">Flix</span>
            </a>
            <button
              className="p-2 text-red-500 rounded-md hover:text-red-300 lg:hidden"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <ul
            className="px-4 text-left mt-4 font-medium md:text-lg flex flex-col items-start gap-3"
            onClick={() => setOpen(false)}
          >
            {navlist}
          </ul>
              <div className="block mt-5 lg:hidden px-5">
                <a href="#">
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center text-gray-100 bg-red-500 hover:bg-red-400 rounded-full"
                  >
                    Login
                  </button>
                </a>
              </div>
              <div className="block mt-3 lg:hidden px-5">
                <a href="#">
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center border rounded-full hover:text-white bg-red-500 text-gray-100 hover:bg-red-400 border-gray-100"
                  >
                    Register
                  </button>
                </a>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
