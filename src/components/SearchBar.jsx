import { useState } from "react";
import { GrLocation, GrSearch } from "react-icons/gr";
import { LuCalendar } from "react-icons/lu";
import GuestPicker from "./GuestPicker";
import { nextDayISO, todayISO } from "../utils/search";

const CITY_LIST_ID = "city-suggestions";

const DateField = ({ id, label, value, min, onChange, withIcon = false }) => (
  <label
    htmlFor={id}
    className="flex cursor-pointer flex-col justify-center border-t border-slate-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors focus-within:bg-page hover:bg-page sm:border-l sm:border-t-0"
  >
    <span className="flex items-center gap-1 text-xs opacity-70">
      {withIcon && <LuCalendar aria-hidden="true" />}
      {label}
    </span>
    <input
      id={id}
      type="date"
      value={value}
      min={min}
      onChange={(event) => onChange(event.target.value)}
      // The native picker icon is hidden, so open the picker on any click.
      onClick={(event) => event.currentTarget.showPicker?.()}
      className="w-full cursor-pointer bg-transparent text-xs outline-none sm:w-[6.5rem] [&::-webkit-calendar-picker-indicator]:hidden"
    />
  </label>
);

const SearchBar = ({ initialValues, cities, onSearch }) => {
  const [city, setCity] = useState(initialValues.city);
  const [checkIn, setCheckIn] = useState(initialValues.checkIn);
  const [checkOut, setCheckOut] = useState(initialValues.checkOut);
  const [guests, setGuests] = useState(initialValues.guests);
  const [isCityActive, setIsCityActive] = useState(false);

  const today = todayISO();
  const minCheckOut = checkIn ? nextDayISO(checkIn) : nextDayISO(today);

  const handleCheckInChange = (value) => {
    setCheckIn(value);
    // Keep the stay valid: check-out must be after check-in.
    if (checkOut && value && checkOut <= value) setCheckOut("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({ city, checkIn, checkOut, guests });
  };

  return (
    <form
      id="search"
      role="search"
      onSubmit={handleSubmit}
      className="flex flex-col rounded-3xl border border-slate-200 bg-white shadow-md sm:flex-row sm:rounded-full"
    >
      <div
        className="search-trigger group relative isolate flex min-w-[13.5rem] flex-1 items-center gap-3 overflow-hidden rounded-t-3xl py-2 pl-2 pr-4 text-sm text-gray-500 transition-colors duration-500 focus-within:text-white hover:text-white sm:rounded-l-full sm:rounded-tr-none"
        onMouseEnter={() => setIsCityActive(true)}
        onMouseLeave={() => setIsCityActive(false)}
      >
        <button
          type="submit"
          aria-label="Ara"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-lg text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <GrLocation className="group-focus-within:hidden group-hover:hidden" />
          <GrSearch className="hidden group-focus-within:block group-hover:block" />
        </button>
        <label htmlFor="search-city" className="sr-only">
          Şehir
        </label>
        <input
          id="search-city"
          type="text"
          list={CITY_LIST_ID}
          autoComplete="off"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onFocus={() => setIsCityActive(true)}
          onBlur={() => setIsCityActive(false)}
          placeholder={
            isCityActive ? "Bir şehir ara..." : "Nereye Gidiyorsunuz?"
          }
          className="w-full min-w-0 bg-transparent outline-none placeholder:text-current [&::-webkit-calendar-picker-indicator]:hidden"
        />
        <datalist id={CITY_LIST_ID}>
          {cities.map((name) => (
            <option key={name} value={name} />
          ))}
        </datalist>
      </div>

      <div className="grid grid-cols-2 sm:flex">
        <DateField
          id="check-in"
          label="Check-in"
          value={checkIn}
          min={today}
          onChange={handleCheckInChange}
          withIcon
        />
        <DateField
          id="check-out"
          label="Check-out"
          value={checkOut}
          min={minCheckOut}
          onChange={setCheckOut}
        />
      </div>

      <GuestPicker
        guests={guests}
        onChange={setGuests}
        className="border-t border-slate-200 sm:border-l sm:border-t-0"
      />
    </form>
  );
};

export default SearchBar;
