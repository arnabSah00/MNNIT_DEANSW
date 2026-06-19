import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Archive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const archivedItems = [
    {
      id: 1,
      type: "notice",
      title: "Previous Scholarship Notification",
      date: "December 2023",
      category: "Scholarship",
    },
    {
      id: 2,
      type: "event",
      title: "Annual Fest 2023",
      date: "November 2023",
      category: "Event",
    },
    {
      id: 3,
      type: "notice",
      title: "Summer Internship Guidelines",
      date: "May 2023",
      category: "Academic",
    },
    {
      id: 4,
      type: "event",
      title: "Sports Championship 2023",
      date: "March 2023",
      category: "Event",
    },
    {
      id: 5,
      type: "notice",
      title: "Campus Placement Drive",
      date: "February 2023",
      category: "Placement",
    },
    {
      id: 6,
      type: "event",
      title: "Cultural Night 2022",
      date: "December 2022",
      category: "Event",
    },
  ];

  const filteredItems = archivedItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Archive</h1>
          <p className="text-blue-100 mt-2">
            Browse past notices and events
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search archive..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filterType === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType("notice")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filterType === "notice"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Notices
            </button>
            <button
              onClick={() => setFilterType("event")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filterType === "event"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Events
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border-l-4 border-blue-600 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex gap-2 items-center mb-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          item.type === "notice"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {item.type === "notice" ? "Notice" : "Event"}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">
                No results found. Try a different search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Archive;
