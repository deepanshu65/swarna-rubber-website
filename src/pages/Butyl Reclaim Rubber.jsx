import React, { useState } from 'react';
import { Download, Check, ChevronRight, Package, Settings, Shield, Truck, Mail, Phone, FileText, Thermometer, Droplets, Zap } from 'lucide-react';

const ButylReclaimProductPage = () => {
  const [activeTab, setActiveTab] = useState('specifications');
  const [selectedGrade, setSelectedGrade] = useState('butyl');

  const grades = [
    { id: 'butyl', name: 'Butyl Proper', color: 'cyan' },
    { id: 'chloro', name: 'Chloro Butyl', color: 'blue' }
  ];

  const applications = [
    { icon: <Package className="w-6 h-6" />, title: 'Butyl Inner Tubes', desc: 'Ideal for tire inner tube manufacturing' },
    { icon: <Droplets className="w-6 h-6" />, title: 'Tire Inner Liner', desc: 'Superior air retention properties' },
    { icon: <Settings className="w-6 h-6" />, title: 'Adhesives, Cables', desc: 'Industrial bonding applications' },
    { icon: <Zap className="w-6 h-6" />, title: 'Black Coloured Rubber Product', desc: 'Hoses and specialized products' }
  ];

  const features = [
    { title: 'Faster Mixing', desc: 'Enhanced processing speed and efficiency' },
    { title: 'Reduced Power', desc: 'Lower energy consumption during production' },
    { title: 'Airtight Properties', desc: 'Impermeable to air for superior sealing' },
    { title: 'Two Quality Grades', desc: 'Butyl Proper and Chloro Butyl options' }
  ];

  const specifications = {
    butyl: [
      { particular: 'Acetone Extract', units: '%', standards: 'ASTM D297', value: '6-12' },
      { particular: 'Ash', units: '%', standards: 'ASTM D297', value: '7 Max' },
      { particular: 'Carbon Black', units: '%', standards: 'ASTM D297', value: '28 Min' },
      { particular: 'RHC By Difference', units: '%', standards: 'ASTM D297', value: '50 Min' },
      { particular: 'Specific Gravity', units: '-', standards: 'ASTM D297', value: '1.10 - 1.14' },
      { particular: 'Hardness', units: 'Shore A', standards: 'ASTM D2240', value: '55 - 65' },
      { particular: 'Tensile Strength', units: 'kg/cm2', standards: 'ASTM D412', value: '75 Min' },
      { particular: 'Elongation at Break', units: '%', standards: 'ASTM D412', value: '470 Min' },
      { particular: 'Mooney Viscosity', units: 'ML (1+4)@100°C', standards: 'ASTM D1646', value: '35-55' },
      { particular: 'Volatile Matter', units: '%', standards: '-', value: '1 Max' }
    ],
    chloro: [
      { particular: 'Acetone Extract', units: '%', standards: 'ASTM D297', value: '6-10' },
      { particular: 'Ash', units: '%', standards: 'ASTM D297', value: '10 Max' },
      { particular: 'Carbon Black', units: '%', standards: 'ASTM D297', value: '28 Min' },
      { particular: 'RHC By Difference', units: '%', standards: 'ASTM D297', value: '50 Min' },
      { particular: 'Specific Gravity', units: '-', standards: 'ASTM D297', value: '1.14 - 1.18' },
      { particular: 'Hardness', units: 'Shore A', standards: 'ASTM D2240', value: '55 - 65' },
      { particular: 'Tensile Strength', units: 'kg/cm2', standards: 'ASTM D412', value: '50 Min' },
      { particular: 'Elongation at Break', units: '%', standards: 'ASTM D412', value: '400 Min' },
      { particular: 'Mooney Viscosity', units: 'ML (1+4)@100°C', standards: 'ASTM D1646', value: '35-55' },
      { particular: 'Volatile Matter', units: '%', standards: '-', value: '1 Max' }
    ]
  };

  const composition = [
    { component: '30min @ 160°C', value: '' },
    { component: 'Reclaim Rubber', value: '100.00' },
    { component: 'ZnO', value: '5.00' },
    { component: 'TMTD', value: '1.00' },
    { component: 'Sulphur', value: '2.00' },
    { component: 'MBT', value: '0.50' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Premium Recycled Rubber
              </div>
              <h1 className="text-5xl font-bold mb-6">Butyl Reclaim Rubber</h1>
              <p className="text-xl text-cyan-50 mb-8">
                A synthetic rubber copolymer of isobutylene with isoprene, delivering exceptional air impermeability and airtight sealing properties for demanding industrial applications.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Specification</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
                  Request Quote
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold">2</div>
                  <div className="text-cyan-100 text-sm">Grades Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-cyan-100 text-sm">Quality Tested</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">ASTM</div>
                  <div className="text-cyan-100 text-sm">Certified</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img
                  src="./assets/images/butyl-reclaim-rubber.jpg"
                  alt="Butyl Reclaim Rubber"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-cyan-700 text-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8" />
                    <div>
                      <div className="font-bold text-lg">ISO Certified</div>
                      <div className="text-cyan-100 text-sm">Quality Assured</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">PRODUCT ADVANTAGES</p>
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Butyl Reclaim Rubber?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-8 bg-cyan-600"></div>
              <p className="text-cyan-600 font-bold text-sm uppercase tracking-wider">Applications</p>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Where It's Used</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-cyan-600 transition-all hover:shadow-lg">
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  {app.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.desc}</p>
              </div>
            ))}
          </div>

          {/* Manufacturing Process Info */}
          <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl border border-cyan-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Swarna Butyl Reclaim is manufactured from used butyl tubes using advanced processing techniques. 
                  Our recipe ensures faster mixing, reduced power consumption, and optimal performance for various applications 
                  including inner tubes, tire inner liners, adhesives, and cable compounds.
                </p>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">Faster Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">Energy Efficient</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">Superior Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-600 font-semibold mb-2">TECHNICAL DATA</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Specifications</h2>
            <p className="text-gray-600">Choose between two high-quality grades to meet your specific requirements</p>
          </div>

          {/* Grade Selector */}
          <div className="flex justify-center gap-4 mb-8">
            {grades.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setSelectedGrade(grade.id)}
                className={`px-8 py-3 rounded-lg font-bold transition-all ${
                  selectedGrade === grade.id
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-cyan-600'
                }`}
              >
                {grade.name}
              </button>
            ))}
          </div>

          {/* Specifications Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Particulars</th>
                    <th className="px-6 py-4 text-left font-bold">Units</th>
                    <th className="px-6 py-4 text-left font-bold">Standards</th>
                    <th className="px-6 py-4 text-left font-bold">{selectedGrade === 'butyl' ? 'Butyl Proper' : 'Chloro Butyl'}</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications[selectedGrade].map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{spec.particular}</td>
                      <td className="px-6 py-4 text-gray-600">{spec.units}</td>
                      <td className="px-6 py-4 text-gray-600">{spec.standards}</td>
                      <td className="px-6 py-4 font-semibold text-cyan-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Composition Table */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recipe Composition</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">{selectedGrade === 'butyl' ? 'Butyl' : 'Chloro Butyl'} & {selectedGrade === 'butyl' ? 'Chloro Butyl' : 'Butyl'}</th>
                    <th className="px-6 py-4 text-right font-bold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {composition.map((item, idx) => (
                    <tr key={idx} className={idx === 0 ? 'bg-cyan-50 font-bold' : idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-gray-900">{item.component}</td>
                      <td className="px-6 py-4 text-right font-semibold text-cyan-600">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-cyan-50 mb-8">
            Our technical team is ready to help you select the right grade and specification for your application.
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
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Request Technical Datasheet</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButylReclaimProductPage;