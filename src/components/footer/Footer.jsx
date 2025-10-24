import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold mb-2">ToyTopic</h2>
          <p className="text-sm text-gray-500">
            প্রযুক্তিকে সহজ করে তোলার প্রয়াসে — Bengali ভাষায় টিউটোরিয়াল, গাইড
            এবং সমাধান।
          </p>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">তথ্য</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:underline hover:text-primary">
                শর্তাবলী
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:underline hover:text-primary"
              >
                গোপনীয়তা নীতি
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-primary"
              >
                যোগাযোগ করুন
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">আমাদের অনুসরণ করুন</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Anis Tech. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
