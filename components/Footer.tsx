import ShimmerButton from "./ui/ShimmerButton";
import { IoMdMail } from "react-icons/io";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacirty-50"
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:m-w-[45vw]">
          Reach out with any <span className="text-purple">ideas</span> or
          inquiries
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me using the links below so we can discuss your next big
          project.
        </p>
        <a href="mailto:essandhu22@gmail.com">
          <ShimmerButton
            title="Let's Talk"
            icon={<IoMdMail />}
            position="left"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright© 2024 Erick Sandhu
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={profile.img}
                  alt={profile.id.toString()}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
