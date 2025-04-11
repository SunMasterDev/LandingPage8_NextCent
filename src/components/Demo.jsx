import { HiOutlineArrowRight } from "react-icons/hi";

const Demo = () => {
  return (
    <div className="bg-[#F5F7FA] py-10 flex justify-center text-center">
      <div className="">
        <h3 className="text-[#263238] text-[4rem] font-semibold leading-[1]">
          Pellentesque suscipit fringilla <br /> libero eu.
        </h3>
        <a
          href="#"
          className=" bg-[#4caf4f]
              text-white rounded-md
              inline-flex justify-center 
              items-center 
              py-3 px-8 mt-5"
        >
          Get a Demo <HiOutlineArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};
export default Demo;
