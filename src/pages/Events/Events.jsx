function Events() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="text-blue-100 mt-2">
            Explore upcoming and past events at MNNIT
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600">
            Event listings and details will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;
