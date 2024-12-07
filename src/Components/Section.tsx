const Section = () => {
  return (
    <div className="bg-[#212529]">
      <div className=" flex justify-between items-center mx-72 max-sm:mx-0">
        <div className="my-48 max-sm:my-20 flex flex-col gap-5">
          <h1 className="font-bold max-sm:font-normal text-4xl text-white text-center">
            Welcome to <span className="text-[#ffc107]">Be Creative</span>
          </h1>
          <p className="text-white text-xl max-sm:text-lg max-sm:text-center">
            Become a Creative Frontend Developer
          </p>
          <div className="flex justify-center sm:block">
            <p className="text-white text-lg max-sm:w-60 max-sm:text-center">
              Visual arts creativity and imagination are skills that are often
              lost when we hit high school. Despite dealing with code all day,
              front end developers still need to rely on these skills from time
              to time — even when we don't want to....
            </p>
          </div>
        </div>

        <div className="max-sm:hidden">
          <img src="06.png" alt="Be_Creative.png" className="w-[100pc]" />
        </div>
      </div>
    </div>
  );
};

export default Section;
