import { useState } from "react"
import { Lightbulb, PaintBucket, Box, Palette, Scissors, Printer, Brush, Megaphone, Home} from "lucide-react"
import { Element } from "react-scroll"

const initialServices = [
  {
    title: "LED Sign Board",
    description:
      "Energy-efficient LED signage solutions with bright, eye-catching displays perfect for 24/7 visibility.",
    icon: Lightbulb,
    features: ["Energy efficient", "High visibility", "Custom designs", "Long-lasting"],
  },
  {
    title: "Acrylic Sign Board",
    description:
      "Premium acrylic signage with elegant finish and durability. Perfect for indoor and outdoor business identification.",
    icon: Box,
    features: ["Weather resistant", "Modern look", "Crystal clear", "Durable"],
  },
  {
    title: "Flex Sign Board",
    description:
      "Versatile and cost-effective flex signage solutions. Ideal for large format advertising and temporary promotions.",
    icon: PaintBucket,
    features: ["Cost effective", "Large format", "Quick installation", "Weatherproof"],
  },
  {
    title: "Sign Board Painting",
    description:
      "Professional sign board painting services with attention to detail. High-quality paints and finishing for lasting impressions.",
    icon: Palette,
    features: ["Custom colors", "Professional finish", "Weather resistant", "Detailed work"],
  },
]

const additionalServices = [
  {
    title: "Vinyl Cutting",
    description:
      "Precision vinyl cutting for custom decals, stickers, and lettering. Perfect for vehicle wraps and window graphics.",
    icon: Scissors,
    features: ["Precision cutting", "Custom designs", "Durable materials", "Various colors"],
  },
  {
    title: "Digital Printing",
    description:
      "High-quality digital printing services for banners, posters, and large format graphics. Vibrant colors and sharp details.",
    icon: Printer,
    features: ["High resolution", "Quick turnaround", "Wide color gamut", "Various materials"],
  },
  {
    title: "Hand Painted Signs",
    description:
      "Traditional hand-painted signs with a personal touch. Ideal for vintage looks and unique, artistic signage.",
    icon: Brush,
    features: ["Unique designs", "Artistic touch", "Traditional look", "Custom colors"],
  },
  {
    title: "Neon Signs",
    description:
      "Eye-catching neon signs for a classic or retro look. Custom designs for businesses, events, or home decor.",
    icon: Megaphone,
    features: ["Bright display", "Custom shapes", "Indoor/outdoor use", "Energy efficient LED neon"],
  },
  {
    title: "Home Nameplate",
    description:
      "Stylish and customizable home nameplates designed to reflect your identity and elevate your entrance — crafted with precision and built to last.",
    icon: Home,
    features: ["Custom Designs", "Weatherproof ", "Easy Installation", "Premium Finish"],
  },
]

export default function Services() {
  const [showMore, setShowMore] = useState(false)

  const displayedServices = showMore ? [...initialServices, ...additionalServices] : initialServices

  return (
    <Element name="services" className="bg-[#fffff8] py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 cursor-default">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto cursor-default">
            Professional signage solutions for your business needs. We offer a comprehensive range of services to help
            your brand stand out.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ">
          {displayedServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-4 bg-green-800 text-[#fffff8] rounded-xl p-3 inline-block group-hover:bg-[#2fff14e8] group-hover:text-green-800 transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 hidden md:block">{service.description}</p>
                <ul className="space-y-2 hidden md:block">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
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
  )
}

