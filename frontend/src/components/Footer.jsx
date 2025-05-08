import React from "react"
import { useState, useEffect } from "react";
import {Link as RouteLink, useLocation} from "react-router-dom"
import { FacebookIcon, Instagram, Linkedin, Mail, Phone} from "lucide-react"
import { Link as ScrollLink, Element, Events, scrollSpy } from "react-scroll";



export default function Footer() {

  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

   // check the type of device
  useEffect(() => {
    const checkMobile = /Android|iphone|ipad|ipod/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  },[]);

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

   // About links with corresponding section IDs
   const aboutLinks = [
    { label: "Why us", id: "why-us" },
    { label: "Team", id: "team" },
    { label: "Company Overview", id: "company-overview" },
    { label: "Our Story", id: "our-story" },
    { label: "Our Mission", id: "our-mission" },
  ];

   // Policy links with corresponding section IDs
   const policyLinks = [
    { label: "Privacy Policy", id: "privacy-policy" },
    { label: "Warranty & Damage Policy", id: "warranty-policy" },
    { label: "Intellectual Property Policy", id: "intellectual-property" },
    { label: "Refund Policy", id: "refund-policy" },
    { label: "Terms of Service", id: "terms-of-service" },
  ];

  return (
    <footer className="bg-[#073021] text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Company Info */}
           <div className="cursor-default">
             <h3 className="text-xl font-semibold mb-4">Arab <span className="text-yellow-500">Sign Craft</span></h3>
          </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-6">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 cursor-default">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((item) => (
                <li key={item.id}>
                  <RouteLink 
                    to={`/about-us?tab=about&section=${item.id}`}
                   className="text-white hover:text-yellow-300 transition-colors">
                    {item.label}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 cursor-default">Policy</h3>
            <ul className="space-y-2">
              {policyLinks.map(
                (item) => (
                  <li key={item.id}>
                    <RouteLink 
                      to={`/about-us?tab=policy&section=${item.id}`}
                     className="text-white hover:text-yellow-300 transition-colors">
                      {item.label}
                    </RouteLink>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* contact us Section */}
          <div>
             <h3 className="text-xl font-semibold mb-4 cursor-default">Contact Us</h3>
             <ul className="space-y-2">
               <li className="flex items-center">
                 <Phone className="w-4 h-4 mr-2" />
                {isMobile ? (
                <a 
                  href="tel:+917947126383"
                  className="text-sm text-white hover:text-yellow-300"
                  title="Click to call"
                  >
                  +91 7947126383
                </a>
              ) : (
                 <span className="text-sm">+91 7947126383</span>
                  )
                }
                </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:arabsigncraft@gmail.com"
                  className="text-sm hover:text-yellow-300 transition-colors duration-200"
                >
                  arabsigncraft@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* services */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4 cursor-default">Our Services</h3>
            <ul className="space-y-2">
              {["Sign Crafts",].map((item) => {
                const sectionId = "services";
                return (
                <li key={item}>
                  {isHome ? (
                    <ScrollLink
                    to={sectionId}
                    spy={true}
                    smooth={true}
                    offset={-20} // Adjust based on your header height
                    duration={calculateDuration(sectionId)}
                    className="text-white hover:text-yellow-300 transition-colors cursor-pointer">
                    {item}
                  </ScrollLink>
                  ) : (
                    <RouteLink
                      key={item}
                      to={`/#${sectionId}`}
                     className="text-white hover:text-yellow-300 transition-colors"
                    >
                      <span>{item}</span>
                    </RouteLink>
              )}
                </li>
              )})}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-800 pt-8">
          <div className="space-y-4">
            <p className="text-sm cursor-default">Arab Sign Craft</p>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=No.32,North Street, Neelasandra, Bangalore - 560047"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-yellow-300 transition-colors duration-200"
            >
              2nd Stage, 6th Main, 3rd Cross, Austin Town, Bda Layout, Nilsandra, Bengaluru - 560047
            </a>
            <p className="text-sm cursor-default">Near Austin Town Sub Post Office</p>
              

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
               <href to="" className="hover:text-yellow-300 transition-colors duration-200">
                 <FacebookIcon className="w-6 h-6" />
               </href>
               <href to="" className="hover:text-yellow-300 transition-colors duration-200">
                 <Instagram className="w-6 h-6" />
               </href>
               <href to="" className="hover:text-yellow-300 transition-colors duration-200">
                 <Linkedin className="w-6 h-6" />
               </href>
            </div>

            {/* Copyright Notice */}
         <div className="mt-8 pt-8 border-t border-green-800 text-center cursor-default">
           <p className="text-sm">© {currentYear} Arab Sign Craft. All rights reserved.</p>
         </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

