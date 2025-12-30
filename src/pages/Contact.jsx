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

      {/* Contact Info + Form */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Reach out to Swarna Rubber Industries for product inquiries,
              OEM partnerships, or technical support.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-cyan-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    Ludhiana, Punjab, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-cyan-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+91 161 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-cyan-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">info@swarnarubber.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-cyan-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-600">
                    Mon – Sat : 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirement"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="px-6 pb-16">
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
