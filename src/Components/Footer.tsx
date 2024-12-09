import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#212529] p-10 flex justify-center items-center">
        <h1 className="text-white text-xl">
          Copyright & Copy :{" "}
          <span className="text-[#ffc107]">Mohamed Osama</span>
        </h1>
        <div className="absolute right-10 cursor-pointer ">
          <FaArrowCircleUp className="text-blue-500 text-5xl hover:text-blue-400" />
        </div>
      </div>
    </>
  );
};

export default Footer;
