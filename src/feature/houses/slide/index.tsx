import { useState } from "react";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg", 
  "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg", 
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg", 
  "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg", 
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg", 

];

const ImageSliderModal=({ isOpen,onClose }:{ isOpen:boolean,onClose:()=>void; })=> {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null; // Hide modal if not open

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg w-[90%] max-w-3xl overflow-hidden ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-gray-600 hover:text-gray-900"
        >
          {/* <X size={24} /> */} close
        </button>

        {/* Current Image (Large) */}
        <div className="relative p-5">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-160 object-cover rounded-lg shadow-md transition-transform duration-300"
          />

          {/* Left Control */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
          >
            {/* <ChevronLeft size={24} /> */}Prev
          </button>

          {/* Right Control */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
          >
            {/* <ChevronRight size={24} /> */} Next
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-14 object-cover rounded-lg cursor-pointer transition ${
                index === currentIndex ? "border-4 border-blue-500 scale-110" : "opacity-70"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ImageSliderModal;