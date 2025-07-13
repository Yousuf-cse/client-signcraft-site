export default function HamburgerMenu({ isMenuOpen, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className="relative z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white  focus:outline-none group transition-all duration-300 hamburger-button"
      aria-expanded={isMenuOpen}
      aria-label="Toggle menu"
    >
      <div className="relative flex overflow-hidden items-center justify-center w-8 h-8">
        <span
          className={`absolute h-0.5 w-6 bg-green-800 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 bg-green-800 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-6 bg-green-800 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        ></span>
      </div>
    </button>
  );
}
