import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialLogo from "./SocialLogo";

const Social = () => {
  function HandleClick(href: string) {
    window.open(href, "_blank", "width=700 , height=700");
  }
  return (
    <div className="bg-[#ffc107] py-6 rounded-b-xl shadow-xl">
      <div className="flex items-center justify-between mx-72 max-sm:mx-0 max-sm:flex-col max-sm:gap-6">
        <div>
          <h1 className="text-white text-3xl font-bold">
            Follow me on social Media
          </h1>
        </div>
        <div className="flex gap-5">
          <SocialLogo
            Element={<FaFacebook />}
            handleClick={async () =>
              HandleClick("https://www.facebook.com/mohamedosamakin/")
            }
            textSize="5xl"
            Color="white"
          />
          <SocialLogo
            Element={<FaInstagram />}
            handleClick={async () =>
              HandleClick("https://www.instagram.com/mo4a_fekry/?next=%2F")
            }
            textSize="5xl"
            Color="white"
          />

          <SocialLogo
            Element={<FaGithub />}
            handleClick={async () =>
              HandleClick("https://github.com/moshaosama")
            }
            textSize="5xl"
            Color="white"
          />
          <SocialLogo
            Element={<FaXTwitter />}
            handleClick={async () =>
              HandleClick("https://x.com/mohamedosfekry")
            }
            textSize="5xl"
            Color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
