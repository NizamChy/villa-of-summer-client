import { GoPeople } from "react-icons/go";
import { GrSearch } from "react-icons/gr";
import { CardSlider } from "./CardSlider";
import { FaRegMap } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";
import { CgMenuLeft } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { useState, useEffect } from "react";
import { GiFamilyHouse } from "react-icons/gi";
import bgImg from "../src/assets/resources/bg.png";
import sky2 from "../src/assets/resources/sky2.png";
import sky1 from "../src/assets/resources/sky1.png";
import logo from "../src/assets/resources/logo.png";
import { TypeAnimation } from "react-type-animation";
import earth from "../src/assets/resources/earth.png";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import circle from "../src/assets/resources/circle.png";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-20 my-5">
      <div className="md:grid grid-cols-1 lg:flex justify-center">
        <div className="w-[55%] min-h-[80vh] rounded-s-xl">
          <div className="flex">
            <div className="text-3xl m-5 text-[#1D4E67]">
              <CgMenuLeft />
            </div>
            <div className="mx-auto">
              <img className="w-36 mt-3" src={logo} alt="logo" />
            </div>
          </div>

          <div className="flex justify-start w-[50%] mt-8">
            <div className="bg-gray-100 w-16 h-16 my-2 animate-grow rounded-tr-3xl">
              <span className="text-5xl text-green-500 flex items-center justify-center">
                <span className="my-2">
                  <GiFamilyHouse />
                </span>

                <span className="text-xl text-[#1D4E67]">Villalar</span>
              </span>
            </div>
            <div className="bg-slate-300 w-8 h-16 my-2 animate-grow rounded-tr-3xl">
              <span className="text-5xl text-blue-400 flex justify-center my-2">
                <HiMiniBuildingOffice />
              </span>
            </div>
            <div className="bg-slate-300 w-8 h-16 my-2 animate-grow rounded-tr-3xl">
              <span className="my-2 text-5xl text-cyan-500 flex justify-center">
                <FaRegMap />
              </span>
            </div>
          </div>

          {/* input field  */}
          <div className="border-b-2 pb-4 w-[80%] rounded-e-full">
            <label className="sr-only">Label</label>
            <div className="flex rounded-e-full">
              <button
                type="button"
                className="buttn buttn1 rounded-s-md border relative"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                <span className="bg-[#1D4E67] py-6 px-5 text-white rounded-full absolute -left-4 -top-1 text-2xl">
                  {hovered ? <GrSearch /> : <GrLocation />}
                </span>
                <span className="relative ml-10">
                  {hovered
                    ? "Nereye Bir  sehir ara...."
                    : "Nereye Gidiyorsunuz?"}
                </span>
              </button>

              <button
                type="button"
                className="-me-px py-3 px-4 inline-flex justify-center items-center gap-2 border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-[#1D4E67] transition-all text-sm hover:text-white"
              >
                <span className="flex flex-col">
                  <span>Check-in</span>

                  <span className="flex gap-2">
                    <span className="text-lg">
                      <LuCalendar />
                    </span>
                    <span>.. / .. / ..</span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="-me-px py-3 px-4 inline-flex justify-center items-center gap-2 border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-[#1D4E67] hover:text-white transition-all text-sm "
              >
                <span className="flex flex-col">
                  <span>Check-out</span>
                  <span>.. / .. / ..</span>
                </span>
              </button>

              <button
                type="button"
                className="rounded-e-full -me-px py-3 px-4 inline-flex justify-center items-center gap-2 border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-[#1D4E67] hover:text-white transition-all text-sm "
              >
                <span className="flex gap-2">
                  <span className="text-lg">
                    <GoPeople />
                  </span>
                  <span>Misafir ekleyin</span>
                </span>
              </button>
            </div>
          </div>
          {/* input field end */}

          <div className="mt-4 p-4 text-xs lg:text-sm text-center lg:text-left lg:font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black lg:pl-0">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "  Villa Of Summer Firsatlan",
                1000,
                " Villa Of Summer Firsatlan",
                1000,
                " Villa Of Summer Firsatlan",
                500,
              ]}
              speed={50}
              style={{
                fontSize: "2em",
                "@media (maxWidth: 640px)": { fontSize: "2em" },
              }}
              repeat={1}
            />
          </div>

          <CardSlider />
        </div>

        {/* second section start  */}

        <div className="w-[45%]">
          <div
            className="h-full rounded-e-xl"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center items-center h-full overflow-hidden relative">
              <div>
                {isVisible && (
                  <button
                    className="btn w-32 bg-white absolute mr-[30%] flex flex-col"
                    style={{ zIndex: 5 }}
                  >
                    <span className="text-gray-500">Discover the</span>
                    <span className="text-blue-500">World</span>
                  </button>
                )}
              </div>

              <div>
                {isVisible && (
                  <button
                    className="btn w-32 bg-white absolute right-10 bottom-[24%] flex flex-col"
                    style={{ zIndex: 6 }}
                  >
                    <span className="text-gray-500">Time To</span>
                    <span className="text-blue-500 ">Vacation</span>
                  </button>
                )}
              </div>

              <div
                className="absolute w-64 top-0 mr-64 animate-left-up-right-bottom"
                style={{ zIndex: 3 }}
              >
                <img src={sky1} alt="sky1" />
              </div>

              <div
                className="absolute w-64 top-0 ml-64 animate-left-up-right-bottom"
                style={{ zIndex: 4 }}
              >
                <img src={sky2} alt="sky2" />
              </div>

              <div className="rounded-full">
                <img
                  className="w-[80%] rounded-full mx-auto my-auto animate-spin-custom mt-32"
                  src={earth}
                  alt="earth"
                />
              </div>
              <div className="absolute scale-125">
                <img
                  className="animate-spin-custom mt-32"
                  style={{ zIndex: 2 }}
                  src={circle}
                  alt="circle"
                />
              </div>
            </div>
          </div>
          {/* second section end  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
