import React, { useState, useEffect } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "LED Sign Board",
  "Acrylic Sign Board",
  "Flex Sign Board",
  "Sign Board Painting",
  "Vinyl Cutting",
  "Digital Printing",
  "Hand Painted Signs",
  "Neon Signs",
  "Home Nameplate",
  "others",
];

export default function BookInstallationPage({ hideFooter, showFooter }) {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    contactNumber: "",
  });

  useEffect(() => {
    // Hide footer when component mounts
    hideFooter();

    // Show footer again when component unmounts
    return () => showFooter();
  }, [hideFooter, showFooter]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row mt-16">
      {/* Left Side - Visually engaging content */}
      <div className="hidden md:flex md:w-1/2 bg-green-800 text-white p-12 flex-col justify-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-6xl font-bold mb-8 leading-tight cursor-default">
            Let's Bring Your <span className="text-[#ffde21]">Vision</span> to
            Life
          </h1>
          <p className="text-xl mb-8 opacity-90 cursor-default">
            Fill out the form to request a professional installation of your
            custom signage. Our team of experts will handle everything from
            setup to final placement.
          </p>

          <div className="space-y-6 mt-12">
            <div className="flex items-start">
              <div className="bg-[#ffde21] p-2 rounded-full mr-4">
                <CheckCircle className="text-green-800 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 cursor-default">
                  Professional Installation
                </h3>
                <p className="opacity-80 cursor-default">
                  Our team ensures your signage is perfectly installed and
                  aligned.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#ffde21] p-2 rounded-full mr-4">
                <CheckCircle className="text-green-800 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 cursor-default">
                  Quality Assurance
                </h3>
                <p className="opacity-80 cursor-default">
                  We guarantee the durability and quality of all our
                  installations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#ffde21] p-2 rounded-full mr-4">
                <CheckCircle className="text-green-800 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 cursor-default">
                  Timely Service
                </h3>
                <p className="opacity-80 cursor-default">
                  We respect your schedule and complete installations on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Header with back button */}
        <div className="bg-white p-6 flex items-center border-b border-white shadow-xl">
          <Link
            to="/"
            className="flex items-center text-green-800 hover:text-green-600 transition-colors font-medium"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>

        {/* Form content */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-gray-50">
          <div className="w-full max-w-md">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-green-800 mb-2 cursor-default">
                    Book Installation
                  </h2>
                  <p className="text-gray-600 cursor-default">
                    Fill out the form below to request our installation services
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name / Company Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 transition-colors"
                      placeholder="Enter your name or company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Select Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 transition-colors"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 transition-colors"
                      placeholder="Enter your contact number"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#ffde21] text-green-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300 cursor-pointer"
                    >
                      Book Installation
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Request Submitted!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your installation request. Our team will contact
                  you shortly to confirm the details.
                </p>
                <a
                  href="/"
                  className="inline-block bg-green-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Return to Home
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
