import { useCallback, useRef, useState } from "react";
import { GoPeople } from "react-icons/go";
import useDismiss from "../hooks/useDismiss";

const GUEST_TYPES = [
  { key: "adults", label: "Yetişkin", min: 1, max: 10 },
  { key: "children", label: "Çocuk", min: 0, max: 10 },
];

const Stepper = ({ label, value, min, max, onChange }) => (
  <div className="flex items-center justify-between gap-6 py-2">
    <span className="text-sm text-gray-700">{label}</span>
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label={`${label} azalt`}
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
        className="grid h-7 w-7 place-items-center rounded-full border border-slate-300 text-brand transition-colors hover:bg-page disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>
      <span
        className="w-4 text-center text-sm font-semibold"
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        aria-label={`${label} artır`}
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className="grid h-7 w-7 place-items-center rounded-full border border-slate-300 text-brand transition-colors hover:bg-page disabled:cursor-not-allowed disabled:opacity-40"
      >
        +
      </button>
    </div>
  </div>
);

const GuestPicker = ({ guests, onChange, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const close = useCallback(() => setIsOpen(false), []);
  useDismiss(containerRef, isOpen, close);

  const total = guests.adults + guests.children;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-full w-full items-center gap-2 rounded-b-3xl px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-brand hover:text-white focus-visible:bg-brand focus-visible:text-white focus-visible:outline-none sm:rounded-l-none sm:rounded-r-full sm:pr-6"
      >
        <GoPeople className="text-lg" aria-hidden="true" />
        <span className="whitespace-nowrap">{total} Misafir</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Misafir sayısı"
          className="absolute right-0 top-full z-30 mt-2 w-60 animate-fade-in rounded-xl border border-slate-200 bg-white p-3 shadow-xl"
        >
          {GUEST_TYPES.map(({ key, label, min, max }) => (
            <Stepper
              key={key}
              label={label}
              value={guests[key]}
              min={min}
              max={max}
              onChange={(value) => onChange({ ...guests, [key]: value })}
            />
          ))}
          <button
            type="button"
            onClick={close}
            className="mt-2 w-full rounded-lg bg-brand py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Tamam
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestPicker;
