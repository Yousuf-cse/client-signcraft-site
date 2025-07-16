import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { faqs } from "../components/HelpSupport/faqData"; 
import FaqAccordion from "../components/HelpSupport/FaqAccordion";
import HelpForm from "../components/HelpSupport/HelpForm";

export default function HelpSupport() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll"); // Cleanup on unmount
  }, [showForm]);

  return (
    <Element name="help" className="min-h-screen bg-[#fffff8]">
      <div className="p-12 text-center">
        <h1 className="text-2xl font-bold text-green-800 mt-8">Help & Support</h1>
        <p className="text-gray-600">
          Find answers to common questions or reach out to our support team
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-center text-green-700 text-xl font-bold">
          Frequently Asked Questions (FAQs)
        </h2>

        {/* Accordion Component */}
        <FaqAccordion faqs={faqs} />

        <div className="text-center mt-8">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700"
          >
            Need More Help?
          </button>
        </div>

        {/* Form Popup */}
        {showForm && <HelpForm onClose={() => setShowForm(false)} />}
      </div>

      <div className="bg-yellow-100 p-4 text-center border-t border-yellow-300">
        <p className="text-yellow-700 font-bold">
          Need urgent assistance? Call our support hotline at 1-800-SIGN-HELP (Monday-Friday, 9AM-5PM EST)
        </p>
      </div>
    </Element>
  );
}
