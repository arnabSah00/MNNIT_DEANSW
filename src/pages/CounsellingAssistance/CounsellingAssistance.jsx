import { FiHeart, FiPhone, FiMail, FiClock } from "react-icons/fi";

function CounsellingAssistance() {
  const services = [
    {
      id: 1,
      title: "Mental Health Counselling",
      description:
        "Professional counselling for stress, anxiety, depression, and other mental health concerns",
      icon: "🧠",
    },
    {
      id: 2,
      title: "Academic Guidance",
      description:
        "Support with academic performance, study skills, and career planning",
      icon: "📚",
    },
    {
      id: 3,
      title: "Personal Development",
      description:
        "Workshops and sessions for personality development and life skills",
      icon: "🌟",
    },
    {
      id: 4,
      title: "Crisis Support",
      description:
        "Immediate support for students facing crisis situations",
      icon: "🆘",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Counselling & Assistance</h1>
          <p className="text-blue-100 mt-2">
            Supporting your mental health and well-being
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-12">
          <div className="flex gap-4">
            <FiHeart className="text-purple-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Your Mental Health Matters
              </h3>
              <p className="text-gray-700">
                At MNNIT, we believe that mental health is just as important as
                physical health. Our counselling center provides confidential,
                professional support to help students navigate academic and
                personal challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Counsellors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Meet Our Counsellors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Anjali Sharma", specialization: "Clinical Psychologist" },
              { name: "Mr. Raj Kumar", specialization: "Career Counsellor" },
              { name: "Ms. Priya Gupta", specialization: "Life Coach" },
              { name: "Dr. Arun Singh", specialization: "Stress Management" },
            ].map((counsellor, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-gray-900">{counsellor.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {counsellor.specialization}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Access */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How to Access Services
          </h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Visit the Center",
                description: "Walk-in sessions available at the counselling center",
              },
              {
                step: "2",
                title: "Schedule an Appointment",
                description: "Call or email to book a consultation time",
              },
              {
                step: "3",
                title: "Initial Assessment",
                description: "First session for understanding your needs",
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Regular follow-up sessions as per your needs",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white font-bold">
                    {item.step}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <FiPhone size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Phone</h3>
              </div>

              <a
                href="tel:+919876543210"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                +91 9876543210
              </a>

              <p className="text-sm text-gray-600 mt-2">
                Available Monday - Friday, 9 AM - 5 PM
              </p>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <FiMail size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Email</h3>
              </div>

              <a
                href="mailto:counselling@mnnit.ac.in"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                counselling@mnnit.ac.in
              </a>

              <p className="text-sm text-gray-600 mt-2">
                Response within 24 hours
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <FiClock size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Hours</h3>
              </div>

              <p className="text-gray-700 font-semibold">
                Mon - Fri: 9 AM - 6 PM
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Urgent support available 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Crisis Support */}
        <section className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            In Crisis? We're Here to Help
          </h2>

          <p className="text-gray-700 mb-6">
            If you're experiencing thoughts of self-harm or suicide, please
            reach out immediately. You are not alone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:1800275950000"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              🆘 Emergency Hotline
            </a>

            <a
              href="tel:+919876543210"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📞 Call Counselling Center
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "Is counselling confidential?",
                answer:
                  "Yes, all sessions are completely confidential. We maintain strict privacy protocols.",
              },
              {
                question: "Do I need a referral to access counselling?",
                answer:
                  "No, you can directly contact the counselling center or visit in person.",
              },
              {
                question: "How long does each session last?",
                answer: "Each session typically lasts 45-50 minutes.",
              },
              {
                question: "Is counselling free for students?",
                answer: "Yes, counselling services are provided free to all MNNIT students.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <summary className="flex justify-between items-center font-bold text-gray-900">
                  <span>{faq.question}</span>
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>

                <p className="mt-4 pt-4 border-t border-gray-200 text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CounsellingAssistance;
