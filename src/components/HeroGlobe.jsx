import heroBg from "../assets/images/hero-bg.webp";
import earth from "../assets/images/earth.webp";
import orbitRings from "../assets/images/orbit-rings.webp";
import cloudsLeft from "../assets/images/clouds-left.webp";
import cloudsRight from "../assets/images/clouds-right.webp";

const LABEL_CLASS =
  "absolute z-20 flex animate-fade-in flex-col rounded-md bg-white px-4 py-1.5 text-center text-xs leading-tight shadow-lg [animation-delay:3s] md:text-sm";

const HeroGlobe = () => (
  <section
    id="discover"
    aria-label="Dünyayı keşfet"
    className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-brand bg-cover bg-left lg:min-h-full lg:bg-transparent lg:bg-[image:var(--hero-bg)]"
    style={{ "--hero-bg": `url(${heroBg})` }}
  >
    <img
      src={cloudsLeft}
      alt=""
      className="absolute -left-4 top-0 z-10 w-48 animate-float md:w-64"
    />
    <img
      src={cloudsRight}
      alt=""
      className="absolute -right-4 top-0 z-10 w-48 animate-float [animation-delay:-3s] md:w-64"
    />

    <img
      src={orbitRings}
      alt=""
      className="absolute w-[95%] max-w-[560px] animate-spin-slow"
    />
    <img
      src={earth}
      alt=""
      className="relative w-[65%] max-w-[380px] animate-spin-slow rounded-full"
    />

    <p className={`${LABEL_CLASS} left-[8%] top-[42%]`}>
      <span className="text-gray-500">Discover the</span>
      <span className="font-semibold text-blue-500">World</span>
    </p>
    <p className={`${LABEL_CLASS} bottom-[24%] right-[6%]`}>
      <span className="text-gray-500">Time To</span>
      <span className="font-semibold text-blue-500">Vacation</span>
    </p>
  </section>
);

export default HeroGlobe;
