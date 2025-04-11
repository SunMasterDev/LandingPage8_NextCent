import { useState } from "react";
import Logo from "../assets/img/logo-black.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  //ทำ toggle
  const updateToggle = () => {
    setToggle(!toggle);
  };
  return (
   // parent element
    <nav className="bg-[#F5F7FA]">
      {/* container */}
      <div
        className="container mx-auto max-w-[1320px] 
      relative h-auto p-10 flex flex-col
      md:flex-row md:justify-between md:items-center md:h-[80px]"
      >
        {/* 1 logo */}
        <div>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        {/* 2 menu */}
        <ul
          className={`${!toggle ? "hidden" : "flex"} flex flex-col md:flex 
          md:flex-row justify-center items-center my-5 gap-2  md:gap-6`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        {/* 3 button */}
        <ul
          className={`${!toggle ? "hidden" : "flex"} flex flex-col gap-2 
           md:flex md:flex-row md:gap-4
           justify-center items-center `}
        >
          <li>
            <a
              href="#"
              className="inline-flex justify-center items-center 
              py-2 px-4 
              text-[#4caf4f]
              "
            >
              Log In
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex justify-center 
              items-center 
              py-2 px-4 bg-[#4caf4f]
              text-white rounded-md
              "
            >
              Sign Up
            </a>
          </li>
        </ul>
        {/* Hambuger Icon มือถือ */}
        <FaBars
          onClick={updateToggle}
          className="absolute right-5 cursor-pointer text-xl md:hidden"
        />
      </div>
    </nav>
  );
};
export default Navbar;
