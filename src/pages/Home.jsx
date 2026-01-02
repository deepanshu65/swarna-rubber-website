import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Mail, Shield, Award, Thermometer, Droplets, Wrench, Phone, MapPin } from 'lucide-react';
import {Card, CardHeader, CardBody, CardFooter, Typography, Button} from '@material-tailwind/react';
import mutedVideo from '/assets/videos/industrial-video.mp4';

const SwarnaRubberHomepage = () => {
  const [activeCategory, setActiveCategory] = useState('tire');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = {
    tire: {
      title: 'Tire / Tube',
      description: 'Specialized seals for electrical applications, ensuring safety and performance in power systems.',
      image: './assets/images/tire-tube.jpg',
      details: 'High-quality electrical seals designed for transformer bushings, cable glands, and electrical enclosures.'
    },
    Footwear: {
      title: 'Footwear',
      description: 'Precision-engineered mechanical seals for pumps, compressors, and rotating equipment.',
      image: './assets/images/footwear.jpg',
      details: 'Advanced mechanical sealing solutions for industrial machinery and automotive applications.'
    },
    Conveyor: {
      title: 'Conveyor Belt',
      description: 'Robust sealing solutions for renewable energy and power generation systems.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
      details: 'Specialized seals for wind turbines, solar systems, and energy storage applications.'
    },
    Cable: {
      title: 'Cable',
      description: 'Comprehensive sealing solutions for diverse industrial manufacturing processes.',
      image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&h=600&fit=crop',
      details: 'Custom industrial seals for hydraulic systems, pneumatic equipment, and process machinery.'
    },
    Adhesives: {
      title: 'Adhesives',
      description: 'Durable sealing products for construction equipment and infrastructure projects.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop',
      details: 'Heavy-duty seals for construction machinery, building systems, and civil engineering.'
    },
    Molded: {
      title: 'Molded Goods',
      description: 'Effective sealing solutions for acoustic insulation and weather protection.',
      image: 'https://images.unsplash.com/photo-1527266237111-a4989d028b4b?w=1200&h=600&fit=crop',
      details: 'Premium door seals and gaskets for noise reduction and thermal efficiency.'
    },
      Industrial : {
      title: 'Industrial Pipe',
      description: 'Effective sealing solutions for acoustic insulation and weather protection.',
      image: 'https://images.unsplash.com/photo-1527266237111-a4989d028b4b?w=1200&h=600&fit=crop',
      details: 'Premium door seals and gaskets for noise reduction and thermal efficiency.'
    },
      Rubber: {
      title: 'Rubber Matting',
      description: 'Effective sealing solutions for acoustic insulation and weather protection.',
      image: 'https://images.unsplash.com/photo-1527266237111-a4989d028b4b?w=1200&h=600&fit=crop',
      details: 'Premium door seals and gaskets for noise reduction and thermal efficiency.'
    },
      Roofing: {
      title: 'Rubber Roofing',
      description: 'Effective sealing solutions for acoustic insulation and weather protection.',
      image: 'https://images.unsplash.com/photo-1527266237111-a4989d028b4b?w=1200&h=600&fit=crop',
      details: 'Premium door seals and gaskets for noise reduction and thermal efficiency.'
    },
      Flooring: {
      title: 'Rubber Flooring',
      description: 'Effective sealing solutions for acoustic insulation and weather protection.',
      image: 'https://images.unsplash.com/photo-1527266237111-a4989d028b4b?w=1200&h=600&fit=crop',
      details: 'Premium door seals and gaskets for noise reduction and thermal efficiency.'
    }
  };

   const materials = [
      { 
        name: 'EPDM Rubber',
        temp: '-40°C to +150°C',
        resistance: 'Weather, Ozone, UV',
        applications: 'Automotive, HVAC, Construction',
        icon: <Thermometer className="w-8 h-8" />
      },
      { 
        name: 'Silicone Rubber',
        temp: '-60°C to +230°C',
        resistance: 'Extreme Temperature, Chemicals',
        applications: 'Medical, Food Grade, Electronics',
        icon: <Droplets className="w-8 h-8" />
      },
      { 
        name: 'Neoprene',
        temp: '-40°C to +120°C',
        resistance: 'Oil, Chemical, Weather',
        applications: 'Industrial, Marine, Automotive',
        icon: <Wrench className="w-8 h-8" />
      }
    ];
  const certifications = [
  {
    name: 'ISO 45001:2018',
    desc: 'Quality Management System',
    image: './assets/images/iso-45001.webp'
  },
  {
    name: 'ISO 14001:2015',
    desc: 'Hazardous Substances Restriction',
    image: './assets/images/iso-14001.webp'
  },
  {
    name: 'ISO 9001:2015',
    desc: 'EU Chemical Safety',
    image: './assets/images/iso-9001.webp'
  },
  {
    name: 'Reach Compliance',
    desc: 'Food Contact Safe',
    image: './assets/images/reach.webp'
  }
];


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
      

  <div className="w-full">
  <video autoPlay muted loop playsInline className="w-full h-auto object-contain">
    <source src={mutedVideo} type="video/mp4" />
  </video>
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
            <div className="absolute inset-0 bg-cyan-100/80" />

            {/* Content */}
            <div className="relative">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white-900">
                Strict Quality Control
              </h3>

              <p className="text-white-700">
                Our robust quality management system ensures that no defective products
                leave our factory. From material inspection to in-process and final checks,
                every stage is meticulously monitored.
              </p>
            </div>
          </div>

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
                Diverse Product Portfolio
              </h3>

              <p className="text-slate-700">
                  Our product portfolio includes rubber seal strips, foam seal strips, EPDM rubber seals, silicone rubber seals, and more, all produced using cutting-edge technology and adhering to stringent quality standards.
              
              </p>
            </div>
          </div>

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
               Customer-Centric Philosophy
              </h3>

              <p className="text-slate-700">
                   Driven by the principles of "Human and Technology," we have built long-term partnerships with international clients and earned an excellent reputation for reliability and innovation.
              
              </p>
            </div>
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
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white-800/50">
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
      {/* <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=600&fit=crop"
            alt="Swarna Rubber Industries Facility"
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section> */}

      <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-cyan-600"></div>
            <p className="text-cyan-600 font-bold text-sm uppercase tracking-wider">Materials & Standards</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Premium Materials, International Standards
          </h2>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {materials.map((material, idx) => (
            <div key={idx} className="bg-white shadow-md hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6 text-white">
                <div className="mb-4">{material.icon}</div>
                <h3 className="text-xl font-bold mb-2">{material.name}</h3>
                <div className="flex items-center gap-2 text-cyan-100 text-sm">
                  <Thermometer className="w-4 h-4" />
                  <span>{material.temp}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Resistance</p>
                  <p className="text-gray-800 font-medium">{material.resistance}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Applications</p>
                  <p className="text-gray-800 font-medium">{material.applications}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Check className="w-4 h-4" />
                    <span className="font-semibold">Available for Custom Orders</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white shadow-md p-8">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-cyan-600" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications & Standards</h3>
              <p className="text-gray-600 text-sm">Compliance with international quality and safety regulations</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-6 hover:border-cyan-600 transition-colors">
                <div className="flex flex-col items-center text-center">
                  <div className="w-64 h-64 flex items-center justify-center mb-4 bg-gray-50 border border-gray-200">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Award className="w-5 h-5 text-cyan-600" />
              <p className="font-semibold">All certifications independently verified and current</p>
            </div>
            <button className="bg-cyan-600 text-white px-6 py-3 font-bold hover:bg-cyan-700 transition-colors uppercase tracking-wide text-sm">
              Download Certificates
            </button>
          </div>
        </div>

      </div>
    </section>

     {/* Process Section (New) */}
      <section id="process" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Manufacturing Process</h2>
          <p className="text-slate-600">Strict quality control from raw material to final dispatch.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your specs & requirements.' },
              { step: '02', title: 'Material Selection', desc: 'Choosing the right EPDM, Silicone, or NBR.' },
              { step: '03', title: 'Precision Molding', desc: 'Advanced vulcanization and molding.' },
              { step: '04', title: 'Quality Check', desc: 'Rigorous testing before delivery.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg text-center">
                <div className="w-12 h-12 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-md">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     {/* Blogs */}
      <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              
              {/* Section Heading (Optional) */}
              <div className="mb-10 text-center">
                <Typography variant="h3" color="blue-gray">
                  Our Blogs
                </Typography>
              </div>
      
              {/* Cards Grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                
                {/* Card 1 */}
                <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="./assets/images/VAS_1149-min-scaled.jpg"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className='text-white bg-cyan-700'>Read More</Button>
      </CardFooter>
    </Card>
      
                {/* Card 2 */}
              <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="./assets/images/VAS_1149-min-scaled.jpg"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className='text-white bg-cyan-700'>Read More</Button>
      </CardFooter>
    </Card>
      
                {/* Card 3 */}
              <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="./assets/images/VAS_1149-min-scaled.jpg"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className='text-white bg-cyan-700'>Read More</Button>
      </CardFooter>
    </Card>
      
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
              <span className="text-white font-medium">sale@swarnarubber.com</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-lg">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-white font-medium">+91-9876500040</span>
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