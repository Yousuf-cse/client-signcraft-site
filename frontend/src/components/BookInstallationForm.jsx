import React, { useState,useEffect } from "react"
import { X } from "lucide-react"

export default function BookInstallationForm({ isOpen, onClose, services }) {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    contactNumber: "",
  })

  // Add effect to disable scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the body
      document.body.style.overflow = "hidden"
    } else {
      // Re-enable scrolling when modal closes
      document.body.style.overflow = "auto"
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // Reset form and close modal
    setFormData({ name: "", service: "", contactNumber: "" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md md:w-[calc(3/7*100%)] relative overflow-hidden mt-16">
        {/* Header with close button */}
        <div className="bg-green-800 text-white p-6 flex justify-between items-center">
          <h3 className="text-xl font-bold">Book Installation</h3>
          <button onClick={onClose} className="text-white hover:text-yellow-300 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name / Company Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 transition-colors"
              placeholder="Enter your name or company name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Select Service *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 transition-colors"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number *
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 transition-colors"
              placeholder="Enter your contact number"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#ffde21] text-green-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Book Installation
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}