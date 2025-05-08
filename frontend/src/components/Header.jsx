import React from "react";
import { useState, useEffect } from "react";
import { Link as RouteLink, NavLink, useLocation } from "react-router-dom";
import { X, Menu, ChevronRight } from "lucide-react";
import { Link as ScrollLink, Element, Events, scrollSpy } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Initialize scrollSpy when component mounts
  React.useEffect(() => {
    Events.scrollEvent.register("begin", () => {
      console.log("Scroll begin");
    });

    Events.scrollEvent.register("end", () => {
      console.log("Scroll end");
    });

    scrollSpy.update();

    // Cleanup when component unmounts
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Update the handleClickOutside function
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the menu is open and the click is outside both the menu panel and the hamburger button
      if (isMenuOpen) {
        const menuPanel = document.querySelector(".mobile-menu-panel");
        const hamburgerButton = document.querySelector(".hamburger-button");

        if (
          menuPanel &&
          !menuPanel.contains(event.target) &&
          hamburgerButton &&
          !hamburgerButton.contains(event.target)
        ) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to calculate scroll duration based on distance

  const calculateDuration = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    const baseDuration = 500;
    if (targetElement) {
      // Get the distance between current scroll position and target
      const targetPosition = targetElement.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;
      const distance = Math.abs(targetPosition + scrollPosition);

      // Base duration + additional time based on distance
      // Adjust the multiplier (0.5) to control how much the distance affects duration
      return Math.min(1200, baseDuration + distance * 0.5);
    }
    return 800; // Default fallback
  };

  const menuItems = [
    "Home",
    "Services",
    "About Us",
    "Our Work",
    "Review",
    "Help",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <RouteLink
              to="/"
              className="text-2xl font-bold text-green-800 cursor-pointer"
            >
              Arab <span className="text-yellow-500">Sign Craft</span>
            </RouteLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item) => {
                const sectionId = item.toLowerCase().replace(" ", "-");
                return (
                  <li key={item}>
                    {isHome ? (
                      <ScrollLink
                        to={sectionId}
                        spy={true}
                        smooth={true}
                        offset={-20} // Adjust based on your header height
                        duration={calculateDuration(sectionId)}
                        className="text-green-800 hover:text-yellow-500 cursor-pointer transition-colors duration-200 ease-in-out"
                      >
                        {item}
                      </ScrollLink>
                    ) : (
                      <RouteLink
                        to={`/#${sectionId}`}
                        className="cursor-pointer"
                      >
                        {item}
                      </RouteLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="md:hidden mobile-menu-container">
            {/* Hamburger Button */}
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

            {/* Mobile Menu Overlay */}
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
                      duration={calculateDuration(sectionId)}
                      activeClass="text-green-800 bg-yellow-50 border-l-4 border-l-yellow-400"
                      className="flex items-center justify-between px-6 py-4 border-b border-gray-100 text-lg font-medium transition-all duration-200 text-gray-700 hover:bg-green-50 hover:text-green-800 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item}</span>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </ScrollLink>
                  ) : (
                    <RouteLink
                      key={item}
                      to={`/#${sectionId}`}
                      className="flex items-center justify-between px-6 py-4 border-b border-gray-100 text-lg font-medium transition-all duration-200 text-gray-700 hover:bg-green-50 hover:text-green-800 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
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
          </div>
        </div>
      </div>
    </header>
  );
}
