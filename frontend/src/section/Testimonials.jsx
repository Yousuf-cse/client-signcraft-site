import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Element } from "react-scroll"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The LED sign board we got from StudioKamama transformed our storefront. The quality and brightness are exceptional, and it's definitely increased our foot traffic!",
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    company: "Fusion Bites",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "I'm impressed with the acrylic sign board StudioKamama created for us. It's sleek, modern, and perfectly captures our brand essence. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Event Planner",
    company: "Stellar Events",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The flex sign boards we ordered for our outdoor event were fantastic. They were durable, eye-catching, and the team at StudioKamama was a pleasure to work with.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Element name="review" className="bg-green-800 py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-[#fffff8] text-center mb-12">What Our Clients Say</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#fffff8] rounded-2xl p-6 md:p-10 shadow-xl">
            <Quote className="text-green-800 w-12 h-12 mb-6" />
            <p className="text-lg md:text-xl text-gray-700 mb-6">{testimonials[currentIndex].quote}</p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-green-800 text-lg">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-[#fffff8] text-green-800 p-2 rounded-full hover:bg-[#2fff14e8] transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-[#fffff8] text-green-800 p-2 rounded-full hover:bg-[#2fff14e8] transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </Element>
  )
}

