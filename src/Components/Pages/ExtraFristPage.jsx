import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Highlights = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-blue-800 mb-6"
          data-aos="zoom-in"
        >
          Why Choose Our Career Counseling?
        </h2>
        <p
          data-aos="fade-right"
          className="text-lg text-center text-gray-600 mb-12"
        >
          Unlock your potential with personalized guidance tailored to your
          aspirations. We help you navigate your career path with clarity and
          confidence.
        </p>
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Expert Counselors
            </h3>
            <p className="text-gray-600">
              Our team of experienced professionals is dedicated to providing
              actionable insights and strategies for your career success.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tailored Guidance
            </h3>
            <p className="text-gray-600">
              We offer customized solutions that align with your skills,
              interests, and long-term goals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Proven Results
            </h3>
            <p className="text-gray-600">
              Join thousands of satisfied clients who have achieved career
              clarity and growth with our support.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
