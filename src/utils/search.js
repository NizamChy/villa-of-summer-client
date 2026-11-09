const MS_PER_DAY = 24 * 60 * 60 * 1000;

const normalize = (text) => text.trim().toLocaleLowerCase("tr");

/** Returns the slides whose city matches the query (Turkish-aware, case-insensitive). */
export const filterSlidesByCity = (slides, city) => {
  const query = normalize(city);
  if (!query) return slides;
  return slides.filter((slide) => normalize(slide.title).includes(query));
};

/** Number of nights between two `YYYY-MM-DD` dates, or 0 if either is missing. */
export const countNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 0;
  const diff = new Date(checkOut) - new Date(checkIn);
  return Math.max(0, Math.round(diff / MS_PER_DAY));
};

/** Today's date as `YYYY-MM-DD` in local time, for `<input type="date" min>`. */
export const todayISO = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now - offset).toISOString().slice(0, 10);
};

/** The day after a `YYYY-MM-DD` date, as `YYYY-MM-DD`. */
export const nextDayISO = (date) => {
  const next = new Date(`${date}T00:00:00Z`);
  next.setUTCDate(next.getUTCDate() + 1);
  return next.toISOString().slice(0, 10);
};
