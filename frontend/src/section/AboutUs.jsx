import {React, useEffect} from 'react'
import { ArrowRight } from 'lucide-react'
import { Element, scroller} from 'react-scroll'
import { Link, useLocation,  } from 'react-router-dom'


function AboutUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '');
      scroller.scrollTo(section, {
        duration: 1200,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [location]);
  return (
     <Element name='about-us'>
        <div className="bg-green-800 backdrop-blur-md p-8 md:p-10 mt-12 shadow-xl">
          {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>
          <div className="space-y-6 mt-10">
            <h2 className="text-4xl text-center md:text-4xl font-bold text-white mb-14 cursor-default">GET TO 
              <span className='text-[#ffde21]'> KNOW </span> US </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#ffde21] mb-3 cursor-default">OVERVIEW</h3>
                <p className="text-white leading-relaxed cursor-default">
                    At ArabSignCraft, we believe that signage is more than just a label—it’s a visual identity. Our mission is to transform ideas into striking visual displays that not only inform but also inspire. With a passion for creativity and craftsmanship, we have grown into a trusted name in the signage industry.
                  <span className="hidden md:block">Over the years, we’ve worked with clients across diverse industries. Each project is an opportunity to blend innovation with functionality, delivering signs that stand out and stand the test of time.
                  </span>
                  <span className="hidden md:block">Our team is composed of skilled artisans, designers, and project managers who understand the nuances of signage—from material selection to brand alignment. Whether it’s a bold storefront sign or a minimalistic wayfinding system, we approach every job with the same dedication and detail.
                  </span>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ffde21] mb-3 cursor-default">PROCESS</h3>
                <p className="text-white leading-relaxed cursor-default">
                Our process is designed to be seamless, collaborative, and client-focused. It begins with understanding your vision. We listen carefully, ask the right questions, and analyze your space to propose signage solutions that align with your goals and environment.
                <span className="hidden md:block">
                Once the concept is clear, our design team develops visuals that balance creativity and clarity. These are refined based on your feedback, ensuring the final design is both impactful and brand-consistent.
                </span>
                <span className='hidden md:block'>
                Fabrication is handled in-house using high-quality materials and modern tools. This allows us to maintain full control over the quality, timeline, and finish. Our technicians then install the signs with precision, ensuring safety and durability.
                </span>
                <span className='hidden md:block'>
                But our relationship doesn’t end at installation—we also offer aftercare and maintenance to keep your signage looking sharp and functioning well for years.
                </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Link 
            to='/about-us'
            className="bg-[#ffde21] text-green-800 px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors duration-300 font-semibold flex items-center gap-2 cursor-pointer">
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div> 
        </Element>

  )
}

export default AboutUs