import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-amber-950 via-gray-700  mt-4 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Website Name */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">Lingo Bingo</h2>
            <p className="text-white mt-2">
              Your Vocubulary Helper. 
            </p>
          </div>
          {/* Links */}
          <div className="">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-yellow-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100057930064329"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-600 transition duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-600 transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-600 transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-600 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-white text-sm">
          © {new Date().getFullYear()} Career Counseling. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
