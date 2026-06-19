import { FiAlertCircle, FiPhone, FiMail } from "react-icons/fi";

function AntiRagging() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Anti-Ragging Initiative</h1>
          <p className="text-blue-100 mt-2">
            Safe, respectful, and inclusive campus environment
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Critical Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
          <div className="flex gap-4">
            <FiAlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Zero Tolerance Policy
              </h3>
              <p className="text-gray-700">
                MNNIT maintains a strict zero-tolerance policy against ragging
                in any form. Any form of ragging, harassment, or bullying is
                strictly prohibited and will result in severe disciplinary
                action.
              </p>
            </div>
          </div>
        </div>

        {/* What is Ragging */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is Ragging?
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 mb-4">
              Ragging constitutes any unfair treatment, bullying, intimidation,
              exploitation, or humiliation of new students by seniors. This
              includes:
            </p>

            <ul className="space-y-3">
              {[
                "Physical abuse or violence",
                "Verbal abuse, name-calling, or offensive language",
                "Sexual harassment or misconduct",
                "Forced participation in humiliating activities",
                "Threats or intimidation",
                "Cyberbullying or online harassment",
                "Exclusion or social isolation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Rights of Students */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your Rights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Safe Environment",
                description:
                  "Right to a safe, respectful, and inclusive campus",
              },
              {
                title: "Report Without Fear",
                description: "Anonymous reporting without retaliation",
              },
              {
                title: "Confidentiality",
                description: "Your complaint will be kept confidential",
              },
              {
                title: "Fair Investigation",
                description: "Proper investigation and due process",
              },
              {
                title: "Support Services",
                description: "Access to counselling and support",
              },
              {
                title: "Appeal Rights",
                description: "Right to appeal against decisions",
              },
            ].map((right, idx) => (
              <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {right.title}
                </h3>
                <p className="text-gray-700">{right.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Report Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Report an Incident
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Emergency - Report Immediately
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 text-white p-3 rounded-full">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Emergency Hotline</p>
                    <a
                      href="tel:+919999999999"
                      className="text-lg font-bold text-red-600 hover:text-red-700"
                    >
                      +91 9999999999
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-700">
                  Available 24/7 for emergency situations
                </p>
              </div>
            </div>

            {/* Regular Reporting */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                File a Formal Complaint
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email Address</p>
                    <a
                      href="mailto:antirag@mnnit.ac.in"
                      className="text-lg font-bold text-blue-600 hover:text-blue-700"
                    >
                      antirag@mnnit.ac.in
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-700">
                  Submit detailed complaint with dates and witnesses
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Support & Counselling
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              If you're experiencing any form of harassment or bullying, we have
              confidential support services available:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  Counselling Services
                </h4>
                <p className="text-gray-600">
                  Professional counselling available at the wellness center
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Peer Support</h4>
                <p className="text-gray-600">
                  Connect with trained peer mentors for support
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Mentor Program</h4>
                <p className="text-gray-600">
                  Faculty mentors available for guidance and support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">For New Students</h2>
          <p className="text-blue-100 mb-6">
            Welcome to MNNIT! We are committed to providing a positive and
            inclusive environment for all students. Remember:
          </p>

          <ul className="space-y-3">
            {[
              "Treat everyone with respect and dignity",
              "Seek help immediately if you witness ragging",
              "Know your rights and support resources",
              "Report any incidents without fear",
              "Support your peers and create a positive culture",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="text-blue-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AntiRagging;
