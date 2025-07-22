import { useState,useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, MessagesSquare, ArrowRight, Check } from "lucide-react";
import { Element, scroller } from "react-scroll";


export default function Hero() {
  const [copiedForCall, setCopiedForCall] = useState(false);
  const [copiedForText, setCopiedForText] = useState(false);
  const buttonRef = useRef(null);

  const mobileNumber = 9916946749;
  const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);

  const HandleMobileForCall = (e) => {
    if (isMobile) {
      window.location.href = `tel:${mobileNumber}`;
    } else {
      navigator.clipboard.writeText(mobileNumber).then(() => {
        setCopiedForCall(true);
        setTimeout(() => {
          setCopiedForCall(false);
        }, 1000);
      });
    }
  };

  const HandleMobileForText = (e) => {
    if (isMobile) {
      window.location.href = `sms:${mobileNumber}`;
    } else {
      navigator.clipboard.writeText(mobileNumber).then(() => {
        setCopiedForText(true);
        setTimeout(() => {
          setCopiedForText(false);
        }, 1000);
      });
    }
  };
  

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
    <Element name="home" className="mt-20">
      <div className="bg-green-800 relative overflow-hidden lg:min-h-[calc(90vh-4rem)]">
        {/* Subtle background pattern */}
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
        <div className="hidden md:block absolute top-20 left-20 w-32 h-32 bg-yellow-300 rounded-full opacity-20 z-0"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto">
            {/* Left side content */}
            <div className="space-y-8 z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#fffff8] leading-tight tracking-tight cursor-default">
                YOUR VISION
                <br />
                <span className="bg-gradient-to-r from-white to-[#ffde21] bg-clip-text text-transparent">
                  OUR CRAFT
                </span>
              </h1>
              <p className="text-xl text-[#fffff8] opacity-80 font-light cursor-default">
                Transforming spaces with innovative signage solutions
              </p>
              <div className="flex flex-wrap gap-6 text-lg">
                <Link
                  to="/book-installation"
                  className="group flex items-center font-medium text-green-800 bg-[#ffde21] rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 px-8 py-4"
                >
                  Book Installation
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <div className="relative flex gap-4" ref={buttonRef}>
                  <button
                    onClick={HandleMobileForCall}
                    className="flex items-center justify-center w-14 h-14 font-bold text-[#fffff8] bg-green-700/50 rounded-full hover:bg-green-600/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <Phone className="w-6 h-6" />
                  </button>
                  {copiedForCall && (
                    <>
                      <div className="absolute bottom-full left-2/10 -translate-x-1/2 mb-2 pointer-events-none fade-in-out bg-white rounded-lg py-1 px-3 shadow-md flex items-center">
                        <div className="bg-[#ffde21] p-1 rounded-full mr-2">
                          <Check className="h-4 w-4 text-green-800" />
                        </div>
                        <span className="text-yellow-400 text-xs font-medium">
                          copied!
                        </span>
                      </div>

                      {/* Inline global style */}
                      <style>
                        {`
                          @keyframes fadeInOut {
                            0% { opacity: 0; transform: translateY(10px); }
                            15% { opacity: 1; transform: translateY(0); }
                            85% { opacity: 1; transform: translateY(0); }
                            100% { opacity: 0; transform: translateY(-10px); }
                          }

                          .fade-in-out {
                            animation: fadeInOut 2s ease-in-out;
                          }
                        `}
                      </style>
                    </>
                  )}

                  <button
                    onClick={HandleMobileForText}
                    className="flex items-center justify-center w-14 h-14 font-bold text-[#fffff8] bg-green-700/50 rounded-full hover:bg-green-600/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <MessagesSquare className="w-6 h-6" />
                  </button>
                  {copiedForText && (
                    <>
                      <div className="absolute bottom-full left-8/10 -translate-x-1/2 mb-2 pointer-events-none fade-in-out bg-white rounded-lg py-1 px-3 shadow-md flex items-center">
                        <div className="bg-[#ffde21] p-1 rounded-full mr-2">
                          <Check className="h-4 w-4 text-green-800" />
                        </div>
                        <span className="text-yellow-400 text-xs font-medium">
                          copied!
                        </span>
                      </div>

                      {/* Inline global style */}
                      <style>
                        {`
                          @keyframes fadeInOut {
                            0% { opacity: 0; transform: translateY(10px); }
                            15% { opacity: 1; transform: translateY(0); }
                            85% { opacity: 1; transform: translateY(0); }
                            100% { opacity: 0; transform: translateY(-10px); }
                          }

                          .fade-in-out {
                            animation: fadeInOut 2s ease-in-out;
                          }
                        `}
                      </style>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right side content - Ultra minimal with two columns */}
            <div className="relative flex items-center justify-center py-8 md:py-0 z-10">
              <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16 text-[#fffff8]">
                {/* Left column quotes */}
                <div className="space-y-8 md:space-y-12">
                  {[
                    "Innovative Designs",
                    "Premium Materials",
                    "Expert Installation",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="group flex items-center space-x-4 transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-white text-lg md:text-xl font-bold cursor-default">
                        •
                      </span>
                      <span className="text-lg md:text-xl font-light tracking-wide cursor-default">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Right column quotes */}
                <div className="space-y-8 md:space-y-12">
                  {["Timeless Quality", "Modern Vision", "Lasting Impact"].map(
                    (text, index) => (
                      <div
                        key={`right-${index}`}
                        className="group flex items-center space-x-4 transition-all duration-300 hover:translate-x-2"
                      >
                        <span className="text-white text-lg md:text-xl font-bold cursor-default">
                          •
                        </span>
                        <span className="text-lg md:text-xl font-light tracking-wide cursor-default">
                          {text}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

