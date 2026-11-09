import { useMemo, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import SearchBar from "../components/SearchBar";
import CardSlider from "../components/CardSlider";
import HeroGlobe from "../components/HeroGlobe";
import { SLIDES } from "../data/slides";
import { countNights, filterSlidesByCity } from "../utils/search";

const DEALS_TITLE = "Villa Of Summer Fırsatları";
const CITIES = SLIDES.map((slide) => slide.title);

const INITIAL_SEARCH = {
  city: "",
  checkIn: "",
  checkOut: "",
  guests: { adults: 2, children: 0 },
};

const SearchSummary = ({ search, resultCount, onReset }) => {
  const nights = countNights(search.checkIn, search.checkOut);
  const guestCount = search.guests.adults + search.guests.children;
  const parts = [
    search.city.trim() || "Tüm şehirler",
    nights > 0 && `${nights} gece`,
    `${guestCount} misafir`,
  ].filter(Boolean);

  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
      <span>
        {parts.join(" · ")} — <strong>{resultCount}</strong> fırsat
      </span>
      {search.city.trim() && (
        <button
          type="button"
          onClick={onReset}
          className="font-medium text-brand underline-offset-2 hover:underline"
        >
          Filtreyi temizle
        </button>
      )}
    </p>
  );
};

const Home = () => {
  const [search, setSearch] = useState(INITIAL_SEARCH);
  // Bumping this remounts the search form so "clear filter" also clears its fields.
  const [searchFormKey, setSearchFormKey] = useState(0);

  const slides = useMemo(
    () => filterSlidesByCity(SLIDES, search.city),
    [search.city],
  );

  const resetSearch = () => {
    setSearch(INITIAL_SEARCH);
    setSearchFormKey((key) => key + 1);
  };

  return (
    <div className="w-full max-w-screen-xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid lg:min-h-[80vh] lg:grid-cols-[55%_45%]">
      <div className="flex flex-col gap-8 p-5 md:p-10">
        <Header />

        <div>
          <CategoryTabs />
          <SearchBar
            key={searchFormKey}
            initialValues={INITIAL_SEARCH}
            cities={CITIES}
            onSearch={setSearch}
          />
        </div>

        <section id="deals" className="flex flex-col gap-4">
          <TypeAnimation
            wrapper="h2"
            aria-label={DEALS_TITLE}
            className="min-h-8 text-xl font-semibold text-black md:text-2xl"
            sequence={[DEALS_TITLE, 4000, "", 600]}
            speed={50}
            repeat={Infinity}
            preRenderFirstString
          />
          <SearchSummary
            search={search}
            resultCount={slides.length}
            onReset={resetSearch}
          />
          {slides.length > 0 ? (
            <CardSlider key={search.city} slides={slides} />
          ) : (
            <p className="rounded-lg bg-page px-4 py-8 text-center text-sm text-gray-600">
              &ldquo;{search.city}&rdquo; için fırsat bulunamadı. Başka bir
              şehir deneyin.
            </p>
          )}
        </section>
      </div>

      <HeroGlobe />
    </div>
  );
};

export default Home;
