// 📁 src/components/Footer/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { FacebookIcon, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link as ScrollLink, Element, Events, scrollSpy } from "react-scroll";

import { policyLinks, aboutLinks, socialLinks, contactInfo, addressLines } from "../data/footerData"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /Android|iphone|ipad|ipod/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    Events.scrollEvent.register("begin", () => console.log("Scroll begin"));
    Events.scrollEvent.register("end", () => console.log("Scroll end"));
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <footer className="bg-[#073021] text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="cursor-default">
          <h3 className="text-xl font-semibold mb-4">
            Arab <span className="text-yellow-500">Sign Craft</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-6">
          <div>
            <h3 className="text-white text-lg font-medium mb-4 cursor-default">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((item) => (
                <li key={item.id}>
                  <RouteLink
                    to={`/about-us?tab=about&section=${item.id}`}
                    className="text-white hover:text-yellow-300 transition-colors"
                  >
                    {item.label}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4 cursor-default">Policy</h3>
            <ul className="space-y-2">
              {policyLinks.map((item) => (
                <li key={item.id}>
                  <RouteLink
                    to={`/about-us?tab=policy&section=${item.id}`}
                    className="text-white hover:text-yellow-300 transition-colors"
                  >
                    {item.label}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 cursor-default">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {isMobile ? (
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm text-white hover:text-yellow-300"
                    title="Click to call"
                  >
                    {contactInfo.phone}
                  </a>
                ) : (
                  <span className="text-sm">{contactInfo.phone}</span>
                )}
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm hover:text-yellow-300 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4 cursor-default">Our Services</h3>
            <ul className="space-y-2">
              {["Sign Crafts"].map((item) => {
                const sectionId = "services";
                return (
                  <li key={item}>
                    {isHome ? (
                      <ScrollLink
                        to={sectionId}
                        spy={true}
                        smooth={true}
                        offset={-20}
                        className="text-white hover:text-yellow-300 transition-colors cursor-pointer"
                      >
                        {item}
                      </ScrollLink>
                    ) : (
                      <RouteLink
                        to={`/#${sectionId}`}
                        className="text-white hover:text-yellow-300 transition-colors"
                      >
                        <span>{item}</span>
                      </RouteLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8">
          <div className="space-y-4">
            <p className="text-sm cursor-default">Arab Sign Craft</p>
            <a
              href={addressLines.mapLink}
              target="_blank"
gem              rel="noopener noreferrer"
              className="text-sm hover:text-yellow-300 transition-colors duration-200"
            >
              {addressLines.line1}
            </a>
            <p className="text-sm cursor-default">{addressLines.line2}</p>

            <div className="flex gap-4 pt-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-green-800 text-center cursor-default">
              <p className="text-sm">© {currentYear} Arab Sign Craft. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
