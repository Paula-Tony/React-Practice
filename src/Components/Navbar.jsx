import { useState } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 start-0 end-0 flex items-center text-white justify-between p-4 bg-midnightBlue">
      <NavLink className={`text-2xl font-bold cursor-pointer uppercase`} to="/">
        Start Framework
      </NavLink>
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars fa-lg"></i>
      </button>
      <div
        className={`sm:flex absolute z-30 sm:relative top-full sm:top-auto left-0 right-0 sm:right-auto bg-midnightBlue sm:bg-transparent overflow-hidden transition-all duration-500 ease-linear ${
          isOpen ? "max-h-96" : "max-h-0 sm:max-h-96"
        }`}
      >
        <ul className={`flex flex-col sm:flex-row sm:gap-4 px-4 pb-4 sm:p-0`}>
          <li className="mb-4 sm:mb-0">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-caribbeanGreen rounded-md" : ""
                } font-bold cursor-pointer block px-2`
              }
              to="/about"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </NavLink>
          </li>
          <li className="mb-4 sm:mb-0">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-caribbeanGreen rounded-md" : ""
                } font-bold cursor-pointer block px-2`
              }
              to="/portfolio"
              onClick={() => setIsOpen(!isOpen)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-caribbeanGreen rounded-md" : ""
                } font-bold cursor-pointer block px-2`
              }
              to="/contact"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
