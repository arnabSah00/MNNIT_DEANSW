import { FiAward, FiDownload } from "react-icons/fi";

function MedalsAwards() {
  const awards = [
    {
      id: 1,
      title: "Academic Excellence Medal",
      criteria: "Outstanding academic performance",
      category: "Academic",
    },
    {
      id: 2,
      title: "Sports Achievement Award",
      criteria: "Outstanding performance in sports",
      category: "Sports",
    },
    {
      id: 3,
      title: "Cultural Excellence Award",
      criteria: "Contribution to cultural activities",
      category: "Cultural",
    },
    {
      id: 4,
      title: "Innovation & Research Medal",
      criteria: "Outstanding research contribution",
      category: "Research",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Medals & Awards</h1>
          <p className="text-blue-100 mt-2">
            Celebrate excellence and outstanding achievements
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">
          <div className="flex gap-4">
            <FiAward className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Recognition Programs
              </h3>
              <p className="text-gray-700">
                MNNIT recognizes and honors outstanding achievements across
                academics, sports, cultural activities, and research. These
                awards motivate and celebrate the excellence demonstrated by
                our students.
              </p>
            </div>
          </div>
        </div>

        {/* Awards Grid */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Award Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="text-4xl mb-4">🏆</div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {award.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">{award.criteria}</p>

              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                {award.category}
              </span>
            </div>
          ))}
        </div>

        {/* Previous Winners */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Previous Winners
          </h2>

          <div className="space-y-4">
            {[2023, 2022, 2021].map((year) => (
              <details
                key={year}
                className="group bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <summary className="flex justify-between items-center font-bold text-gray-900">
                  <span>Year {year}</span>
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>

                <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Academic Excellence
                    </h4>
                    <p className="text-gray-600 text-sm">
                      John Doe - CSE Department
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Sports Achievement
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Jane Smith - Football Team
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Download Resources
          </h2>

          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center gap-3 bg-white p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FiDownload className="text-blue-600" size={20} />
              <span className="font-semibold text-gray-700">
                Awards Nomination Form
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-white p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FiDownload className="text-blue-600" size={20} />
              <span className="font-semibold text-gray-700">
                Eligibility Criteria
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 bg-white p-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FiDownload className="text-blue-600" size={20} />
              <span className="font-semibold text-gray-700">
                Past Awards Records
              </span>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Submit a Nomination
          </h2>
          <p className="text-gray-600 mb-4">
            Know someone who deserves recognition? Submit a nomination for our
            awards program.
          </p>
          <a
            href="mailto:awards@mnnit.ac.in"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Nominate Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default MedalsAwards;
