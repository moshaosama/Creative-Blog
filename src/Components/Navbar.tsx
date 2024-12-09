import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [Active, setActive] = useState<boolean>(false);
  return (
    <>
      <div
        className={`bg-[#212529] ${
          Active ? `h-[12pc]` : `h-auto`
        } py-5 sticky top-0 z-50 sm:h-auto transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center mx-72 max-sm:mx-10">
            <div>
              <h1 className="text-xl font-bold text-white">Be Creative</h1>
            </div>
            <div
              className="sm:hidden border-2 border-[#948f8f] rounded-lg focus:border-[#535151] w-10 h-10 flex justify-center items-center"
              onClick={() => setActive(!Active)}
            >
              <FaBars className="text-white text-2xl" />
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
          {Active ? (
            <div className="text-[#ffffff8c] sm:hidden flex flex-col gap-4 p-4">
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
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
