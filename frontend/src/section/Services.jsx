import { useState } from "react";
import { Element } from "react-scroll";
import { initialServices } from "../components/services/initialServices";
import { additionalServices } from "../components/services/additionalServices";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  const [showMore, setShowMore] = useState(false);

  const displayedServices = showMore
    ? [...initialServices, ...additionalServices]
    : initialServices;

  return (
    <Element name="services" className="bg-[#fffff8] py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 cursor-default">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto cursor-default">
            Professional signage solutions for your business needs. We offer a
            comprehensive range of services to help your brand stand out.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
              const serviceEntry = Object.entries(servicesData).find(
                ([slug, data]) => data.name === service.title
              );
          const [slug, fullServiceData] = serviceEntry || [];

            return (
              <Link
                to={`/services/${slug}`}
                state={{ slug, service: fullServiceData }}
                key={index}
                className="group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-4 bg-green-800 text-[#fffff8] rounded-xl p-3 inline-block group-hover:bg-[#2fff14e8] group-hover:text-green-800 transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 hidden md:block">
                  {service.description}
                </p>
                <ul className="space-y-2 hidden md:block">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-green-800 text-[#fffff8] px-8 py-3 rounded-full hover:bg-[#99ff8be8] hover:text-green-800 transition-colors duration-300 font-semibold"
          >
            {showMore ? "See Less" : "Show More"}
          </button>
        </div>
      </div>
    </Element>
  );
}
