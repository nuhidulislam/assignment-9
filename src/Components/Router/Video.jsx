import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";


export default function Tutorials() {
  return (

    
    <div className="container mx-auto p-2">
        <div className="w-full">
        <Navbar></Navbar>
        </div>
      <h1 className="text-3xl font-bold text-center mt-20 mb-4">
        Learn Vocabularies From Videos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="card card-border video-responsive">
          <iframe
            src="https://www.youtube.com/embed/D1aVVfBsA5s"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="card card-border video-responsive">
          <iframe
            src="https://www.youtube.com/embed/X1mC1XY65Kc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="card card-border video-responsive">
          <iframe
            src="https://www.youtube.com/embed/D1aVVfBsA5s"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="card card-border video-responsive">
          <iframe
            src="https://www.youtube.com/embed/X1mC1XY65Kc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="card card-border video-responsive">
          <iframe
            src="https://www.youtube.com/embed/6e145BWP7ng"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className="card card-border video-responsive">
          <iframe
            src="https://www.youtube.com/embed/X1mC1XY65Kc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/packages" className="btn btn-primary mt-4">
          Start Lesson
        </Link>
      </div>
    </div>
  );
}
