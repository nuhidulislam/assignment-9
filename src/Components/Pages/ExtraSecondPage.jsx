import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SuccessStories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
  const testimonials = [
    {
      name: "Abdullah",
      image:
        "https://i.ibb.co.com/8mYqvkN/279857720-418405620100437-8409825086807981060-n.jpg",
      feedback:
        "I’ve learned so much from this Arabic course. The teachers were incredibly supportive, and their teaching methods helped me master the language. Thank you so much!",
      designation: "A Student",
    },
    {
      name: "Abdur Rahman",
      image:
        "https://i.ibb.co.com/kmVCD58/download-3.jpg",
      feedback:
        "I’ve always been interested in learning Arabic, and this course has made it possible for me to do so. I’m really happy and grateful for this opportunity!",
      designation: "Teacher",
    },
    {
      name: "Alauddin",
      image:
        "https://i.ibb.co.com/nM1CWsn/download-4.jpg",
      feedback:
        "This course has opened up a new world for me. The teachers' guidance and the well-structured lessons have helped me become proficient in Arabic. Thank you!",
      designation: "Teacher",
    },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          data-aos="zoom-in-up"
          className="text-4xl font-bold text-center text-blue-800 mb-6"
        >
          Our Success Stories
        </h2>
        <p
          data-aos="zoom-in"
          className="text-lg text-center text-gray-600 mb-12"
        >
          Our Arabic course has been a tremendous success, with a growing number of students who have successfully mastered the language. Thanks to our comprehensive curriculum, expert instructors, and interactive teaching methods, students have shown significant improvement in their speaking, reading, and writing skills.
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-[#71B280] rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
