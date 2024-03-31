import { useState } from "react";

export const CardSlider = () => {
  const [currentSlider, setCurrentSlider] = useState(1);
  const sliderImages = [
    { img: "https://source.unsplash.com/600x600/?Villa", text: "Villa", discount: "20% Off", title: "Luxury Villa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$1000/day" },
    { img: "https://source.unsplash.com/600x600/?Mansion", text: "Mansion", discount: "15% Off", title: "Grand Mansion", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$1500/day" },
    { img: "https://source.unsplash.com/600x600/?House", text: "House", discount: "10% Off", title: "Cozy House", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$500/day" },
    { img: "https://source.unsplash.com/600x600/?Cottage", text: "Cottage", discount: "25% Off", title: "Quaint Cottage", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$300/day" },
    { img: "https://source.unsplash.com/600x600/?Bungalow", text: "Bungalow", discount: "30% Off", title: "Beach Bungalow", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$800/day" },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );

  return (
    <div className=" max-w-6xl mx-auto h-auto md:h-auto flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">

        <button
          onClick={prevSlider}
          className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
 
        <button
          onClick={nextSlider}
          className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <div
        className="h-[540px] md:h-[360px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
        style={{ transform: `translateX(-${currentSlider * 50}%)` }}
      >

        {sliderImages.map((slide, inx) => (
          <div
            key={inx}
            className={`${
              currentSlider === inx
                ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[300px] shadow-2xl"
                : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[275px] scale-95 opacity-95 shadow-2xl"
            } min-w-[50%] relative duration-200`}
            style={{ perspective: "200px" }}
          >
            <img
              src={slide.img}
              className="w-full h-full bg-gray-900 rounded-lg duration-300"
              alt={slide.text}
              style={{
                transform: `${
                  currentSlider - 1 === inx
                    ? "rotateY(0deg)"
                    : currentSlider + 1 === inx
                    ? "rotateY(-0deg)"
                    : ""
                }`,
                transformStyle: "preserve-3d",
              }}
            />
            <div className="absolute bottom-0 left-0 w-1/5 h-[37%] bg-black bg-opacity-50 backdrop-blur-sm bg-white/30 text-center py-2 font-bold text-yellow-300">
              {slide.discount}
            </div>
            <div className="absolute bottom-0 right-0 w-4/5 bg-black bg-opacity-50 text-white py-2">
              <div className="text-xl font-bold">{slide.title}</div>
              <div className="text-sm">{slide.description}</div>
              <div className="text-lg font-bold">{slide.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
