import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, ChevronRight, Menu, X, 
  Zap, Shield, Award, CheckCircle2, ArrowRight,
  Factory, Settings, Truck, Users, Leaf
} from 'lucide-react';

const SwarnaRubberWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      title: 'Electrical Seals',
      desc: 'Transformer bushings, cable glands, and enclosure seals.',
      icon: <Zap className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'
    },
    {
      title: 'Mechanical Seals',
      desc: 'Precision seals for pumps, compressors, and rotating equipment.',
      icon: <Settings className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
    },
    {
      title: 'Construction',
      desc: 'Heavy-duty gaskets for infrastructure and building systems.',
      icon: <Factory className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
    },
    {
      title: 'Automotive & Rail',
      desc: 'Vibration dampening and door seals for transit.',
      icon: <Truck className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80'
    }
  ];

  const features = [
    { title: 'ISO Certified', desc: 'Strict adherence to ISO 9001 quality standards.', icon: Shield },
    { title: 'Custom Molding', desc: 'Tailored solutions for unique industrial needs.', icon: Settings },
    { title: 'Global Export', desc: 'Serving clients across 5+ countries.', icon: Users },
    { title: 'Eco-Friendly', desc: 'Sustainable manufacturing processes.', icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
      
      {/* Top Bar - Contact Info */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </span>
            <span className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <Mail className="w-4 h-4" /> info@swarnarubber.com
            </span>
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-white cursor-pointer transition">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition">Facebook</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Swarna<span className="text-blue-700">Rubber</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
            <a href="#home" className="hover:text-blue-700 transition">Home</a>
            <a href="#products" className="hover:text-blue-700 transition">Products</a>
            <a href="#about" className="hover:text-blue-700 transition">About Us</a>
            <a href="#process" className="hover:text-blue-700 transition">Process</a>
            <button className="bg-blue-700 text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition shadow-lg shadow-blue-700/20">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="flex flex-col p-6 space-y-4 font-medium text-slate-600">
              <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=900&fit=crop" 
            alt="Industrial Rubber Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" /> Leading Manufacturer Since 2021
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Engineered Rubber <br />
              <span className="text-blue-700">Sealing Solutions</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Precision-engineered rubber products for automotive, electrical, and industrial applications. We deliver durability you can trust.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center gap-2">
                Explore Products <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-300 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition">
                Contact Sales
              </button>
            </div>
          </div>
          
          {/* Hero Image/Graphic */}
          <div className="hidden md:block relative">
            <div className="aspect-square rounded-full bg-blue-100/50 absolute -top-10 -right-10 w-[500px] h-[500px] blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80" 
              alt="Rubber Product Detail" 
              className="relative rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-blue-900 text-white py-12">
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
      </div>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Swarna Rubber?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine advanced technology with human expertise to deliver superior sealing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm">Our Portfolio</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">Premium Rubber Products</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">
              View All Products <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition z-10"></div>
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-700">{cat.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{cat.desc}</p>
                  <span className="text-blue-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button className="text-blue-700 font-semibold inline-flex items-center gap-2">
              View All Products <ArrowRight className="w-5 h-5" />
            </button>
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
                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-md">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Banner */}
      <section className="bg-slate-900 text-slate-300 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Materials We Work With</h2>
            <p className="max-w-xl">We stock a wide range of elastomers to ensure quick turnaround for your projects.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['EPDM', 'Silicone', 'Neoprene', 'Nitrile (NBR)', 'Viton', 'Natural Rubber'].map((mat, i) => (
              <span key={i} className="px-4 py-2 border border-slate-700 rounded-full text-sm hover:bg-slate-800 transition cursor-default">
                {mat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (New) */}
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-blue-700 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h3>
                <p className="text-blue-100 mb-8 text-lg">
                  Need a custom seal or a bulk order? Our engineers are ready to assist you with technical specifications and quotes.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Call Us</p>
                      <p className="font-semibold">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Email Us</p>
                      <p className="font-semibold">sales@swarnarubber.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Visit Us</p>
                      <p className="font-semibold">Industrial Area, Sector 58, Faridabad</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-blue-600">
                <p className="text-sm text-blue-200">We reply within 24 hours.</p>
              </div>
            </div>

            <div className="p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Swarna<span className="text-blue-500">Rubber</span></div>
            <p className="max-w-md mb-6">
              A premier manufacturer of high-quality rubber sealing products. We define excellence through precision engineering and customer-centric solutions.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition cursor-pointer">L</div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition cursor-pointer">F</div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition cursor-pointer">T</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Our Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Quality Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition">Electrical Seals</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Automotive Parts</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Construction Gaskets</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Custom Molding</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Swarna Rubber Industries. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SwarnaRubberWebsite;