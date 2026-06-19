import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleResourcesDropdown = () => {
    setResourcesDropdownOpen(!resourcesDropdownOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide hover:text-blue-100 transition-colors"
          >
            MNNIT_SW
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Home
            </Link>

            <Link
              to="/events"
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Events
            </Link>

            <Link
              to="/gallery"
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Gallery
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-100 transition-colors font-medium">
                Resources
                <FiChevronDown size={18} />
              </button>

              <div className="absolute left-0 mt-0 w-64 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/scholarship-fellowship"
                  className="block px-4 py-3 hover:bg-blue-50 rounded-t-lg transition-colors font-medium"
                >
                  Scholarship & Fellowship
                </Link>

                <Link
                  to="/medals-awards"
                  className="block px-4 py-3 hover:bg-blue-50 transition-colors font-medium"
                >
                  Medals & Awards
                </Link>

                <Link
                  to="/insurance-mediclaim"
                  className="block px-4 py-3 hover:bg-blue-50 transition-colors font-medium"
                >
                  Insurance Mediclaim
                </Link>

                <Link
                  to="/anti-ragging"
                  className="block px-4 py-3 hover:bg-blue-50 transition-colors font-medium"
                >
                  Anti-Ragging Initiative
                </Link>

                <Link
                  to="/counselling-assistance"
                  className="block px-4 py-3 hover:bg-blue-50 rounded-b-lg transition-colors font-medium"
                >
                  Counselling & Assistance
                </Link>
              </div>
            </div>

            <Link
              to="/notice"
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Notice
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Contact
            </Link>

            <Link
              to="/archive"
              className="hover:text-blue-100 transition-colors font-medium"
            >
              Archive
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-blue-700">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors"
              onClick={handleNavClick}
            >
              Home
            </Link>

            <Link
              to="/events"
              className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors"
              onClick={handleNavClick}
            >
              Events
            </Link>

            <Link
              to="/gallery"
              className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors"
              onClick={handleNavClick}
            >
              Gallery
            </Link>

            {/* Mobile Resources Dropdown */}
            <div>
              <button
                onClick={toggleResourcesDropdown}
                className="w-full text-left px-4 py-2 hover:bg-blue-700 rounded transition-colors flex justify-between items-center"
              >
                Resources
                <FiChevronDown
                  size={18}
                  className={`transform transition-transform ${
                    resourcesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesDropdownOpen && (
                <div className="pl-4 bg-blue-700 bg-opacity-50 rounded">
                  <Link
                    to="/scholarship-fellowship"
                    className="block px-4 py-2 hover:bg-blue-600 rounded transition-colors"
                    onClick={handleNavClick}
                  >
                    Scholarship & Fellowship
                  </Link>

                  <Link
                    to="/medals-awards"
                    className="block px-4 py-2 hover:bg-blue-600 rounded transition-colors"
                    onClick={handleNavClick}
                  >
                    Medals & Awards
                  </Link>

                  <Link
                    to="/insurance-mediclaim"
                    className="block px-4 py-2 hover:bg-blue-600 rounded transition-colors"
                    onClick={handleNavClick}
                  >
                    Insurance Mediclaim
                  </Link>

                  <Link
                    to="/anti-ragging"
                    className="block px-4 py-2 hover:bg-blue-600 rounded transition-colors"
                    onClick={handleNavClick}
                  >
                    Anti-Ragging Initiative
                  </Link>

                  <Link
                    to="/counselling-assistance"
                    className="block px-4 py-2 hover:bg-blue-600 rounded transition-colors"
                    onClick={handleNavClick}
                  >
                    Counselling & Assistance
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/notice"
              className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors"
              onClick={handleNavClick}
            >
              Notice
            </Link>

            <Link
              to="/contact"
              className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors"
              onClick={handleNavClick}
            >
              Contact
            </Link>

            <Link
              to="/archive"
              className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors"
              onClick={handleNavClick}
            >
              Archive
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
