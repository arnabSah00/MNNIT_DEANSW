import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import { FiAward, FiCalendar, FiHeadphones, FiShield } from "react-icons/fi";

function Home() {
  const quickLinks = [
    {
      id: 1,
      title: "Scholarships & Fellowship",
      description: "Access various scholarship opportunities and fellowship programs",
      icon: FiAward,
      link: "/scholarship-fellowship",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Upcoming Events",
      description: "Stay updated with all campus events and activities",
      icon: FiCalendar,
      link: "/events",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Counselling Support",
      description: "Access professional counselling and mental health services",
      icon: FiHeadphones,
      link: "/counselling-assistance",
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Anti-Ragging",
      description: "Safe campus initiative - Report and seek help",
      icon: FiShield,
      link: "/anti-ragging",
      color: "bg-red-500",
    },
  ];

  return (
    <>
      <Hero />

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to MNNIT Student Welfare Portal
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your one-stop solution for all student welfare needs, scholarships,
            events, notices, and support services. We are committed to enhancing
            your educational experience and overall well-being.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Quick Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.id}
                  to={link.link}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className={`${link.color} h-2`}></div>

                  <div className="p-6">
                    <div className={`${link.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {link.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {link.description}
                    </p>

                    <div className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              📋 Notice Board
            </h3>
            <p className="text-gray-600">
              Stay informed with the latest official notices, announcements, and
              updates from the student welfare department.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🏆 Awards & Recognition
            </h3>
            <p className="text-gray-600">
              Celebrate achievements through our comprehensive medals and awards
              programs recognizing student excellence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🏥 Insurance & Medical
            </h3>
            <p className="text-gray-600">
              Access comprehensive information about insurance coverage and
              mediclaim procedures for students.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Our student welfare team is available 24/7 to assist you with any
            queries or concerns.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>

            <Link
              to="/counselling-assistance"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors border border-blue-400"
            >
              Counselling Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
