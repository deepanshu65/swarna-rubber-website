import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Swarna<span className="text-cyan-500">Rubber</span>
          </h3>
          <p className="text-sm leading-relaxed text-slate-400 mb-6">
            Manufacturing high-quality rubber sealing solutions with precision,
            durability, and trust for industries across India and beyond.
          </p>

          <div className="inline-flex items-center gap-2 text-cyan-500 text-sm font-medium">
            Quality • Reliability • Innovation
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Blogs", path: "/blogs" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="group inline-flex items-center gap-1 hover:text-white transition"
                >
                  {item.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Products
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="hover:text-white transition">Rubber Sheets</li>
            <li className="hover:text-white transition">Industrial Gaskets</li>
            <li className="hover:text-white transition">Molded Rubber Parts</li>
            <li className="hover:text-white transition">
              Custom Rubber Solutions
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cyan-500 mt-0.5" />
              <span>Ludhiana, Punjab, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-500" />
              <span>+91-9876500040</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-500" />
              <span>sales@swarnarubber.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} SwarnaRubber. All rights reserved.
          </p>
          <p>
            Designed & Developed By{" "}
            <span className="text-cyan-500 font-medium">Pinaak Ventures</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;