import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Mail, Phone, MapPin } from 'lucide-react';

const SwarnaRubberHomepage = () => {
  const [activeCategory, setActiveCategory] = useState('electrical');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = {
    electrical: {
      title: 'Electrical Seals',
      description: 'Specialized seals for electrical applications, ensuring safety and performance in power systems.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=600&fit=crop',
      details: 'High-quality electrical seals designed for transformer bushings, cable glands, and electrical enclosures.'
    },
    mechanical: {
      title: 'Mechanical Seals',
      description: 'Precision-engineered mechanical seals for pumps, compressors, and rotating equipment.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop',
      details: 'Advanced mechanical sealing solutions for industrial machinery and automotive applications.'
    },
    energy: {
      title: 'Energy Seals',
      description: 'Robust sealing solutions for renewable energy and power generation systems.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
      details: 'Specialized seals for wind turbines, solar systems, and energy storage applications.'
    },
    industrial: {
      title: 'Industrial Seals',
      description: 'Comprehensive sealing solutions for diverse industrial manufacturing processes.',
      image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&h=600&fit=crop',
      details: 'Custom industrial seals for hydraulic systems, pneumatic equipment, and process machinery.'
    },
    construction: {
      title: 'Construction Seals',
      description: 'Durable sealing products for construction equipment and infrastructure projects.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop',
      details: 'Heavy-duty seals for construction machinery, building systems, and civil engineering.'
    },
    door: {
      title: 'Door & Soundproofing',
      description: 'Effective sealing solutions for acoustic insulation and weather protection.',
      image: 'https://images.unsplash.com/photo-1527266237111-a4989d028b4b?w=1200&h=600&fit=crop',
      details: 'Premium door seals and gaskets for noise reduction and thermal efficiency.'
    },
    vibration: {
      title: 'Vibration Dampening',
      description: 'Advanced rubber products for vibration isolation and shock absorption.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
      details: 'Specialized dampening solutions for machinery, automotive, and aerospace applications.'
    },
    rail: {
      title: 'Rail Transit Seals',
      description: 'Specialized seals for trains and transit systems, ensuring safety and performance on the move.',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&h=600&fit=crop',
      details: 'High-performance sealing systems for metro, railway, and high-speed train applications.'
    }
  };

  const heroSlides = [
    {
      title: 'RUBBER PRODUCTS',
      subtitle: 'Engineered for durability and precision, our sealing products serve diverse industries from high-speed rail to construction.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1600&h=700&fit=crop'
    },
    {
      title: 'QUALITY EXCELLENCE',
      subtitle: 'OEM production, custom product development, and comprehensive after-sales services.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=700&fit=crop'
    },
    {
      title: 'INNOVATIVE SOLUTIONS',
      subtitle: 'Driven by principles of "Human and Technology," building long-term partnerships with international clients.',
      image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d1?w=1600&h=700&fit=crop'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <div className="relative h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            
            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl">
                {/* Animated Badge */}
                <div className="inline-flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 text-sm font-medium">Industry Leading Solutions</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-white">{slide.title.split(' ')[0]}</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {slide.title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center space-x-2">
                    <span>Explore Products</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 p-4 rounded-full transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 p-4 rounded-full transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-cyan-400' 
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-6 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm">Scroll</span>
            <ChevronRight className="w-4 h-4 text-white/60 rotate-90" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">OUR STRENGTHS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We take pride in ensuring your satisfaction.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in OEM production, custom product development, and comprehensive after-sales services, catering to diverse client needs.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">
          <div className="relative p-8 rounded-lg shadow-md overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/background-text.jpg')",
              }}
            />

            {/* Color overlay */}
            <div className="absolute inset-0 bg-cyan-50/80" />

            {/* Content */}
            <div className="relative">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Strict Quality Control
              </h3>

              <p className="text-slate-700">
                Our robust quality management system ensures that no defective products
                leave our factory. From material inspection to in-process and final checks,
                every stage is meticulously monitored.
              </p>
            </div>
          </div>


            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Diverse Product Portfolio</h3>
              <p className="text-gray-600">
                Our product portfolio includes rubber seal strips, foam seal strips, EPDM rubber seals, silicone rubber seals, and more, all produced using cutting-edge technology and adhering to stringent quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer-Centric Philosophy</h3>
              <p className="text-gray-600">
                Driven by the principles of "Human and Technology," we have built long-term partnerships with international clients and earned an excellent reputation for reliability and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Category Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${categories[activeCategory].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-12">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {categories[activeCategory].title}
                </h2>
                <p className="text-xl text-gray-200 mb-2">
                  {categories[activeCategory].description}
                </p>
                <p className="text-gray-300">
                  {categories[activeCategory].details}
                </p>
              </div>

              {/* Product Card */}
              <div className="bg-white rounded-lg p-6 max-w-xs mb-8">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=200&fit=crop"
                  alt="Product"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Category Buttons */}
              <div className="flex flex-wrap gap-3">
                {Object.entries(categories).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`px-6 py-2 rounded-full font-medium transition ${
                      activeCategory === key
                        ? 'bg-cyan-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {value.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
          <div>
            <div className="text-4xl font-bold mb-1">500+</div>
            <div className="text-blue-200 text-sm uppercase tracking-wider">Clients Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">5M+</div>
            <div className="text-blue-200 text-sm uppercase tracking-wider">Parts Manufactured</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">5+</div>
            <div className="text-blue-200 text-sm uppercase tracking-wider">Global Markets</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">ISO</div>
            <div className="text-blue-200 text-sm uppercase tracking-wider">9001:2015 Certified</div>
          </div>
        </div>
      </section>

      {/* Company Image */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=600&fit=crop"
            alt="Swarna Rubber Industries Facility"
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Materials & Certifications */}
      <section className="py-16 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">MATERIALS & STANDARDS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Materials, International Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Materials We Work With</h3>
              <div className="space-y-4">
                {['EPDM Rubber', 'Silicone Rubber', 'Neoprene', 'Nitrile (NBR)', 'Natural Rubber', 'Polyurethane'].map((material, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    <span className="text-gray-800 font-medium">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications & Standards</h3>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {['ISO 9001', 'RoHS', 'REACH', 'FDA Approved'].map((cert, idx) => (
                    <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-semibold text-gray-800">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">OUR PROCESS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Concept to Delivery
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our streamlined manufacturing process ensures precision, quality, and timely delivery for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your specific requirements and applications' },
              { step: '02', title: 'Design & Prototype', desc: 'Custom design development and prototype testing' },
              { step: '03', title: 'Manufacturing', desc: 'Advanced production with strict quality control' },
              { step: '04', title: 'Delivery & Support', desc: 'Timely delivery with ongoing technical support' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-cyan-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-cyan-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="flex flex-col items-start py-20 px-6  md:py-20 px-6  lg:py-20 px-6 text-sm max-w-6xl mx-auto">
                <div className="flex items-center mr-auto gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z" stroke="#1E4BAF" strokeMiterlimit="5.759"
                            strokeLinecap="round" />
                    </svg>
                    <span>Testimonials</span>
                </div>
                <h1
                    className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text mt-4">
                    Don't just take our words
                </h1>
                <p className="text-slate-500 mt-4 max-w-2xl">
                    Hear what our users say about us. We're always looking for ways to improve. If you have a positive
                    experience with us, leave a review.
                </p>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            
                    <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
                        <p className="text-base text-slate-500">Radiant made undercutting all of our competitors an absolute breeze.
                        </p>
                        <div className="flex items-center gap-3 mt-8">
                            <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user image" />
                            <div>
                                <h2 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                                    Richard Nelson
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.6943 0.900204C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C5.09922 1.34891 4.84813 1.45291 4.58408 1.50504C4.46888 1.52779 4.34927 1.53733 4.11006 1.55642C3.50903 1.60439 3.2085 1.62836 2.95778 1.71692C2.37788 1.92175 1.92175 2.37788 1.71692 2.95778C1.62836 3.2085 1.60439 3.50903 1.55642 4.11006C1.53733 4.34927 1.52779 4.46888 1.50504 4.58408C1.45291 4.84813 1.34891 5.09922 1.19906 5.3228C1.13369 5.42033 1.05586 5.51165 0.900204 5.6943C0.509124 6.15323 0.313577 6.38265 0.198917 6.62258C-0.0663056 7.1775 -0.0663056 7.8225 0.198917 8.37743C0.313584 8.61735 0.509124 8.84678 0.900204 9.3057C1.05584 9.48833 1.13369 9.57968 1.19906 9.67718C1.34891 9.90075 1.45291 10.1519 1.50504 10.4159C1.52779 10.5311 1.53733 10.6508 1.55642 10.8899C1.60439 11.491 1.62836 11.7915 1.71692 12.0422C1.92175 12.6221 2.37788 13.0783 2.95778 13.2831C3.2085 13.3716 3.50903 13.3956 4.11006 13.4436C4.34927 13.4627 4.46888 13.4722 4.58408 13.495C4.84813 13.5471 5.09922 13.6511 5.3228 13.801C5.42033 13.8663 5.51165 13.9441 5.6943 14.0998C6.15323 14.4909 6.38265 14.6864 6.62258 14.8011C7.1775 15.0663 7.8225 15.0663 8.37743 14.8011C8.61735 14.6864 8.84678 14.4909 9.3057 14.0998C9.48833 13.9441 9.57968 13.8663 9.67718 13.801C9.90075 13.6511 10.1519 13.5471 10.4159 13.495C10.5311 13.4722 10.6508 13.4627 10.8899 13.4436C11.491 13.3956 11.7915 13.3716 12.0422 13.2831C12.6221 13.0783 13.0783 12.6221 13.2831 12.0422C13.3716 11.7915 13.3956 11.491 13.4436 10.8899C13.4627 10.6508 13.4722 10.5311 13.495 10.4159C13.5471 10.1519 13.6511 9.90075 13.801 9.67718C13.8663 9.57968 13.9441 9.48833 14.0998 9.3057C14.4909 8.84678 14.6864 8.61735 14.8011 8.37743C15.0663 7.8225 15.0663 7.1775 14.8011 6.62258C14.6864 6.38265 14.4909 6.15323 14.0998 5.6943C13.9441 5.51165 13.8663 5.42033 13.801 5.3228C13.6511 5.09922 13.5471 4.84813 13.495 4.58408C13.4722 4.46888 13.4627 4.34927 13.4436 4.11006C13.3956 3.50903 13.3716 3.2085 13.2831 2.95778C13.0783 2.37788 12.6221 1.92175 12.0422 1.71692C11.7915 1.62836 11.491 1.60439 10.8899 1.55642C10.6508 1.53733 10.5311 1.52779 10.4159 1.50504C10.1519 1.45291 9.90075 1.34891 9.67718 1.19906C9.57968 1.13369 9.48833 1.05586 9.3057 0.900204C8.84678 0.509124 8.61735 0.313584 8.37743 0.198917C7.8225 -0.0663056 7.1775 -0.0663056 6.62258 0.198917C6.38265 0.313577 6.15323 0.509124 5.6943 0.900204ZM10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z" fill="#2196F3" />
                                    </svg>
                                </h2>
                                <p className="text-gray-500">CTO, Slack</p>
                            </div>
                        </div>
                    </div>
            
                    <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
                        <p className="text-base text-slate-500">This platform helped us launch our product twice as fast as
                            expected.</p>
                        <div className="flex items-center gap-3 mt-8">
                            <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user image" />
                            <div>
                                <h2 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                                    Ava Johnson
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.6943 0.900204C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C5.09922 1.34891 4.84813 1.45291 4.58408 1.50504C4.46888 1.52779 4.34927 1.53733 4.11006 1.55642C3.50903 1.60439 3.2085 1.62836 2.95778 1.71692C2.37788 1.92175 1.92175 2.37788 1.71692 2.95778C1.62836 3.2085 1.60439 3.50903 1.55642 4.11006C1.53733 4.34927 1.52779 4.46888 1.50504 4.58408C1.45291 4.84813 1.34891 5.09922 1.19906 5.3228C1.13369 5.42033 1.05586 5.51165 0.900204 5.6943C0.509124 6.15323 0.313577 6.38265 0.198917 6.62258C-0.0663056 7.1775 -0.0663056 7.8225 0.198917 8.37743C0.313584 8.61735 0.509124 8.84678 0.900204 9.3057C1.05584 9.48833 1.13369 9.57968 1.19906 9.67718C1.34891 9.90075 1.45291 10.1519 1.50504 10.4159C1.52779 10.5311 1.53733 10.6508 1.55642 10.8899C1.60439 11.491 1.62836 11.7915 1.71692 12.0422C1.92175 12.6221 2.37788 13.0783 2.95778 13.2831C3.2085 13.3716 3.50903 13.3956 4.11006 13.4436C4.34927 13.4627 4.46888 13.4722 4.58408 13.495C4.84813 13.5471 5.09922 13.6511 5.3228 13.801C5.42033 13.8663 5.51165 13.9441 5.6943 14.0998C6.15323 14.4909 6.38265 14.6864 6.62258 14.8011C7.1775 15.0663 7.8225 15.0663 8.37743 14.8011C8.61735 14.6864 8.84678 14.4909 9.3057 14.0998C9.48833 13.9441 9.57968 13.8663 9.67718 13.801C9.90075 13.6511 10.1519 13.5471 10.4159 13.495C10.5311 13.4722 10.6508 13.4627 10.8899 13.4436C11.491 13.3956 11.7915 13.3716 12.0422 13.2831C12.6221 13.0783 13.0783 12.6221 13.2831 12.0422C13.3716 11.7915 13.3956 11.491 13.4436 10.8899C13.4627 10.6508 13.4722 10.5311 13.495 10.4159C13.5471 10.1519 13.6511 9.90075 13.801 9.67718C13.8663 9.57968 13.9441 9.48833 14.0998 9.3057C14.4909 8.84678 14.6864 8.61735 14.8011 8.37743C15.0663 7.8225 15.0663 7.1775 14.8011 6.62258C14.6864 6.38265 14.4909 6.15323 14.0998 5.6943C13.9441 5.51165 13.8663 5.42033 13.801 5.3228C13.6511 5.09922 13.5471 4.84813 13.495 4.58408C13.4722 4.46888 13.4627 4.34927 13.4436 4.11006C13.3956 3.50903 13.3716 3.2085 13.2831 2.95778C13.0783 2.37788 12.6221 1.92175 12.0422 1.71692C11.7915 1.62836 11.491 1.60439 10.8899 1.55642C10.6508 1.53733 10.5311 1.52779 10.4159 1.50504C10.1519 1.45291 9.90075 1.34891 9.67718 1.19906C9.57968 1.13369 9.48833 1.05586 9.3057 0.900204C8.84678 0.509124 8.61735 0.313584 8.37743 0.198917C7.8225 -0.0663056 7.1775 -0.0663056 6.62258 0.198917C6.38265 0.313577 6.15323 0.509124 5.6943 0.900204ZM10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z" fill="#2196F3" />
                                    </svg>
                                </h2>
                                <p className="text-gray-500">Product Manager</p>
                            </div>
                        </div>
                    </div>
            
                    <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
                        <p className="text-base text-slate-500">Incredible support and a fantastic experience from start to finish.
                        </p>
                        <div className="flex items-center gap-3 mt-8">
                            <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60" alt="user image" />
                            <div>
                                <h2 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                                    Liam Carter
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.6943 0.900204C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C5.09922 1.34891 4.84813 1.45291 4.58408 1.50504C4.46888 1.52779 4.34927 1.53733 4.11006 1.55642C3.50903 1.60439 3.2085 1.62836 2.95778 1.71692C2.37788 1.92175 1.92175 2.37788 1.71692 2.95778C1.62836 3.2085 1.60439 3.50903 1.55642 4.11006C1.53733 4.34927 1.52779 4.46888 1.50504 4.58408C1.45291 4.84813 1.34891 5.09922 1.19906 5.3228C1.13369 5.42033 1.05586 5.51165 0.900204 5.6943C0.509124 6.15323 0.313577 6.38265 0.198917 6.62258C-0.0663056 7.1775 -0.0663056 7.8225 0.198917 8.37743C0.313584 8.61735 0.509124 8.84678 0.900204 9.3057C1.05584 9.48833 1.13369 9.57968 1.19906 9.67718C1.34891 9.90075 1.45291 10.1519 1.50504 10.4159C1.52779 10.5311 1.53733 10.6508 1.55642 10.8899C1.60439 11.491 1.62836 11.7915 1.71692 12.0422C1.92175 12.6221 2.37788 13.0783 2.95778 13.2831C3.2085 13.3716 3.50903 13.3956 4.11006 13.4436C4.34927 13.4627 4.46888 13.4722 4.58408 13.495C4.84813 13.5471 5.09922 13.6511 5.3228 13.801C5.42033 13.8663 5.51165 13.9441 5.6943 14.0998C6.15323 14.4909 6.38265 14.6864 6.62258 14.8011C7.1775 15.0663 7.8225 15.0663 8.37743 14.8011C8.61735 14.6864 8.84678 14.4909 9.3057 14.0998C9.48833 13.9441 9.57968 13.8663 9.67718 13.801C9.90075 13.6511 10.1519 13.5471 10.4159 13.495C10.5311 13.4722 10.6508 13.4627 10.8899 13.4436C11.491 13.3956 11.7915 13.3716 12.0422 13.2831C12.6221 13.0783 13.0783 12.6221 13.2831 12.0422C13.3716 11.7915 13.3956 11.491 13.4436 10.8899C13.4627 10.6508 13.4722 10.5311 13.495 10.4159C13.5471 10.1519 13.6511 9.90075 13.801 9.67718C13.8663 9.57968 13.9441 9.48833 14.0998 9.3057C14.4909 8.84678 14.6864 8.61735 14.8011 8.37743C15.0663 7.8225 15.0663 7.1775 14.8011 6.62258C14.6864 6.38265 14.4909 6.15323 14.0998 5.6943C13.9441 5.51165 13.8663 5.42033 13.801 5.3228C13.6511 5.09922 13.5471 4.84813 13.495 4.58408C13.4722 4.46888 13.4627 4.34927 13.4436 4.11006C13.3956 3.50903 13.3716 3.2085 13.2831 2.95778C13.0783 2.37788 12.6221 1.92175 12.0422 1.71692C11.7915 1.62836 11.491 1.60439 10.8899 1.55642C10.6508 1.53733 10.5311 1.52779 10.4159 1.50504C10.1519 1.45291 9.90075 1.34891 9.67718 1.19906C9.57968 1.13369 9.48833 1.05586 9.3057 0.900204C8.84678 0.509124 8.61735 0.313584 8.37743 0.198917C7.8225 -0.0663056 7.1775 -0.0663056 6.62258 0.198917C6.38265 0.313577 6.15323 0.509124 5.6943 0.900204ZM10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z" fill="#2196F3" />
                                    </svg>
                                </h2>
                                <p className="text-gray-500">CEO, BrightTech</p>
                            </div>
                        </div>
                    </div>
            
                    <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
                        <p className="text-base text-slate-500">Our team’s productivity skyrocketed after switching to this
                            solution.</p>
                        <div className="flex items-center gap-3 mt-8">
                            <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60" alt="user image" />
                            <div>
                                <h2 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                                    Sophia Lee
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.6943 0.900204C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C5.09922 1.34891 4.84813 1.45291 4.58408 1.50504C4.46888 1.52779 4.34927 1.53733 4.11006 1.55642C3.50903 1.60439 3.2085 1.62836 2.95778 1.71692C2.37788 1.92175 1.92175 2.37788 1.71692 2.95778C1.62836 3.2085 1.60439 3.50903 1.55642 4.11006C1.53733 4.34927 1.52779 4.46888 1.50504 4.58408C1.45291 4.84813 1.34891 5.09922 1.19906 5.3228C1.13369 5.42033 1.05586 5.51165 0.900204 5.6943C0.509124 6.15323 0.313577 6.38265 0.198917 6.62258C-0.0663056 7.1775 -0.0663056 7.8225 0.198917 8.37743C0.313584 8.61735 0.509124 8.84678 0.900204 9.3057C1.05584 9.48833 1.13369 9.57968 1.19906 9.67718C1.34891 9.90075 1.45291 10.1519 1.50504 10.4159C1.52779 10.5311 1.53733 10.6508 1.55642 10.8899C1.60439 11.491 1.62836 11.7915 1.71692 12.0422C1.92175 12.6221 2.37788 13.0783 2.95778 13.2831C3.2085 13.3716 3.50903 13.3956 4.11006 13.4436C4.34927 13.4627 4.46888 13.4722 4.58408 13.495C4.84813 13.5471 5.09922 13.6511 5.3228 13.801C5.42033 13.8663 5.51165 13.9441 5.6943 14.0998C6.15323 14.4909 6.38265 14.6864 6.62258 14.8011C7.1775 15.0663 7.8225 15.0663 8.37743 14.8011C8.61735 14.6864 8.84678 14.4909 9.3057 14.0998C9.48833 13.9441 9.57968 13.8663 9.67718 13.801C9.90075 13.6511 10.1519 13.5471 10.4159 13.495C10.5311 13.4722 10.6508 13.4627 10.8899 13.4436C11.491 13.3956 11.7915 13.3716 12.0422 13.2831C12.6221 13.0783 13.0783 12.6221 13.2831 12.0422C13.3716 11.7915 13.3956 11.491 13.4436 10.8899C13.4627 10.6508 13.4722 10.5311 13.495 10.4159C13.5471 10.1519 13.6511 9.90075 13.801 9.67718C13.8663 9.57968 13.9441 9.48833 14.0998 9.3057C14.4909 8.84678 14.6864 8.61735 14.8011 8.37743C15.0663 7.8225 15.0663 7.1775 14.8011 6.62258C14.6864 6.38265 14.4909 6.15323 14.0998 5.6943C13.9441 5.51165 13.8663 5.42033 13.801 5.3228C13.6511 5.09922 13.5471 4.84813 13.495 4.58408C13.4722 4.46888 13.4627 4.34927 13.4436 4.11006C13.3956 3.50903 13.3716 3.2085 13.2831 2.95778C13.0783 2.37788 12.6221 1.92175 12.0422 1.71692C11.7915 1.62836 11.491 1.60439 10.8899 1.55642C10.6508 1.53733 10.5311 1.52779 10.4159 1.50504C10.1519 1.45291 9.90075 1.34891 9.67718 1.19906C9.57968 1.13369 9.48833 1.05586 9.3057 0.900204C8.84678 0.509124 8.61735 0.313584 8.37743 0.198917C7.8225 -0.0663056 7.1775 -0.0663056 6.62258 0.198917C6.38265 0.313577 6.15323 0.509124 5.6943 0.900204ZM10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z" fill="#2196F3" />
                                    </svg>
                                </h2>
                                <p className="text-gray-500">Engineering Lead</p>
                            </div>
                        </div>
                    </div>
            
                    <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
                        <p className="text-base text-slate-500">A seamless integration that saved us countless developer hours.</p>
                        <div className="flex items-center gap-3 mt-8">
                            <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" alt="user image" />
                            <div>
                                <h2 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                                    Noah Patel
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.6943 0.900204C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C5.09922 1.34891 4.84813 1.45291 4.58408 1.50504C4.46888 1.52779 4.34927 1.53733 4.11006 1.55642C3.50903 1.60439 3.2085 1.62836 2.95778 1.71692C2.37788 1.92175 1.92175 2.37788 1.71692 2.95778C1.62836 3.2085 1.60439 3.50903 1.55642 4.11006C1.53733 4.34927 1.52779 4.46888 1.50504 4.58408C1.45291 4.84813 1.34891 5.09922 1.19906 5.3228C1.13369 5.42033 1.05586 5.51165 0.900204 5.6943C0.509124 6.15323 0.313577 6.38265 0.198917 6.62258C-0.0663056 7.1775 -0.0663056 7.8225 0.198917 8.37743C0.313584 8.61735 0.509124 8.84678 0.900204 9.3057C1.05584 9.48833 1.13369 9.57968 1.19906 9.67718C1.34891 9.90075 1.45291 10.1519 1.50504 10.4159C1.52779 10.5311 1.53733 10.6508 1.55642 10.8899C1.60439 11.491 1.62836 11.7915 1.71692 12.0422C1.92175 12.6221 2.37788 13.0783 2.95778 13.2831C3.2085 13.3716 3.50903 13.3956 4.11006 13.4436C4.34927 13.4627 4.46888 13.4722 4.58408 13.495C4.84813 13.5471 5.09922 13.6511 5.3228 13.801C5.42033 13.8663 5.51165 13.9441 5.6943 14.0998C6.15323 14.4909 6.38265 14.6864 6.62258 14.8011C7.1775 15.0663 7.8225 15.0663 8.37743 14.8011C8.61735 14.6864 8.84678 14.4909 9.3057 14.0998C9.48833 13.9441 9.57968 13.8663 9.67718 13.801C9.90075 13.6511 10.1519 13.5471 10.4159 13.495C10.5311 13.4722 10.6508 13.4627 10.8899 13.4436C11.491 13.3956 11.7915 13.3716 12.0422 13.2831C12.6221 13.0783 13.0783 12.6221 13.2831 12.0422C13.3716 11.7915 13.3956 11.491 13.4436 10.8899C13.4627 10.6508 13.4722 10.5311 13.495 10.4159C13.5471 10.1519 13.6511 9.90075 13.801 9.67718C13.8663 9.57968 13.9441 9.48833 14.0998 9.3057C14.4909 8.84678 14.6864 8.61735 14.8011 8.37743C15.0663 7.8225 15.0663 7.1775 14.8011 6.62258C14.6864 6.38265 14.4909 6.15323 14.0998 5.6943C13.9441 5.51165 13.8663 5.42033 13.801 5.3228C13.6511 5.09922 13.5471 4.84813 13.495 4.58408C13.4722 4.46888 13.4627 4.34927 13.4436 4.11006C13.3956 3.50903 13.3716 3.2085 13.2831 2.95778C13.0783 2.37788 12.6221 1.92175 12.0422 1.71692C11.7915 1.62836 11.491 1.60439 10.8899 1.55642C10.6508 1.53733 10.5311 1.52779 10.4159 1.50504C10.1519 1.45291 9.90075 1.34891 9.67718 1.19906C9.57968 1.13369 9.48833 1.05586 9.3057 0.900204C8.84678 0.509124 8.61735 0.313584 8.37743 0.198917C7.8225 -0.0663056 7.1775 -0.0663056 6.62258 0.198917C6.38265 0.313577 6.15323 0.509124 5.6943 0.900204ZM10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z" fill="#2196F3" />
                                    </svg>
                                </h2>
                                <p className="text-gray-500">CTO, DevWorks</p>
                            </div>
                        </div>
                    </div>
            
                    <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500">
                        <p className="text-base text-slate-500">The user experience is outstanding and setup was a breeze.</p>
                        <div className="flex items-center gap-3 mt-8">
                            <img className="size-12 rounded-full" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png" alt="user image" />
                            <div>
                                <h2 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                                    Oliver Brooks
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.6943 0.900204C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C5.09922 1.34891 4.84813 1.45291 4.58408 1.50504C4.46888 1.52779 4.34927 1.53733 4.11006 1.55642C3.50903 1.60439 3.2085 1.62836 2.95778 1.71692C2.37788 1.92175 1.92175 2.37788 1.71692 2.95778C1.62836 3.2085 1.60439 3.50903 1.55642 4.11006C1.53733 4.34927 1.52779 4.46888 1.50504 4.58408C1.45291 4.84813 1.34891 5.09922 1.19906 5.3228C1.13369 5.42033 1.05586 5.51165 0.900204 5.6943C0.509124 6.15323 0.313577 6.38265 0.198917 6.62258C-0.0663056 7.1775 -0.0663056 7.8225 0.198917 8.37743C0.313584 8.61735 0.509124 8.84678 0.900204 9.3057C1.05584 9.48833 1.13369 9.57968 1.19906 9.67718C1.34891 9.90075 1.45291 10.1519 1.50504 10.4159C1.52779 10.5311 1.53733 10.6508 1.55642 10.8899C1.60439 11.491 1.62836 11.7915 1.71692 12.0422C1.92175 12.6221 2.37788 13.0783 2.95778 13.2831C3.2085 13.3716 3.50903 13.3956 4.11006 13.4436C4.34927 13.4627 4.46888 13.4722 4.58408 13.495C4.84813 13.5471 5.09922 13.6511 5.3228 13.801C5.42033 13.8663 5.51165 13.9441 5.6943 14.0998C6.15323 14.4909 6.38265 14.6864 6.62258 14.8011C7.1775 15.0663 7.8225 15.0663 8.37743 14.8011C8.61735 14.6864 8.84678 14.4909 9.3057 14.0998C9.48833 13.9441 9.57968 13.8663 9.67718 13.801C9.90075 13.6511 10.1519 13.5471 10.4159 13.495C10.5311 13.4722 10.6508 13.4627 10.8899 13.4436C11.491 13.3956 11.7915 13.3716 12.0422 13.2831C12.6221 13.0783 13.0783 12.6221 13.2831 12.0422C13.3716 11.7915 13.3956 11.491 13.4436 10.8899C13.4627 10.6508 13.4722 10.5311 13.495 10.4159C13.5471 10.1519 13.6511 9.90075 13.801 9.67718C13.8663 9.57968 13.9441 9.48833 14.0998 9.3057C14.4909 8.84678 14.6864 8.61735 14.8011 8.37743C15.0663 7.8225 15.0663 7.1775 14.8011 6.62258C14.6864 6.38265 14.4909 6.15323 14.0998 5.6943C13.9441 5.51165 13.8663 5.42033 13.801 5.3228C13.6511 5.09922 13.5471 4.84813 13.495 4.58408C13.4722 4.46888 13.4627 4.34927 13.4436 4.11006C13.3956 3.50903 13.3716 3.2085 13.2831 2.95778C13.0783 2.37788 12.6221 1.92175 12.0422 1.71692C11.7915 1.62836 11.491 1.60439 10.8899 1.55642C10.6508 1.53733 10.5311 1.52779 10.4159 1.50504C10.1519 1.45291 9.90075 1.34891 9.67718 1.19906C9.57968 1.13369 9.48833 1.05586 9.3057 0.900204C8.84678 0.509124 8.61735 0.313584 8.37743 0.198917C7.8225 -0.0663056 7.1775 -0.0663056 6.62258 0.198917C6.38265 0.313577 6.15323 0.509124 5.6943 0.900204ZM10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z" fill="#2196F3" />
                                    </svg>
                                </h2>
                                <p className="text-gray-500">Marketing Director</p>
                            </div>
                        </div>
                    </div>
            
                </div>
            </section>
        

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-50 mb-8">
            Contact us today to discuss your sealing solutions needs. Our team is ready to provide expert guidance and custom solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-lg">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-white font-medium">info@swarnarubber.com</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-lg">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-white font-medium">+91 161 XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-white font-medium">Ludhiana, Punjab, India</span>
            </div>
          </div>

          <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
            Request a Quote
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default SwarnaRubberHomepage;