"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Element } from "react-scroll";

export default function HelpSupport() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll"); // Cleanup on unmount
  }, [showForm]);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What materials do you use for sign crafts?",
      answer:
        "We use high-quality materials such as acrylic, metal, wood, and LED for durability and aesthetic appeal.",
    },
    {
      question: "Can I customize my sign design?",
      answer:
        "Yes! We offer fully customizable sign designs. You can upload your own design or work with our team to create a unique sign.",
    },
    {
      question: "How long does it take to complete an order?",
      answer:
        "The production time depends on the complexity and size of your sign. Typically, it takes 5-10 business days for completion.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "Yes! We provide professional installation services within our service areas. Contact us for more details.",
    },
    {
      question: "What is your return/refund policy?",
      answer:
        "Since our signs are custom-made, we do not accept returns. However, if there's an issue with the craftsmanship, we'll work to resolve it.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is shipped, we will provide a tracking number via email.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "We offer discounts for bulk and business orders. Contact us for a quote.",
    },
  ];

  return (
    <Element name="help" className="min-h-screen bg-[#fffff8]">
      <div className="p-12 text-center">
        <h1 className="text-2xl font-bold text-green-800 mt-8">Help & Support</h1>
        <p className="text-gray-600">Find answers to common questions or reach out to our support team</p>
      </div>

      <div className="max-w-2xl mx-auto p-8">
        <h2 className="text-center text-green-700 text-xl font-bold">Frequently Asked Questions (FAQs)</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg mb-4 mt-4 overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 text-left bg-white cursor-pointer border-none flex justify-between font-bold text-green-800"
              >
                {faq.question}
                {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedFaq === index && (
                <div className="p-4 bg-green-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700"
          >
            Need More Help?
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 flex justify-center items-center bg-white mt-16 bg-opacity-90 z-50">
            <div className="bg-white p-6 w-96 relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                <X size={24} />
              </button>
              <h2 className="text-green-700 text-xl font-bold text-center mb-4">Need More Help? Contact Us!</h2>
              <form>
                <label className="block mb-2 font-bold">Name</label>
                <input type="text" placeholder="Your full name" className="w-full p-2 border border-gray-300 rounded mb-4" />

                <label className="block mb-2 font-bold">Email</label>
                <input type="email" placeholder="your.email@example.com" className="w-full p-2 border border-gray-300 rounded mb-4" />

                <label className="block mb-2 font-bold">Message</label>
                <textarea placeholder="Please describe your question or issue..." className="w-full p-2 border border-gray-300 rounded h-24 mb-4"></textarea>

                <button type="submit" className="w-full p-3 bg-green-600 text-white font-bold rounded cursor-pointer">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <div className="bg-yellow-100 p-4 text-center border-t border-yellow-300">
        <p className="text-yellow-700 font-bold">Need urgent assistance? Call our support hotline at 1-800-SIGN-HELP (Monday-Friday, 9AM-5PM EST)</p>
      </div>
    </Element>
  );
}
