import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  BuildingOffice2Icon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  TruckIcon,
  UsersIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  StarIcon,
  HeartIcon,
  AcademicCapIcon,
  SparklesIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "5M+", label: "Parts Manufactured" },
  { value: "5+", label: "Global Markets" },
];

const strengths = [
  {
    title: "Strict Quality Control",
    desc: "Comprehensive inspection from raw material to final dispatch ensuring zero-defect output.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Diverse Product Portfolio",
    desc: "EPDM, Silicone, Neoprene, custom rubber profiles, gaskets, and sealing systems.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Customer-Centric Philosophy",
    desc: "OEM-focused approach delivering tailored rubber solutions for global industries.",
    icon: UsersIcon,
  },
];

const coreValues = [
  {
    title: "Quality Excellence",
    desc: "Uncompromising commitment to delivering superior rubber products that exceed industry standards.",
    icon: StarIcon,
  },
  {
    title: "Customer First",
    desc: "Building lasting partnerships through responsive service and customized solutions.",
    icon: HeartIcon,
  },
  {
    title: "Innovation",
    desc: "Continuously advancing our technology and processes to stay ahead of industry demands.",
    icon: LightBulbIcon,
  },
  {
    title: "Integrity",
    desc: "Conducting business with transparency, honesty, and ethical practices in every interaction.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Continuous Improvement",
    desc: "Investing in training, technology, and systems to enhance efficiency and product quality.",
    icon: AcademicCapIcon,
  },
  {
    title: "Sustainability",
    desc: "Committed to environmentally responsible manufacturing and sustainable business practices.",
    icon: SparklesIcon,
  },
];

const whyChoose = [
  "15+ years of rubber manufacturing expertise",
  "OEM & custom rubber sealing solutions",
  "Advanced machinery & precision molding",
  "Strict adherence to ISO 9001:2015 standards",
  "Reliable logistics & on-time delivery",
  "Competitive pricing without quality compromise",
];

const About = () => {
  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("./assets/images/VAS_1151-min-1-scaled (1).jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            About Swarna Rubber Industries
          </div>
          <Typography variant="h1" className="mb-6 font-bold text-5xl">
            Rubber Sealing Solutions Specialist
          </Typography>
          <Typography className="text-cyan-50 max-w-3xl mx-auto text-xl leading-relaxed">
            Trusted manufacturer of high-performance rubber sealing products serving diverse industrial applications worldwide with excellence since our establishment.
          </Typography>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 -mt-1">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-bold mb-1">{item.value}</p>
              <p className="text-sm text-cyan-50 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-cyan-600"></div>
                <p className="text-cyan-600 font-bold text-sm uppercase tracking-wider">Who We Are</p>
              </div>
              <Typography variant="h3" className="font-bold mb-6 text-4xl">
                Company Introduction
              </Typography>
              <Typography className="text-slate-600 mb-4 leading-relaxed">
                Swarna Rubber Industries LLP specializes in OEM production, custom rubber
                sealing solutions, and large-scale manufacturing for industries including
                electrical, mechanical, rail transit, construction, and energy sectors.
              </Typography>
              <Typography className="text-slate-600 leading-relaxed">
                Our manufacturing process combines advanced technology, skilled
                workmanship, and strict quality systems to ensure durable, reliable,
                and performance-driven rubber products that meet international standards.
              </Typography>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">ISO 9001:2015</div>
                  <div className="text-sm text-slate-600">Certified Quality</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Quality Tested</div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="./assets/images/VAS_1174-min-scaled.jpg"
                alt="Factory"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">OUR PURPOSE</p>
            <h2 className="text-4xl font-bold text-gray-900">Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-10 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <RocketLaunchIcon className="w-10 h-10 text-white" />
                </div>
                <Typography variant="h4" className="font-bold mb-4">
                  Our Vision
                </Typography>
                <Typography className="text-cyan-50 leading-relaxed">
                  To be the leading global provider of innovative rubber sealing solutions, 
                  recognized for excellence in quality, sustainability, and customer satisfaction. 
                  We aspire to set industry benchmarks through continuous innovation and 
                  technological advancement.
                </Typography>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <LightBulbIcon className="w-10 h-10 text-white" />
                </div>
                <Typography variant="h4" className="font-bold mb-4">
                  Our Mission
                </Typography>
                <Typography className="text-blue-50 leading-relaxed">
                  To manufacture premium quality rubber products that exceed customer expectations 
                  through precision engineering, rigorous quality control, and dedicated service. 
                  We are committed to building long-term partnerships while maintaining ethical 
                  business practices and environmental responsibility.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STRENGTHS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">WHAT SETS US APART</p>
            <Typography variant="h3" className="font-bold text-4xl">
              Our Strengths
            </Typography>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <Typography variant="h5" className="mb-3 font-bold text-gray-900">
                  {item.title}
                </Typography>
                <Typography className="text-slate-600 leading-relaxed">
                  {item.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">WHAT DRIVES US</p>
            <Typography variant="h3" className="font-bold text-4xl mb-4">
              Our Core Values
            </Typography>
            <p className="text-slate-600 max-w-3xl mx-auto">
              The principles that guide our operations, decisions, and relationships with customers, partners, and employees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div key={i} className="group bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-cyan-600 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <value.icon className="w-6 h-6" />
                </div>
                <Typography variant="h6" className="font-bold mb-2 text-gray-900">
                  {value.title}
                </Typography>
                <Typography className="text-slate-600 text-sm leading-relaxed">
                  {value.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="./assets/images/VAS_1151-scaled.jpg"
                alt="Industrial Service"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-cyan-600"></div>
                <p className="text-cyan-600 font-bold text-sm uppercase tracking-wider">Your Trusted Partner</p>
              </div>
              <Typography variant="h3" className="font-bold mb-6 text-4xl">
                Why Choose Us?
              </Typography>

              <ul className="space-y-4 mb-8">
                {whyChoose.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="bg-cyan-600 text-white hover:bg-cyan-700 flex items-center gap-2 p-3"
                size="lg"
              >
                <BuildingOffice2Icon className="w-5 h-5 " />
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY IMAGE SHOWCASE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">STATE-OF-THE-ART</p>
            <Typography variant="h3" className="font-bold text-4xl">
              Our Manufacturing Facility
            </Typography>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="./assets/images/VAS_1129-min-1-scaled.jpg"
              alt="Manufacturing Line"
              className="w-full h-[350px] object-cover rounded-xl shadow-lg"
            />
            <img
              src="./assets/images/VAS_1107-min-scaled.jpg"
              alt="Quality Control"
              className="w-full h-[350px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Typography variant="h3" className="font-bold mb-4 text-4xl">
            Let's Build Reliable Solutions Together
          </Typography>
          <Typography className="text-cyan-50 mb-8 text-lg">
            Partner with us for custom rubber sealing solutions backed by quality, experience, and dedicated service.
          </Typography>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-white text-cyan-600 hover:bg-gray-100 flex items-center ga p-2"
              size="lg"
            >
              <TruckIcon className="w-5 h-5" />
              Request a Quote
            </Button>
            <Button
              variant="outlined"
              className="border-white text-white hover:bg-white/10 flex items-center gap-2 p-2"
              size="lg" 
            >
              <PhoneIcon className="w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
