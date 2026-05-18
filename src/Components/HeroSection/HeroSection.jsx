import { useState } from "react";
import MyContainer from "../../Container/MyContainer";
import heroImg from "../../assets/logos/heroimg.png";
import { FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#F2F4F8]">
      <MyContainer
        className={
          "flex flex-col-reverse gap-8 md:flex-row justify-between items-center py-8 md:py-20"
        }
      >
        {/* Left Side */}
        <div className="space-y-4 md:space-y-8">
          <h1 className="text-2xl md:text-6xl font-semibold text-gray-800">
            Creative Web Design <br /> For Businesses
          </h1>
          <p>
            Unlock your design skills to create beautiful websites and apps with
            a <br /> poweful and easy-to-use tool.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <button className="btn btn-primary w-full md:text-xl md:py-6 md:w-auto px-8">
              Get Start
            </button>
            <button className="btn btn-accent w-full md:text-xl md:py-6 md:w-auto text-white px-8">
              Contact Us
            </button>
          </div>
        </div>
        {/* Right Side */}

        <div
          onClick={() => setIsOpen(true)}
          className="relative group cursor-pointer"
        >
          <img src={heroImg} alt="Hero Images" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 rounded-full group-hover:scale-110 transition-all duration-300  bg-white">
              <FaGooglePlay className="text-blue-600" size={35} />
            </div>

            {isOpen && (
              <div className="fixed z-100 inset-0 flex justify-center items-center p-4">
                <div className="relative w-full rounded-2xl max-w-4xl aspect-video bg-black/80 overflow-hidden">
                  <div
                    className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full z-110"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  >
                    X
                  </div>
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/fdKtjnU9zuA?si=E7iPvlws5DsWehxa"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default HeroSection;
