import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-100 mt-2">
            Get in touch with the student welfare department
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiSend size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-lg h-fit">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Motilal Nehru National Institute of Technology, Allahabad (MNNIT),
                      Prayagraj, Uttar Pradesh 211004, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-lg h-fit">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:welfare@mnnit.ac.in"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      welfare@mnnit.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-lg h-fit">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+919876543210"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      +91 9876543210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-lg">
                  Google Map Integration Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
