import { useState } from "react"
import { Expand } from "lucide-react"
import { Element } from "react-scroll"

const projects = [
  { id: 1, image: "https://res.cloudinary.com/dpw89wko7/image/upload/v1754651262/workImage3_woddwu.webp", gridArea: "main" },
  { id: 2, image: "https://res.cloudinary.com/dpw89wko7/image/upload/v1754651262/workImage2_k4rjtc.webp", gridArea: "topRight" },
  { id: 3, image: "https://res.cloudinary.com/dpw89wko7/image/upload/v1754651659/workImage5_i3psjd.webp", gridArea: "bottomLeft" },
  { id: 4, image: "https://res.cloudinary.com/dpw89wko7/image/upload/v1754651659/workImage4_lr19v2.webp", gridArea: "bottomRight" },
  { id: 5, image: "https://res.cloudinary.com/dpw89wko7/image/upload/v1754651262/workImage1_h6qxwm.webp", gridArea: "topLeft" },
]

export default function OurWork() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <Element name="our-work" className="bg-cream py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-10 tracking-tight">Work Gallery</h2>

        {/* Desktop Grid Layout */}
        <div
          className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[350px]"
          style={{
            gridTemplateAreas: `
                 "main main topLeft topRight"
                 "main main bottomLeft bottomRight"
               `,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300`}
              style={{ gridArea: project.gridArea }}
              onClick={() => setActiveImage(project.id)}
            >
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
                <Expand className="text-white" size={24} />
              </div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={`Project ${project.id}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Mobile Layout - Staggered Grid with Swipeable Carousel */}
        <div className="md:hidden">
          <div className="relative w-full overflow-hidden rounded-lg h-56 mb-4">
            <img
              src={projects[0].image || "/placeholder.svg"}
              alt={`Project ${projects[0].id}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.id}
                className={`relative h-36 rounded-lg overflow-hidden shadow-md ${index % 3 === 0 ? "col-span-2" : "col-span-1"}`}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[80vh]">
              <img
                src={projects.find((p) => p.id === activeImage)?.image || ""}
                alt={`Project ${activeImage}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </Element>
  )
}
