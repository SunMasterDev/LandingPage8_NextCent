import {
  FaRegPaperPlane,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logoWhite from "../assets/img/logo-white.png";

const Footer = () => {
  return (
    <div className="bg-[#263238] py-20">
      {/* container */}
      <div className="container mx-auto max-w-[1320px]">
        {/* 1 */}
        <div className="grid grid-cols-1 m-10 md:m-0 md:grid-cols-2">
          <div>
            <img src={logoWhite} alt="logoWhite" />
            <p className="my-10 text-white">
              Copyright © 2020 Landify UI Kit. <br />
              All rights reserved
            </p>
            <ul className="flex md:flex-row">
              <li className="mr-[1rem]">
                <a href="#" className="text-white text-[1.5rem]">
                  <FaInstagram />
                </a>
              </li>
              <li className="mr-[1rem]">
                <a href="#" className="text-white text-[1.5rem]">
                  <FaDribbble />
                </a>
              </li>
              <li className="mr-[1rem]">
                <a href="#" className="text-white text-[1.5rem]">
                  <FaTwitter />
                </a>
              </li>
              <li className="mr-[1rem]">
                <a href="#" className="text-white text-[1.5rem]">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          {/* 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:mt-0">
            <div>
              <h4 className="text-[1.25rem] text-white font-semibold">Company</h4>
              <ul className="flex flex-col mb-5">
                <li className="mt-2">
                  <a href="#" className="text-white text-[0.875rem]">About us</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-white text-[0.875rem]">Blog</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-white text-[0.875rem]">Contact us</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-white text-[0.875rem]">Pricing</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-white text-[0.875rem]">Testimonials</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[1.25rem] text-white font-semibold">Support</h4>
              <ul className="flex flex-col mb-5">
                <li className="mt-2">
                  <a href="#"className="text-white text-[0.875rem]">Help center</a>
                </li>
                <li className="mt-2">
                  <a href="#"className="text-white text-[0.875rem]">Terms of service</a>
                </li>
                <li className="mt-2">
                  <a href="#"className="text-white text-[0.875rem]">Legal</a>
                </li>
                <li className="mt-2">
                  <a href="#"className="text-white text-[0.875rem]">Privacy policy</a>
                </li>
                <li className="mt-2">
                  <a href="#"className="text-white text-[0.875rem]">Status</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[1.25rem] text-white font-semibold">Stay up to date</h4>
              <form className="flex mt-5">
                {/* position relative เพราะว่า div parent element กล่อง input*/}
                <div className="relative"> 
                  <input type="text" placeholder="Your email address" 
                  className="bg-white/20 text-white text-[0.875rem] px-4 py-2 rounded-md"/>
                  <button type="submit" className="absolute top-[10px] right-[10px] cursor-pointer">
                    <FaRegPaperPlane className="text-white"/>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
