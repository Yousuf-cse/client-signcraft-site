export default function AboutSection({ heading, paragraphs }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#ffde21] mb-3 cursor-default">
        {heading}
      </h3>
      <p className="text-white leading-relaxed cursor-default">
        {paragraphs.map((text, idx) => (
          <span
            key={idx}
            className={`${idx > 0 ? "hidden md:block" : ""}`}
          >
            {text}
          </span>
        ))}
      </p>
    </div>
  );
}
