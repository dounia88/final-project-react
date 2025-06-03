import React, { useState, useEffect } from "react";
import carousel1 from "../../pages/images/carousel1.jpg";
import carousel2 from "../../pages/images/carousel2.jpg";
import carousel3 from "../../pages/images/carousel3.webp";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: carousel1,
      title: "Women Collection 2018",
      subtitle: "NEW ARRIVALS"
    },
    {
      image: carousel2,
      title: "Men Collection 2018",
      subtitle: "NEW SEASON"
    },
    {
      image: carousel3,
      title: "Women Collection 2018",
      subtitle: "NEW TREND"
    }
  ];

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
     
      {slides.map(( slides, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slides.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-20 flex flex-col items-center justify-center text-white">
            <h2 className="text-xl mb-2">{slides.title}</h2>
            <h1 className="text-5xl font-bold mb-8">{slides.subtitle}</h1>
            <button className="bg-white text-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
      ))}

     
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-black p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-black p-2 rounded-full"
      >
        →
      </button>

    
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;   