import React, { useState, useEffect } from "react"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { Link, useLocation } from "react-router-dom"


// Tab interface
const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("about")
  const [expandedSection, setExpandedSection] = useState("why-us")
  const location = useLocation()

  // Parse URL parameters on component mount and when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get("tab");
    const sectionParam = params.get("section");
  
    if (tabParam && (tabParam === "about" || tabParam === "policy")) {
      setActiveTab(tabParam);
    }
  
    if (sectionParam) {
      setExpandedSection(sectionParam);
  
      // Add a small delay to ensure the section element is rendered
      setTimeout(() => {
        const sectionElement = document.getElementById(sectionParam);
        if (sectionElement) {
          const yOffset = -100; // Change this value to control the offset (e.g., for a sticky header)
          const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);
  

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  // Update the tab click handler to also set the first item of the corresponding tabs array
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // When switching to policy tab, set expandedSection to the first policy tab's id
    if (tab === "policy") {
      setExpandedSection("privacy-policy");
    } else if (tab === "about") {
      // Optional: You could also reset to the first about tab when switching back
      setExpandedSection("why-us");
    }
  };

  // About section tabs
  const aboutTabs = [
    {
      id: "why-us",
      label: "Why Us",
      content: (
        <div className="space-y-4" id="why-us">
          <h3 className="text-2xl font-bold text-green-800">Why Choose Our Sign Solutions</h3>
          <p className="text-gray-700">
            We stand out in the signage industry through our commitment to quality, innovation, and customer
            satisfaction. Our team of skilled professionals brings years of experience and a passion for excellence to
            every project.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#ffde21] mr-2">•</span>
              <span>Premium materials that ensure durability and longevity</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffde21] mr-2">•</span>
              <span>Cutting-edge technology for precise and vibrant results</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffde21] mr-2">•</span>
              <span>Customized solutions tailored to your specific needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ffde21] mr-2">•</span>
              <span>Exceptional customer service from concept to installation</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "team",
      label: "Team",
      content: (
        <div className="space-y-4" id="team">
          <h3 className="text-2xl font-bold text-green-800">Our Expert Team</h3>
          <p className="text-gray-700">
            Our team consists of talented designers, skilled craftsmen, and experienced installers who work together to
            deliver exceptional signage solutions. Each member brings unique expertise and a shared commitment to
            excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-green-800">Team Member {member}</h4>
                  <p className="text-sm text-gray-600">Position Title</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "company-overview",
      label: "Company Overview",
      content: (
        <div className="space-y-4" id="company-overview">
          <h3 className="text-2xl font-bold text-green-800">Company Overview</h3>
          <p className="text-gray-700">
            Founded in [Year], our company has grown to become a leading provider of custom signage solutions in the
            region. We serve a diverse range of clients, from small local businesses to large corporate enterprises,
            delivering high-quality signs that make a lasting impression.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-800">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-800">50+</div>
              <div className="text-sm text-gray-600">Business Partners</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-800">10+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "our-story",
      label: "Our Story",
      content: (
        <div className="space-y-4" id="our-story">
          <h3 className="text-2xl font-bold text-green-800">Our Story</h3>
          <p className="text-gray-700">
            Our journey began with a simple vision: to create signage that not only identifies businesses but also tells
            their unique stories. What started as a small workshop has evolved into a comprehensive signage solution
            provider, driven by passion, creativity, and a commitment to excellence.
          </p>
          <div className="space-y-4 mt-4">
            <div className="border-l-4 border-green-800 pl-4">
              <div className="font-bold text-green-800">2010</div>
              <p className="text-gray-700">Founded as a small sign-making workshop</p>
            </div>
            <div className="border-l-4 border-green-800 pl-4">
              <div className="font-bold text-green-800">2015</div>
              <p className="text-gray-700">Expanded services to include digital and LED signage</p>
            </div>
            <div className="border-l-4 border-green-800 pl-4">
              <div className="font-bold text-green-800">2018</div>
              <p className="text-gray-700">Opened a larger production facility to meet growing demand</p>
            </div>
            <div className="border-l-4 border-green-800 pl-4">
              <div className="font-bold text-green-800">Present</div>
              <p className="text-gray-700">Continuing to innovate and expand our service offerings</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "our-mission",
      label: "Our Mission",
      content: (
        <div className="space-y-4" id="our-mission">
          <h3 className="text-2xl font-bold text-green-800">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to help businesses communicate their brand identity effectively through high-quality,
            innovative signage solutions. We are committed to delivering exceptional craftsmanship, personalized
            service, and sustainable practices that benefit our clients, communities, and the environment.
          </p>
          <div className="bg-green-50 p-6 rounded-xl mt-4">
            <h4 className="font-bold text-green-800 mb-2">Our Values</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#ffde21] mr-2">•</span>
                <span>
                  <strong>Quality:</strong> We never compromise on the materials or craftsmanship of our products
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ffde21] mr-2">•</span>
                <span>
                  <strong>Innovation:</strong> We continuously explore new technologies and techniques
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ffde21] mr-2">•</span>
                <span>
                  <strong>Integrity:</strong> We operate with honesty and transparency in all our dealings
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ffde21] mr-2">•</span>
                <span>
                  <strong>Customer Focus:</strong> We prioritize understanding and meeting our clients' needs
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  // Policy section tabs
  const policyTabs = [
    {
      id: "privacy-policy",
      label: "Privacy Policy",
      content: (
        <div className="space-y-4" id="privacy-policy">
          <h3 className="text-2xl font-bold text-green-800">Privacy Policy</h3>
          <p className="text-gray-700">
            We are committed to protecting your privacy and ensuring the security of your personal information. This
            Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website or
            services.
          </p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-bold text-green-800">Information We Collect</h4>
              <p className="text-gray-700">
                We collect information that you provide directly to us, such as when you fill out a contact form,
                request a quote, or place an order. This may include your name, email address, phone number, and
                business details.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-800">How We Use Your Information</h4>
              <p className="text-gray-700">
                We use your information to provide and improve our services, communicate with you, and process your
                transactions. We do not sell or share your personal information with third parties for marketing
                purposes.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Data Security</h4>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, or disclosure.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "warranty-policy",
      label: "Warranty & Damage Policy",
      content: (
        <div className="space-y-4" id="warranty-policy">
          <h3 className="text-2xl font-bold text-green-800">Warranty & Damage Policy</h3>
          <p className="text-gray-700">
            We stand behind the quality of our products and offer comprehensive warranty coverage to ensure your
            complete satisfaction. Our warranty policy is designed to provide you with peace of mind and protection for
            your investment.
          </p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-bold text-green-800">Warranty Coverage</h4>
              <p className="text-gray-700">
                All our signage products come with a standard warranty that covers manufacturing defects and material
                failures under normal use conditions. The warranty period varies by product type:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>LED Signs: 3-year warranty on components and workmanship</li>
                <li>Acrylic Signs: 2-year warranty against fading and cracking</li>
                <li>Flex Signs: 1-year warranty on printing quality and material</li>
                <li>Painted Signs: 2-year warranty on paint adhesion and color retention</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Damage Claims</h4>
              <p className="text-gray-700">
                If your sign is damaged during shipping or installation by our team, please notify us within 48 hours.
                We will assess the damage and provide appropriate repairs or replacement at no additional cost.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      label: "Intellectual Property Policy",
      content: (
        <div className="space-y-4" id="intellectual-property">
          <h3 className="text-2xl font-bold text-green-800">Intellectual Property Policy</h3>
          <p className="text-gray-700">
            We respect intellectual property rights and expect our clients to do the same. This policy outlines our
            approach to intellectual property matters related to our services and your responsibilities when providing
            content for signage.
          </p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-bold text-green-800">Our Intellectual Property</h4>
              <p className="text-gray-700">
                All designs, concepts, and creative work developed by our team remain our intellectual property unless
                explicitly transferred through a written agreement. We may showcase your completed signage in our
                portfolio unless you request otherwise.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Client Responsibilities</h4>
              <p className="text-gray-700">
                When providing logos, images, or text for your signage, you must ensure that you have the legal right to
                use these materials. You agree to indemnify us against any claims of copyright or trademark infringement
                related to content you provide.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "refund-policy",
      label: "Refund Policy",
      content: (
        <div className="space-y-4" id="refund-policy">
          <h3 className="text-2xl font-bold text-green-800">Refund Policy</h3>
          <p className="text-gray-700">
            We are committed to your satisfaction with our products and services. Our refund policy is designed to be
            fair and transparent while acknowledging the custom nature of our signage solutions.
          </p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-bold text-green-800">Custom Orders</h4>
              <p className="text-gray-700">
                Due to the custom nature of our signage products, all sales are generally final once production has
                begun. However, we understand that circumstances may arise that require special consideration.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Cancellation Period</h4>
              <p className="text-gray-700">
                If you need to cancel an order, you may do so within 48 hours of placing the order and receive a full
                refund of any deposit paid. After this period, but before production begins, cancellations may be
                subject to a 25% administrative fee.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Quality Issues</h4>
              <p className="text-gray-700">
                If you receive a sign that does not meet our quality standards or the approved specifications, please
                contact us within 7 days. We will work with you to resolve the issue through repair, replacement, or
                refund as appropriate.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "terms-of-service",
      label: "Terms of Service",
      content: (
        <div className="space-y-4" id="terms-of-service">
          <h3 className="text-2xl font-bold text-green-800">Terms of Service</h3>
          <p className="text-gray-700">
            By engaging our services, you agree to the following terms and conditions that govern our relationship and
            the provision of our signage solutions. These terms are designed to ensure a clear understanding of our
            mutual obligations.
          </p>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-bold text-green-800">Service Agreement</h4>
              <p className="text-gray-700">
                When you place an order with us, you enter into a service agreement that includes design, production,
                and installation phases as applicable. Each phase may require your approval before proceeding to the
                next.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Payment Terms</h4>
              <p className="text-gray-700">
                We typically require a 50% deposit to begin work, with the remaining balance due upon completion before
                installation. For larger projects, we may establish a payment schedule based on project milestones.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Timeline and Delays</h4>
              <p className="text-gray-700">
                While we strive to meet all projected timelines, certain factors such as weather conditions, permit
                approvals, or material availability may cause delays. We will communicate any potential delays promptly
                and work to minimize their impact.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-green-800">Dispute Resolution</h4>
              <p className="text-gray-700">
                In the event of a dispute, we commit to working with you to find a mutually acceptable resolution. If
                necessary, disputes will be resolved through mediation before any legal action is taken.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      {/* Header */}
      <div className="bg-green-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link to="/#about-us" className="text-white hover:text-yellow-300 transition-colors flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 cursor-default">About Us 💡</h1>
          <p className="text-xl opacity-90 max-w-3xl cursor-default">
            Learn more about our company, our mission, and the policies that guide our work.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap mb-8 border-b">
            <button
              className={`px-6 py-3 font-semibold text-lg transition-colors cursor-pointer ${
                activeTab === "about"
                  ? "text-green-800 border-b-2 border-[#ffde21]"
                  : "text-gray-500 hover:text-green-800"
              }`}
              onClick={() => handleTabClick("about")}
            >
              About
            </button>
            <button
              className={`px-6 py-3 font-semibold text-lg transition-colors cursor-pointer ${
                activeTab === "policy"
                  ? "text-green-800 border-b-2 border-[#ffde21]"
                  : "text-gray-500 hover:text-green-800"
              }`}
              onClick={() => handleTabClick("policy")}
            >
              Policy
            </button>
          </div>

          {/* Desktop View - Tabs */}
          <div className="hidden md:flex">
            {/* Left sidebar with tab buttons */}
            <div className="w-1/4 pr-6">
              <div className="sticky top-6">
                <h3 className="font-bold text-gray-500 uppercase text-sm mb-4 cursor-default">
                  {activeTab === "about" ? "About Sections" : "Policy Documents"}
                </h3>
                <div className="space-y-2">
                  {(activeTab === "about" ? aboutTabs : policyTabs).map((tab) => (
                    <button
                      key={tab.id}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                        expandedSection === tab.id
                          ? "bg-green-800 text-white"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-800"
                      }`}
                      onClick={() => setExpandedSection(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content area */}
            <div className="w-3/4">
              <div className="bg-white rounded-xl shadow-md p-8 cursor-default">
                {(activeTab === "about" ? aboutTabs : policyTabs).find((tab) => tab.id === expandedSection)?.content}
              </div>
            </div>
          </div>
          {/* Mobile View - Accordion */}
          <div className="md:hidden space-y-4">
            {(activeTab === "about" ? aboutTabs : policyTabs).map((tab) => (
              <div key={tab.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-green-800 hover:bg-green-50 transition-colors"
                  onClick={() => toggleSection(tab.id)}
                >
                  {tab.label}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${expandedSection === tab.id ? "transform rotate-180" : ""}`}
                  />
                </button>
                {expandedSection === tab.id && <div className="px-6 pb-6">{tab.content}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage