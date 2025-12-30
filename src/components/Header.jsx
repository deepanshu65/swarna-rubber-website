import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
  { name: "Test", path: "/test" },
];

const Header = () => {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex h-16 items-center justify-between">

              {/* Logo */}
              <div className="flex items-center">
                <NavLink to="/" className="text-xl font-bold text-slate-900">
                  Swarna<span className="text-cyan-600">Rubber</span>
                </NavLink>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `text-sm font-medium transition ${
                        isActive
                          ? "text-cyan-600 border-b-2 border-cyan-600 pb-1"
                          : "text-slate-700 hover:text-cyan-600"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:block">
                <NavLink
                  to="/contact"
                  className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Get Quote
                </NavLink>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="md:hidden border-t border-slate-200 bg-white">
            <div className="space-y-2 px-6 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-base font-medium transition ${
                      isActive
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="block mt-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-center text-white font-semibold"
              >
                Get Quote
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Header;