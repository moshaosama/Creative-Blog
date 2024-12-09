import SocialLogo from "./SocialLogo";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  function HandleClick(href: string) {
    window.open(href, "_blank", "width=700 , height=700");
  }
  return (
    <>
      {/* this is About Section */}
      <div className="my-28 h-[50pc] flex flex-col justify-center items-center">
        <h1 className="text-black text-3xl font-bold">About</h1>

        <div className="my-10 border-[#ddd] border-2 rounded-lg p-2">
          <div>
            <img
              src="WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
              alt=""
              className="w-80 rounded-lg "
            />
          </div>
          <div className="text-center my-2">
            <h1 className="font-bold text-xl">Mohamed Osama</h1>
            <p className="w-80 text-[#666363]">
              My name is mohamed osama and i am Full-Stack Developer, Glad to
              see you in my page....
            </p>
          </div>
          <div className="text-center my-10 flex flex-col gap-5">
            <p className="font-bold text-sm">Get In Touch With Me!</p>
            <div className="flex gap-3 justify-center ">
              <SocialLogo
                Element={<FaFacebook />}
                handleClick={async () =>
                  HandleClick("https://www.facebook.com/mohamedosamakin/")
                }
                textSize="1xl"
                Color="black"
              />
              <SocialLogo
                Element={<FaInstagram />}
                handleClick={async () =>
                  HandleClick("https://www.instagram.com/mo4a_fekry/?next=%2F")
                }
                textSize="1xl"
                Color="black"
              />

              <SocialLogo
                Element={<FaGithub />}
                handleClick={async () =>
                  HandleClick("https://github.com/moshaosama")
                }
                textSize="1xl"
                Color="black"
              />
              <SocialLogo
                Element={<FaXTwitter />}
                handleClick={async () =>
                  HandleClick("https://x.com/mohamedosfekry")
                }
                textSize="1xl"
                Color="black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
