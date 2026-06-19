import { FiDownload, FiAlertCircle } from "react-icons/fi";

function InsuranceMediclaim() {
  const plans = [
    {
      id: 1,
      name: "Basic Health Coverage",
      coverage: "₹2,00,000",
      features: [
        "Hospitalization",
        "Outpatient treatment",
        "Emergency services",
      ],
    },
    {
      id: 2,
      name: "Premium Medical Plan",
      coverage: "₹5,00,000",
      features: [
        "All basic benefits",
        "Accident coverage",
        "Dental treatment",
      ],
    },
    {
      id: 3,
      name: "Comprehensive Coverage",
      coverage: "₹10,00,000",
      features: [
        "All premium benefits",
        "Mental health coverage",
        "Preventive care",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Insurance & Mediclaim</h1>
          <p className="text-blue-100 mt-2">
            Comprehensive health coverage for all students
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-12">
          <div className="flex gap-4">
            <FiAlertCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Student Health Insurance Program
              </h3>
              <p className="text-gray-700">
                All MNNIT students are covered under our comprehensive health
                insurance program. This provides financial protection against
                medical emergencies and ensures access to quality healthcare
                services.
              </p>
            </div>
          </div>
        </div>

        {/* Insurance Plans */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Coverage Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>

              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-1">Coverage Limit</p>
                <p className="text-2xl font-bold text-blue-600">
                  {plan.coverage}
                </p>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* How to Claim */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How to Claim Mediclaim
          </h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Get Treatment",
                description: "Visit any empaneled hospital or healthcare provider",
              },
              {
                step: "2",
                title: "Collect Documents",
                description:
                  "Gather medical reports, prescriptions, and bills",
              },
              {
                step: "3",
                title: "Submit Claim",
                description: "File claim form with supporting documents",
              },
              {
                step: "4",
                title: "Verification",
                description: "Insurance company verifies and approves claim",
              },
              {
                step: "5",
                title: "Reimbursement",
                description: "Amount credited to your account",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
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

        {/* Downloads Section */}
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Important Documents
          </h2>

          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center gap-3 bg-white p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FiDownload className="text-blue-600" size={20} />
              <span className="font-semibold text-gray-700">
                Insurance Policy Document
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-white p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FiDownload className="text-blue-600" size={20} />
              <span className="font-semibold text-gray-700">
                Mediclaim Form
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-white p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FiDownload className="text-blue-600" size={20} />
              <span className="font-semibold text-gray-700">
                Empaneled Hospitals List
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-white p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FiDownload className="text-blue-600" size={20} />
              <span className="font-semibold text-gray-700">
                Terms and Conditions
              </span>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-600 mb-4">
            Contact the insurance office for any queries regarding coverage,
            claims, or policy details.
          </p>
          <a
            href="mailto:insurance@mnnit.ac.in"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Insurance Office
          </a>
        </div>
      </div>
    </div>
  );
}

export default InsuranceMediclaim;
