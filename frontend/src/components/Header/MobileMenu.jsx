import { X, ChevronRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";

export default function MobileMenu({
  isMenuOpen,
  toggleMenu,
  menuItems,
  isHome,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-md bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-40 shadow-xl transform transition-transform duration-300 ease-in-out mobile-menu-panel ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        {/* Menu Header */}
        <div className="bg-green-800 text-white p-4.5 flex items-center justify-between">
          <h2 className="text-xl font-bold"> Arab Sign Craft</h2>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-300 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-4">
          {menuItems.map((item, index) => {
            const sectionId = item.toLowerCase().replace(" ", "-");
            return isHome ? (
              <ScrollLink
                key={item}
                to={sectionId}
                spy={true}
                smooth={true}
                offset={-40}
                activeClass="text-green-800 bg-yellow-50 border-l-4 border-l-yellow-400"
                className="flex items-center justify-between px-6 py-4 border-b border-gray-100 text-lg font-medium transition-all duration-200 text-gray-700 hover:bg-green-50 hover:text-green-800 cursor-pointer"
                onClick={() =>{
                  setTimeout(() =>  toggleMenu(false), 100)
                }}
              >
                <span>{item}</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </ScrollLink>
            ) : (
              <RouteLink
                key={item}
                to={`/#${sectionId}`}
                className="flex items-center justify-between px-6 py-4 border-b border-gray-100 text-lg font-medium transition-all duration-200 text-gray-700 hover:bg-green-50 hover:text-green-800 cursor-pointer"
                onClick={() => toggleMenu(false)}
              >
                <span>{item}</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </RouteLink>
            );
          })}
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-100">
          <RouteLink
            to={"/book-installation"}
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-[#ffde21] text-green-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center"
          >
            Book Installation
          </RouteLink>
        </div>
      </div>
    </>
  );
}
