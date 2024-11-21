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
          Why Choose Our Course?
        </h2>
        <p
          data-aos="fade-right"
          className="text-lg text-center text-gray-600 mb-12"
        >
          The course focuses on real-world conversations, helping students use Arabic effectively in daily life and professional settings.
        </p>
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Cultural Insight
            </h3>
            <p className="text-gray-600">
            Beyond language, the course introduces students to Arab culture, traditions, and history, making the learning experience richer.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Flexible Schedule
            </h3>
            <p className="text-gray-600">
            We offer flexible learning options to suit your availability, making it easier for everyone to join and progress at their own pace.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Comprehensive Learning
            </h3>
            <p className="text-gray-600">
            The course covers all levels, from beginner to advanced, ensuring that students can start from scratch and progress to fluency.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Highlights;
