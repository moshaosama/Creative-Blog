import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#212529] py-5 sticky top-0 z-50">
      <div className="flex justify-between items-center mx-72 max-sm:mx-10">
        <div>
          <h1 className="text-xl font-bold text-white">Be Creative</h1>
        </div>
        <div className="sm:hidden">
          <FaBars className="text-white text-2xl " />
        </div>
        <div className="flex gap-3 text-[#ffffff8c] max-sm:hidden">
          <a href="#Learn" className="hover:text-[#807c7c8c]">
            Learn
          </a>
          <a href="#Question" className="hover:text-[#807c7c8c]">
            Questions
          </a>
          <a href="#About" className="hover:text-[#807c7c8c] scroll-smooth">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
