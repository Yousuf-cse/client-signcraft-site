import { useState, useEffect } from "react";

const Quotes = () => {
  const [currentSentence, setCurrentSentence] = useState(0);

  const sentences = [
    "WE DON’T JUST CREATE SIGNS; WE DESIGN EXPERIENCES, BUILD BRAND IDENTITIES, AND TURN ORDINARY SPACES INTO EXTRAORDINARY SHOWCASES OF ART AND INNOVATION",
    "YOUR BRAND DESERVES MORE THAN JUST A SIGN—IT NEEDS A POWERFUL VISUAL STATEMENT THAT CAPTIVATES, INSPIRES, AND LEAVES A LASTING IMPRESSION",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length); // Cycle through sentences
    }, 6000); // 7 seconds (5 seconds stay + 2 seconds transition)

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="relative overflow-hidden h-7 flex justify-center items-center bg-white mt-2">
      <div
        className="absolute text-sm text-green-800 animate-slide"
        key={currentSentence} // Key ensures re-render on sentence change
      >
        {sentences[currentSentence]}
      </div>
    </div>
  );
};

export default Quotes;
