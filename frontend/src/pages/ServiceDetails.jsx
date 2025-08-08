import { useState } from "react"
import { Calendar, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import ImageGalleryModal from "../components/ImageGalleryModal"

export default function ServiceDetailsPage() {
      const [selectedImage, setSelectedImage] = useState(null)
      const [showModal, setShowModal] = useState(false);
      const location = useLocation()
      const navigate = useNavigate()
      const { slug, service } = location.state || {}
      const images = service.images;
      const maxVisibleImage = 5;
      const visibleImages = service.images.slice(0, maxVisibleImage);
      const hiddenImageCount = service.images.length - maxVisibleImage;
      const showFullGallery = () => {
        setShowModal(true)
      };

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-green-600 hover:text-green-700">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white mt-16">
      {/* Header */}
<div className="bg-green-800 text-white py-16 relative overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    <Link
      to="/"
      className="inline-flex items-center text-green-100 hover:text-white mb-6 transition-colors"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Home
    </Link>
    <h1 className="text-4xl md:text-5xl font-bold mb-4 cursor-default bg-gradient-to-r from-white to-[#ffde21] bg-clip-text text-transparent leading-[1.4]">
      {service.name}
    </h1>
    <p className="text-xl text-green-100 max-w-3xl leading-relaxed cursor-default">
      {service.description}
    </p>
  </div>

<img
  src="https://res.cloudinary.com/dpw89wko7/image/upload/v1754651836/signCraftArtImage_umrbun.png"
  alt="Decorative"
  loading="lazy"
  className="absolute right-0 top-20 bottom-16 my-auto w-full md:w-[30vw] max-w-sm lg:max-w-md h-auto object-contain opacity-10 md:opacity-60 pointer-events-none z-0"
/>

</div>




      {/* Book Now Section */}
      <div className="bg-white py-12">

        <div className="container mx-auto px-4 text-center">
          <Link
            to="/book-installation"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <Calendar className="w-5 h-5 inline mr-2" />
            Schedule Now
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
 {/* Desktop Grid Layout */}
<div
  className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[350px] px-8 mt-4"
  style={{
    gridTemplateAreas: `
      "main main topLeft topRight"
      "main main bottomLeft bottomRight"
    `,
  }}
>
  {visibleImages.map((image, index) => {
    const gridAreas = ["main", "topLeft", "topRight", "bottomLeft", "bottomRight"];
    const gridArea = gridAreas[index % gridAreas.length];
    const isLastVisible = index === maxVisibleImage - 1 && hiddenImageCount > 0;

    return (
      <div
        key={index}
        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        style={{ gridArea }}
        onClick={() => {
          if (isLastVisible) showFullGallery();
          else setSelectedImage(image);
        }}
      >
        <img
          src={image}
          alt={`${service.name} example ${index + 1}`}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isLastVisible ? "brightness-75" : "hover:scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {isLastVisible ? (
            <span className="text-white text-xl font-semibold">
              +{hiddenImageCount} more
            </span>
          ) : (
            <span className="text-white text-sm font-medium opacity-0 hover:opacity-100 transition-opacity">
              Click to view
            </span>
          )}
        </div>
      </div>
    );
  })}
  {showModal && (
  <ImageGalleryModal images={images} onClose={() => setShowModal(false)} />
)}
</div>


{/* Mobile Layout*/}
<div className="md:hidden px-4">
  {/* First image */}
  {visibleImages.slice(0, 1).map((image, index) => (
    <div
      key={index}
      className="relative w-full overflow-hidden rounded-lg h-56 mb-4 cursor-pointer"
      onClick={() => setSelectedImage(image)}
    >
      <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
    </div>
  ))}

  {/* Remaining images */}
  <div className="grid grid-cols-2 gap-3">
    {visibleImages.slice(1).map((image, index) => {
      const isLastVisible = index === 3 && hiddenImageCount > 0;

      return (
        <div
          key={index}
          className={`relative h-36 rounded-lg overflow-hidden shadow-md cursor-pointer ${
            index % 3 === 0 ? "col-span-2" : "col-span-1"
          }`}
          onClick={() => {
            if (isLastVisible) showFullGallery();
            else setSelectedImage(image);
          }}
        >
          <img
            src={image}
            alt={`Image ${index + 2}`}
            className={`w-full h-full object-cover ${isLastVisible ? "brightness-75" : ""}`}
          />
          {isLastVisible && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-white text-xl font-semibold">
                +{hiddenImageCount} more
              </span>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>



      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center cursor-default">Why Choose Our {service.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 cursor-default">Premium Quality</h3>
              <p className="text-gray-600 cursor-default">
                High-grade materials and professional craftsmanship ensure long-lasting durability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 cursor-default">Custom Design</h3>
              <p className="text-gray-600 cursor-default">
                Tailored solutions that perfectly match your brand identity and requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 cursor-default">Fast Installation</h3>
              <p className="text-gray-600 cursor-default">
                Quick and professional installation with minimal disruption to your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
        onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
