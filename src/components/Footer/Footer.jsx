import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">MNNIT_SW</h3>
            <p className="text-sm leading-relaxed">
              Student Welfare Portal for MNNIT - Your comprehensive resource for
              scholarships, events, notices, and student support services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-blue-400 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-blue-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/notice"
                  className="hover:text-blue-400 transition-colors"
                >
                  Notice
                </Link>
              </li>
              <li>
                <Link
                  to="/archive"
                  className="hover:text-blue-400 transition-colors"
                >
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/scholarship-fellowship"
                  className="hover:text-blue-400 transition-colors"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  to="/medals-awards"
                  className="hover:text-blue-400 transition-colors"
                >
                  Medals & Awards
                </Link>
              </li>
              <li>
                <Link
                  to="/insurance-mediclaim"
                  className="hover:text-blue-400 transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/anti-ragging"
                  className="hover:text-blue-400 transition-colors"
                >
                  Anti-Ragging
                </Link>
              </li>
              <li>
                <Link
                  to="/counselling-assistance"
                  className="hover:text-blue-400 transition-colors"
                >
                  Counselling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FiMapPin size={18} className="text-blue-400 mt-0.5" />
                <span>MNNIT, Prayagraj, UP</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail size={18} className="text-blue-400" />
                <a
                  href="mailto:welfare@mnnit.ac.in"
                  className="hover:text-blue-400 transition-colors"
                >
                  welfare@mnnit.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone size={18} className="text-blue-400" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 9876543210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} MNNIT Student Welfare Portal. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
