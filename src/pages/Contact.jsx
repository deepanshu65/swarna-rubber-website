import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-cyan-100 text-lg max-w-3xl mx-auto">
            Have questions or need a custom rubber solution?  
            Our team is here to help you.
          </p>
        </div>
      </section>

      
      {/* Contact Section (New) */}
            <section id="contact" className="py-20 px-6 bg-slate-50">
              <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex flex-col justify-between">
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
                            <p className="font-semibold">+91-9876500040</p>
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
                            <p className="font-semibold">SCO 15A, Madhya Marg, Sector 7-C, Chandigarh, 160019</p>
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

      {/* Google Map */}
      <section className="px-6 pb-16 pt-16">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Swarna Rubber Location"
            src="https://www.google.com/maps?q=Ludhiana,Punjab,India&output=embed"
            className="w-full h-96 border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
