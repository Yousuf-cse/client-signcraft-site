import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqAccordion({ faqs }) {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
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
  );
}