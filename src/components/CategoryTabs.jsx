import { useState } from "react";
import villaIcon from "../assets/icons/villa.svg";
import hotelIcon from "../assets/icons/hotel.svg";
import mapIcon from "../assets/icons/map.svg";

const CATEGORIES = [
  { id: "villas", label: "Villalar", icon: villaIcon },
  { id: "hotels", label: "Oteller", icon: hotelIcon },
  { id: "map", label: "Harita", icon: mapIcon },
];

const CategoryTabs = () => {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);

  return (
    <div
      role="tablist"
      aria-label="Konaklama türü"
      className="flex w-fit origin-left animate-grow-in overflow-hidden rounded-t-2xl bg-slate-200"
    >
      {CATEGORIES.map(({ id, label, icon }) => {
        const isActive = id === activeId;

        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={label}
            onClick={() => setActiveId(id)}
            className={`flex items-center gap-2 rounded-t-2xl px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-white text-brand"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            <img src={icon} alt="" className="h-7 w-7" />
            {isActive && <span>{label}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
