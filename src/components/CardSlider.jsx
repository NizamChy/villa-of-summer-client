import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const wrapIndex = (index, length) => (index + length) % length;

// With 3+ slides the active card sits in the middle with a neighbour on each side.
const getVisibleOffsets = (length) => {
  if (length >= 3) return [-1, 0, 1];
  if (length === 2) return [0, 1];
  return [0];
};

const SlideCard = ({ slide, isActive }) => (
  <article
    className={`relative shrink-0 overflow-hidden rounded-lg shadow-2xl transition-all duration-300 ${
      isActive
        ? "h-64 w-full sm:h-60 sm:w-[36%]"
        : "hidden h-48 w-[30%] opacity-90 sm:block"
    }`}
  >
    <img
      src={slide.image}
      alt={`${slide.title} villası`}
      className="h-full w-full bg-gray-900 object-cover"
      loading="lazy"
    />
    <div className="absolute inset-x-0 bottom-0 flex text-white">
      <p className="flex w-1/4 min-w-14 flex-col items-center justify-center bg-white/30 p-1 text-center text-[11px] font-bold leading-tight text-yellow-300 backdrop-blur-sm">
        <span>%{slide.discount}</span>
        <span>İndirim</span>
      </p>
      <div className="w-3/4 bg-black/60 px-2 py-1.5">
        <h3 className="text-sm font-bold">{slide.title}</h3>
        <p className="line-clamp-2 text-[11px] leading-tight opacity-90">
          {slide.description}
        </p>
        <p className="mt-0.5 text-xs font-bold">
          {slide.price}{" "}
          <span className="font-normal opacity-80">/ Gecelik</span>
        </p>
      </div>
    </div>
  </article>
);

const ArrowButton = ({ direction, onClick }) => {
  const isPrev = direction === "prev";
  const Icon = isPrev ? FiChevronLeft : FiChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Önceki fırsat" : "Sonraki fırsat"}
      className={`absolute top-1/2 z-10 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md bg-white/80 text-slate-600 shadow transition-colors hover:bg-white hover:text-brand ${
        isPrev ? "left-0" : "right-0"
      }`}
    >
      <Icon />
    </button>
  );
};

const CardSlider = ({ slides }) => {
  // Start on the second slide so the first one is visible on the left.
  const [currentIndex, setCurrentIndex] = useState(slides.length >= 3 ? 1 : 0);
  const hasMultiple = slides.length > 1;

  const showPrev = () =>
    setCurrentIndex((index) => wrapIndex(index - 1, slides.length));
  const showNext = () =>
    setCurrentIndex((index) => wrapIndex(index + 1, slides.length));

  const visibleSlides = getVisibleOffsets(slides.length).map((offset) => ({
    slide: slides[wrapIndex(currentIndex + offset, slides.length)],
    isActive: offset === 0,
  }));

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Villa fırsatları"
      className="relative px-3"
      onKeyDown={(event) => {
        if (!hasMultiple) return;
        if (event.key === "ArrowLeft") showPrev();
        if (event.key === "ArrowRight") showNext();
      }}
    >
      {hasMultiple && <ArrowButton direction="prev" onClick={showPrev} />}

      <div
        className="flex items-center justify-center gap-3"
        aria-live="polite"
      >
        {visibleSlides.map(({ slide, isActive }) => (
          <SlideCard key={slide.id} slide={slide} isActive={isActive} />
        ))}
      </div>

      {hasMultiple && <ArrowButton direction="next" onClick={showNext} />}
    </section>
  );
};

export default CardSlider;
