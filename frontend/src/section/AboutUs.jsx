import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Element, scroller } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { aboutSections } from "../data/aboutContent";
import AboutSection from "../components/AboutSection";

export default function AboutUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      scroller.scrollTo(section, {
        duration: 1200,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    }
  }, [location]);

  return (
    <Element name="about-us">
      <div className="bg-green-800 backdrop-blur-md p-8 md:p-10 mt-12 shadow-xl relative overflow-hidden">
        {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

        <div className="space-y-6 mt-10">
          <h2 className="text-4xl text-center md:text-4xl font-bold text-white mb-14 cursor-default">
            GET TO <span className="text-[#ffde21]">KNOW</span> US
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aboutSections.map((section, index) => (
              <AboutSection key={index} {...section} />
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Link
            to="/about-us"
            className="bg-[#ffde21] text-green-800 px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors duration-300 font-semibold flex items-center gap-2 cursor-pointer"
          >
            Learn More
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </Element>
  );
}
