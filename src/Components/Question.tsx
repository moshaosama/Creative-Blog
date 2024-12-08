import { FaArrowDown } from "react-icons/fa";
import QuestionData from "../Questions.json";

const Question = () => {
  return (
    <>
      <div className="bg-[#212529]">
        <div>
          <h1 className="text-3xl font-bold text-white text-center py-10">
            Frequently Asked Questions
          </h1>
          {QuestionData?.map((el) => {
            return (
              <>
                <div className="my-5 cursor-pointer mx-96 max-sm:mx-10 border-[3px] border-blue-400 p-6 ">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-white font-bold" key={el.id}>
                        {el.Title}
                      </h1>
                    </div>
                    <div>
                      <FaArrowDown className="text-white" />
                    </div>
                  </div>
                </div>
                <hr className="border border-black mx-96 max-sm:mx-10" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Question;
