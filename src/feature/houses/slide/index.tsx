import { CancelBlackIcon, CancelIcon } from "@/assets/icons";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react"; 

const images = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
   "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
];

const ImageSliderModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;  

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-3xl overflow-hidden ">
        <div className="text-sm flex justify-between text-white h-50  py-3 w-full bg-darkColor items-center mb-1">
          <h4 className="font-bold text-xl mx-auto">House photoes</h4>
          <button
            onClick={onClose}
            className=" mr-2  text-gray-600 hover:text-gray-900 "
          >
            <Image src={CancelIcon} alt="" width={30} />
          </button>
        </div>

        <div className="relative px-5">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-160 object-cover rounded-lg shadow-md transition-transform duration-300"
          />
 
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
          >
            <ChevronLeftIcon width={20} />
          </button>
 
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
          >
            <ChevronRightIcon width={20} />
          </button>
        </div>
 
        <div className="flex justify-center gap-2 mt-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-14 object-cover rounded-lg cursor-pointer transition ${
                index === currentIndex
                  ? "border-4 border-blue-500 scale-110"
                  : "opacity-70"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageSliderModal;
