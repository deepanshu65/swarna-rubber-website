import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Swarna Rubber Industries
          </h1>
          <p className="text-cyan-100 text-lg max-w-3xl mx-auto">
            Delivering high-performance rubber sealing solutions with precision,
            reliability, and innovation.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              Swarna Rubber Industries is a trusted manufacturer of high-quality
              rubber sealing products serving diverse industries such as
              electrical, mechanical, construction, rail transit, and energy.
            </p>
            <p className="text-gray-600">
              With a strong focus on OEM manufacturing and custom solutions, we
              combine advanced technology with skilled craftsmanship to deliver
              products that meet international quality standards.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&fit=crop"
            alt="Manufacturing Facility"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">Our Mission</h3>
            <p className="text-gray-600">
              To manufacture durable, reliable, and innovative rubber products
              that exceed customer expectations while maintaining strict quality
              control and ethical business practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">Our Vision</h3>
            <p className="text-gray-600">
              To become a globally recognized rubber solutions provider by
              blending human expertise with modern technology and building
              long-term partnerships worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Swarna Rubber
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Strict Quality Control",
              "OEM & Custom Manufacturing",
              "Premium Raw Materials",
              "Experienced Technical Team",
              "On-Time Delivery",
              "Customer-Focused Approach",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <CheckCircle className="text-cyan-600 w-6 h-6 mt-1" />
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let’s Build Reliable Solutions Together
          </h2>
          <p className="text-cyan-100 mb-8">
            Get in touch with our team to discuss your rubber sealing
            requirements.
          </p>
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
