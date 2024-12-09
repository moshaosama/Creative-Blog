import { IoPersonSharp } from "react-icons/io5";
import Cards from "../Components/Cards";

import Social from "../Components/Social";
import { FaMapPin } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import WelcomeSection from "../Components/WelcomeSection";
import Section from "../Components/Section";
import Question from "../Components/Question";
import About from "../Components/About";

const Home = () => {
  return (
    <>
      <div>
        <WelcomeSection />
        <Social />
        <div className="flex max-sm:flex-col justify-between mx-72 max-sm:mx-0">
          <Cards
            Image={<IoPersonSharp />}
            Title="Front End Developer"
            Desc="A front end developer, also known as a front end web developer, is a professional responsible for the design and implementation of the interface."
          />
          <Cards
            Image={<FaMapPin />}
            Title="Roles and Responsibilities"
            Desc="Decide web page design and structure, Develop features to enhance the users' experience, Striking a balance between functional and aesthetic design..."
          />
          <Cards
            Image={<GiSkills />}
            Title="Skills"
            Desc="Since the front end developer is the rock star of website/app development, they need to have a well-stocked personal toolbox."
          />
        </div>
        <Section
          Image={"05.png"}
          Title={"Learn The Fundamentals"}
          Desc={
            "First, Learn CSS, JavaScript and HTML. These coding languages are the essential building blocks for web and app development, so you need to learn them.Then, Get Informed, Practice. And, Learn the Command Line, Learn Version Control, Enhance Your Skills, Take a Course."
          }
          Color="black"

          // FlexRow="flex-row-reverse"
        />
        <Section
          Image={"01.png"}
          Title={"Stay Creative"}
          Desc={
            "Web front end development is one of the fields in IT that combines technical-analytic knowledge with creative skills. Aside from coding with CSS or JavaScript, front end developers are also often tasked to explore their visual arts capabilities, which is what digital design is all about. So, if you are planning to become a front end developer, you should add some creative sparkle to your knowledge base by integrating basic (digital) design skills."
          }
          FlexRow="flex-row-reverse"
          Color="white"
        />
        <Section
          Image={"04.png"}
          Title={"Discipline"}
          Desc={
            "Discipline is action or inaction that is regulated to be in accordance with a particular system of governance. Discipline is commonly applied to regulating human and animal behavior to its society or environment it belongs."
          }
          Color="black"
        />
        <Question />
        <About />
      </div>
    </>
  );
};

export default Home;
