import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState([]);
  const app = useLoaderData();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setData(app[id]);
  }, [id, app]);

  return (
    <div>
      <div className="max-w-7xl mx-auto my-16 px-6 lg:px-10 font-inter">
        <div className="relative bg-gradient-to-br from-white via-indigo-50 to-blue-100 rounded-3xl border border-indigo-100 shadow-lg hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 p-8 md:p-10">
            {/* ===== Left Image Section ===== */}
            <div className="md:w-1/2  ounded-2xl">
              <img
                src={data.pictureURL}
                alt="Course Image"
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out shadow-lg"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>

            {/* ===== Right Content Section ===== */}
            <div className="md:w-1/2 flex flex-col justify-between space-y-3">
              {/* Title + Description */}
              <div>
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent leading-snug mb-3">
                  {data.toyName}
                </h1>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {data.description ||
                    "Master new skills through hands-on projects, expert mentorship, and engaging lessons designed to boost your career."}
                </p>
              </div>

              {/* Price + Rating Section */}
            </div>
          </div>
        </div>

        {/* Book Session Form  */}
        <div className="mt-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 shadow-xl rounded-3xl p-10 md:p-14 border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10 flex items-center justify-center gap-2">
            <span className="text-indigo-600 text-4xl">📅</span> Book a Session
          </h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white/70 backdrop-blur-lg shadow-md rounded-2xl p-8 md:p-10 border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-700 font-semibold mb-2 ml-1 text-sm"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={data.name}
                  onChange={(e) => {
                    return e.target.value;
                  }}
                  className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-800 placeholder-gray-400 text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-semibold mb-2 ml-1 text-sm"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={(e) => {
                    return e.target.value;
                  }}
                  className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-800 placeholder-gray-400 text-sm"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 text-white px-10 py-3 rounded-xl font-bold text-sm md:text-base shadow-lg hover:shadow-indigo-300 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Submit Booking 🚀
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
