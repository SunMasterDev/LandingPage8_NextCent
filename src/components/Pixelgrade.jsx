import img01 from "../assets/img/img-01.png";

const Pixelgrade = () => {
  return (
    <div className="py-10 ">
      {/* container */}
      <div className="container mx-auto max-w-[1320px] p-10 
      grid md:grid-cols-2">
        {/* 1 */}
        <div>
          <img src={img01} alt="img-01-pixel" />
        </div>
        {/* 2 */}
        <div>
          <h3 className="mt-5 md:mt-0 text-[2.25rem] 
          font-semibold text-[#4D4D4D]">The unseen of spending three <br /> years at Pixelgrade</h3>
          <p className="my-5 text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          {/* 3 */}
          <a
            href="#"
            className="inline-flex justify-center 
              items-center 
              py-3 px-8 mt-5 bg-[#4caf4f]
              text-white rounded-md
             "
          >
            Lean More
          </a>
        </div>
      </div>
    </div>
  );
};
export default Pixelgrade;
