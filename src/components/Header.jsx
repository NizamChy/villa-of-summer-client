import { useCallback, useRef, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import logo from "../assets/images/logo.webp";
import useDismiss from "../hooks/useDismiss";

const MENU_LINKS = [
  { href: "#search", label: "Villa ara" },
  { href: "#deals", label: "Fırsatlar" },
  { href: "#discover", label: "Keşfet" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  useDismiss(menuRef, isMenuOpen, closeMenu);

  return (
    <header className="flex items-center">
      <nav ref={menuRef} className="relative">
        <button
          type="button"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md p-1 text-3xl text-brand transition-colors hover:bg-page"
        >
          <CgMenuLeft />
        </button>

        {isMenuOpen && (
          <ul
            id="main-menu"
            className="absolute left-0 top-full z-30 mt-2 w-44 animate-fade-in overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
          >
            {MENU_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-page hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <img
        className="mx-auto w-32 md:w-36"
        src={logo}
        alt="Villa of Summer"
        width={203}
        height={83}
      />
      {/* Spacer that mirrors the menu button so the logo stays centred. */}
      <span className="w-9" aria-hidden="true" />
    </header>
  );
};

export default Header;
