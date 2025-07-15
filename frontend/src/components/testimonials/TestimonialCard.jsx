import { Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#fffff8] rounded-2xl p-6 md:p-10 shadow-xl">
      <Quote className="text-green-800 w-12 h-12 mb-6" />
      <p className="text-lg md:text-xl text-gray-700 mb-6">{testimonial.quote}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-bold text-green-800 text-lg">{testimonial.name}</h3>
          <p className="text-gray-600">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
