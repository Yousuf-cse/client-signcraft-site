import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";

export default function DesktopNav({ isHome, menuItems }) {
  return (
    <nav className="hidden md:flex flex-none justify-center">
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
                  offset={-80}
                  className="text-green-800 hover:text-yellow-500 cursor-pointer transition-colors duration-200 ease-in-out"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("closeHelpForm"));
                  }}
                >
                  {item}
                </ScrollLink>
              ) : (
                <RouteLink to={`/#${sectionId}`} className="cursor-pointer" onClick={onClose}>
                  {item}
                </RouteLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
