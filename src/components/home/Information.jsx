import React from "react";

const InfoPage = () => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-16 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">
            Toytopia Kids Toy Store
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            A joyful destination where children's imagination comes to life
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-base-200 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-secondary">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Toytopia is a curated collection of toys that support learning,
            play, and imagination for children. We believe every toy is not just
            for entertainment, but also a part of a child's mental and social
            development. Our mission is to ensure safe, educational, and joyful
            toys are easily accessible for Bengali-speaking families.
          </p>
        </div>

        {/* Location Section */}
        <div className="bg-base-200 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-secondary">
            Location
          </h2>
          <p className="text-gray-700">
            📍 Our Store: Banani, Dhaka
            <br />
            🕒 Hours: Every day from 10 AM to 8 PM
            <br />
            🚗 Parking available
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-base-200 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-secondary">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions, feedback, or suggestions, feel free to
            click the link below:
          </p>
          <a href="/contact" className="btn btn-primary">
            Go to Contact Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
