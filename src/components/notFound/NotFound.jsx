import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
      <title>Toytopia NotFound</title>
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <h2 className="text-4xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 mt-4">
        The link you are looking for does not exist on our site. Please check
        the address or return to the homepage.
      </p>
      <p className="text-gray-600 mb-6">
        ( আপনি যে লিংকটি খুঁজছেন তা আমাদের সাইটে নেই। অনুগ্রহ করে ঠিকানা যাচাই
        করুন অথবা হোমপেজে ফিরে যান। )
      </p>
      <Link
        to="/"
        className="btn btn-primary px-6 py-2 text-white rounded hover:bg-blue-600 transition"
      >
        Home Page
      </Link>
    </div>
  );
}
