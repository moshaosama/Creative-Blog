import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="bg-[#212529] p-10 flex justify-center max-sm:justify-between items-center">
        <h1 className="text-white text-xl max-sm:text-sm">
          Copyright & Copy :{" "}
          <span className="text-[#ffc107]">Mohamed Osama</span>
        </h1>
        <div
          className="absolute right-10 cursor-pointer "
          onClick={() => handleClick()}
        >
          <FaArrowCircleUp
            className="text-blue-500 text-5xl hover:text-blue-400 max-sm:text-3xl cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
