import React, { useContext, useEffect, useState } from "react";



import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function StartLearning() {
  //fetch data from web like lesson page
  const [dataVoc, setdataVoc] = useState(null);
  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/mozaddedalfeshani/bslphotos/refs/heads/main/learnwithvocabularies.json"
        );
        const data = await response.json();
        setdataVoc(data);
      } catch (error) {
        setdataVoc("Failed to fetch lesson data");
      }
    };

    fetchVocabulary();
  }, []);

 

  // console.log("from start learning", logIn);
  return (
    <div className="mx-auto mt-40 px-4">
      <Navbar></Navbar>
    
      {/* Main Section with Animated Heading */}
      <div className="text-center mt-10">
        <h1 className="animate__animated animate__fadeIn animate__delay-1s text-4xl font-bold text-gray-900">
          Our Vocabulary Section.
        </h1>
        <p className="animate__animated animate__fadeIn animate__delay-2s text-lg text-gray-600 mt-4">
          
        </p>
      </div>
      {/* Static Lesson Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {dataVoc ? (
          dataVoc.lessons.map((lesson) => (
            <Link key={lesson.lesson_no} to={`/lesson/${lesson.lesson_no}`}>
              <div className="card bg-[#FF4E50] w-full aspect-w-9 aspect-h-16 shadow-xl text-center p-6">
                
                <p className="text-lg text-gray-700 mt-2">
                  {lesson.lesson_title}
                  
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  {lesson.lesson_description}
                  
                </p>
              </div>
              
            </Link>
            
          ))
        ) : (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>

      {/* Tutorial section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Learn the Alphabet
        </h2>
        <div className="flex justify-center mt-6">
          <iframe
            className="w-full sm:w-3/4 lg:w-1/2"
            height="450"
            src="https://www.youtube.com/embed/D1aVVfBsA5s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="text-center mt-6 flex gap-3 justify-center">
          <Link to="/tutorials">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              View more
            </button>
          </Link>

          <Link to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
