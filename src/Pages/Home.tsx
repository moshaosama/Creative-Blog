import { IoPersonSharp } from "react-icons/io5";
import Cards from "../Components/Cards";
import Section from "../Components/Section";
import Social from "../Components/Social";
import { FaMapPin } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      <Section />
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
    </div>
  );
};

export default Home;
