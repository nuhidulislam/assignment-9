
import frist from "../../assets/CareerCounseling-1.jpeg";
import second from "../../assets/CareerCounseling-2.jpg";
import tree from "../../assets/CareerCounseling-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 100, // Trigger animations 100px from the element
      once: true, // Run animation only once
    });
  }, []);
  return (
    <div data-aos="fade-right" className="my-5">
      <div className="carousel w-full object-cover ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={frist} className="w-full h-[90vh] object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center text-white w-[90%] md:w-[80%] mx-auto">
                
              </h2>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={second} className="w-full h-[90vh] object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center text-green-600 w-[90%] md:w-[80%] mx-auto">
              
              </h2>
            </div>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={tree} className="w-full h-[90vh] object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div>
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center text-white w-[90%] md:w-[80%] mx-auto">
                Every day try to learn some ...............
              </h2>
            </div>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
