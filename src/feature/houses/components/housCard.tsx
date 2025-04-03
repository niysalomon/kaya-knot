import { useState } from "react";
import Image from "next/image";

const images = [
  "https://source.unsplash.com/800x500/?nature",
  "https://source.unsplash.com/800x500/?city",
  "https://source.unsplash.com/800x500/?technology",
];
import {slideData, sliderData} from "../data/sliderData";
const PhotoSlider=()=> {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
       
      <Image
        src={slideData[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />

      {/* Left Control */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
      >
        {/* <ChevronLeft size={24} /> */}Back
      </button>

      {/* Right Control */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
      >
        {/* <ChevronRight size={24} /> */} Next
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default PhotoSlider;
