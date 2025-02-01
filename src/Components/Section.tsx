import { Props } from "../interface";

const Section = ({ Image, Title, Desc, Color, FlexRow }: Props) => {
  return (
    <>
      <div
        className={`${Color === "black" ? `bg-white` : `bg-[#212529]`} py-6`}
        id="Learn"
      >
        <div
          className={`flex ${FlexRow} justify-between items-center mx-72 max-sm:mx-0 max-sm:flex-col  my-10`}
        >
          <div>
            <img src={Image} alt="Image.png" className="w-[100pc]" />
          </div>

          <div className="flex flex-col gap-4 my-10">
            <h1
              className={`font-bold text-3xl text-${Color} max-sm:text-lg max-sm:text-center`}
            >
              {Title}
            </h1>
            <p
              className={`text-lg max-sm:mx-10 w-[45pc] max-sm:w-56 max-sm:text-center text-${Color}`}
            >
              {Desc}
            </p>
            <div className="flex justify-center my-4 sm:block sm:my-0">
              <button className="bg-[#ffc107] w-1/2 h-10 rounded-lg hover:bg-[#a18b48] transition-all duration-200">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
