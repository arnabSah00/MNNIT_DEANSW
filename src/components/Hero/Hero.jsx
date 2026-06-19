import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Student Welfare Portal
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Access scholarships, events, notices, and comprehensive student
            support services in one place
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/scholarship-fellowship"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explore Scholarships
              <FiArrowRight size={20} />
            </Link>

            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors border border-blue-500"
            >
              View Events
              <FiArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-blue-600">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <p className="text-blue-100">Active Scholarships</p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <p className="text-blue-100">Annual Events</p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p className="text-blue-100">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
