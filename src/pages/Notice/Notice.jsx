import { FiDownload, FiEye } from "react-icons/fi";

function Notice() {
  const notices = [
    {
      id: 1,
      title: "Important: Scholarship Application Deadline Extended",
      date: "January 15, 2024",
      description: "The deadline for scholarship applications has been extended.",
    },
    {
      id: 2,
      title: "Campus Maintenance Notice",
      date: "January 10, 2024",
      description:
        "Campus will undergo maintenance from 10th to 15th January.",
    },
    {
      id: 3,
      title: "Event Registration Open",
      date: "January 8, 2024",
      description:
        "Registration for annual fest is now open. Register now to participate.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Notices</h1>
          <p className="text-blue-100 mt-2">
            Stay updated with the latest announcements
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white border-l-4 border-blue-600 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {notice.title}
                </h3>
                <span className="text-sm text-gray-500">{notice.date}</span>
              </div>

              <p className="text-gray-600 mb-4">{notice.description}</p>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <FiEye size={18} />
                  View
                </button>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <FiDownload size={18} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notice;
