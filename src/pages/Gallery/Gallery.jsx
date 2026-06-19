function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="text-blue-100 mt-2">
            Capture memories from campus events and activities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gray-200 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-gray-600 text-xl">Image {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
