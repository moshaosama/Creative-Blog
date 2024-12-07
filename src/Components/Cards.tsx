interface Props {
  Image: React.ReactNode;
  Title: string;
  Desc: string;
}

const Cards = ({ Image, Title, Desc }: Props) => {
  return (
    <>
      <div className="my-10 max-sm:flex max-sm:justify-center">
        <div className=" bg-[#212529] flex flex-col justify-center text-center gap-3 p-4 w-96 max-sm:w-80 rounded-xl max-h-full">
          <span className="flex justify-center items-start text-white text-4xl">
            {Image}
          </span>
          <h1 className="text-2xl font-bold text-white">{Title}</h1>
          <p className="text-white max-w-80">{Desc}</p>

          <div className="flex justify-center my-4">
            <button className="bg-[#ffc107] w-1/2 h-10 rounded-lg hover:bg-[#a18b48] transition-all duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
