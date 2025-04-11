import HeaderImg from "../assets/img/header-img.png";
import rightIcon from "../assets/img/Arrows & Directions/Right.png"

const Header = () => {
  return (
    // parent element
    <div className="bg-[#F5F7FA] h-auto md:h-[37.5rem] 
    flex items-center">
        {/* container */}
      <div className="container mx-auto 
      max-w-[1320px] p-10 flex flex-col 
      md:flex-row md:justify-between 
      md:items-center md:p-0">
        {/* 1 */}
        <div>
          <h1
            className="text-[4rem] leading-[1]
                font-semibold text-[#4D4D4D]"
          >
            Lessons and insights
            <br /> <span className="text-[#4CAF4F]">from 8 years</span>
          </h1>
          <p className="text-[#717171] mt-5">
            Where to grow your business as a photographer: site or social media?
          </p>
          <a
            href="#"
            className="inline-flex justify-center 
              items-center 
              py-3 px-8 mt-10 bg-[#4caf4f]
              text-white rounded-md
             "
          >
            Register
            <img src={rightIcon} alt="icon-right"  />
          </a>
        </div>
        {/* 2 */}
        <div>
            <img src={HeaderImg} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Header;
