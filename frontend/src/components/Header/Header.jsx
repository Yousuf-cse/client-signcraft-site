import React from "react";
import { useState, useEffect } from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { Events, scrollSpy } from "react-scroll";
import DesktopNav from "./DesktopNav"
import MobileMenu from "./MobileMenu";
import HamburgerMenu from "./HamburgerMenu";
import { menuItems } from "./menuItems";

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


  const handleOpenMenu = () => {
  setIsMenuOpen((prev) => !prev); // open the menu
  window.dispatchEvent(new CustomEvent("closeHelpForm")); // close the help form
};

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center h-20">
          {/* Left: Logo */}
          <div className="flex-1 flex-shrink-0 flex items-center min-w-0">
            <RouteLink
              to="/"
              className="whitespace-nowrap text-2xl font-bold text-green-800 cursor-pointer"
            >
              Arab <span className="text-yellow-500">Sign Craft</span>
            </RouteLink>
          </div>
          <DesktopNav
            isHome={isHome}
            menuItems={menuItems}
          />
          {/* Right: Mobile Menu Button (invisible on desktop, but keeps space) */}
          <div className="flex-1 flex justify-end md:justify-end md:flex">
            <div className="md:hidden mobile-menu-container">
          <HamburgerMenu
            isOpen={isMenuOpen} toggleMenu={handleOpenMenu}
          />

              {/* Mobile Menu Overlay */}
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(false)}
        menuItems={menuItems}
        isHome={isHome}
      />
    </header>
  );
}
