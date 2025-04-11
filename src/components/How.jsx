import img02 from "../assets/img/img-02.png";

const How = () => {
  return (
    <div className="py-10 ">
      {/* container */}
      <div
        className="container mx-auto max-w-[1320px] p-10 
          grid md:grid-cols-2"
      >
        {/* 1 */}
        <div>
          <img src={img02} alt="img-01-pixel" />
        </div>
        {/* 2 */}
        <div>
          <h3
            className="mt-5 md:mt-0 text-[2.25rem] 
          font-semibold text-[#4D4D4D]"
          >
            How to design your site footer like <br /> we did
          </h3>
          <p className="my-5 text-[#717171]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
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
export default How;
