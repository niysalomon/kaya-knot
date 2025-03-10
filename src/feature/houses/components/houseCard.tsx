import Image from "next/image";
import { HouseImage } from "../data/images";
import {
  BathroomIcon,
  BedIcon,
  FillHeartIcon,
  HomeIcon,
  LocationIcon,
  OutlineHeart,
} from "@/assets/icons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { slideData, sliderData } from "../data/sliderData";
const HouseCard = ({
  setIsHouseDetails,
}: {
  setIsHouseDetails: (_value: boolean) => void;
}) => {
  const images = [
    "https://source.unsplash.com/800x500/?city",
    "https://source.unsplash.com/800x500/?nature",
    "https://source.unsplash.com/800x500/?technology",
    "https://source.unsplash.com/800x500/?city",
    
  ];
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  console.log("currentIndex====",currentIndex)
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-1 text-gray-600 ">
        {/* <div>
          <Image src={HouseImage} alt="" width={380} height={260} />
        </div> */}
        <div
          className="overflow-hidden bg-gray-200  mx-auto flex items-center justify-center  "
          ref={emblaRef}
        >
          <div className="flex">
            {/* {sliderData?.map((item) => {
              return (
                <div
                  className="embla__slide relative h-full w-full"
                  key={item.id}
                > 
                  <img
                    className="w-full h-full rounded-t-lg"
                    src={item.url}
                    alt=""
                  />
 
                  <div className="absolute top-5 flex justify-between w-full  ">
                    <span className="bg-darkColor px-4 py-0.5 rounded-full text-sm text-white">
                      Apartment
                    </span>
                    <div onClick={()=>setIsLiked(!isLiked)} className="mr-2 rounded-full bg-white w-7 h-7   p-1">
                      {isLiked?<Image
                        className=" pt-0.5 rounded-full   "
                        src={FillHeartIcon}
                        width={20}
                        height={20}
                        alt=""
                      />:<Image
                      className=" pt-0.5 rounded-full   "
                      src={OutlineHeart}
                      width={20}
                      height={20}
                      alt=""
                    />}
                    </div>
                  </div>
                </div>
              );
            })} */}
            <div className="relative w-full max-w-lg mx-auto">
              <img
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
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between ">
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
              Amahumbezi house
            </h5>
            <div className="px-4 text-sm bg-gray-500 rounded-full flex items-center justify-between text-white">
              <span className="text-white  ">500k</span>{" "}
              <span className="text-xs mt-1 ml-1">Rwf</span>
            </div>
          </div>
          <div className="flex justify-between items-center my-2 text-sm">
            <div className="flex items-center">
              <Image src={HomeIcon} alt="" />
              <span className="font-bold ml-1 ">House</span>
            </div>

            <span className="text-gray-600 font-bold">Semi-booked</span>
          </div>
          <hr className="font-bold text-lg py-1" />
          <div className="flex justify-between items-center pb-1  text-sm">
            <div className="flex items-center">
              <Image src={BedIcon} alt="" />
              <div>
                <span className=" ml-1">3</span>
                <span className=" ml-1">rooms</span>
              </div>
            </div>

            <div className="flex items-center">
              <Image src={BathroomIcon} alt="" />
              <div>
                <span className=" ml-1">3</span>
                <span className=" ml-1">baths</span>
              </div>
            </div>
          </div>
          <div className="flex items-center py-1 text-sm">
            <Image src={LocationIcon} alt="" />
            <span className="font-semibold ml-1">Muhima</span>
          </div>

          <p className="mb-3 font-normal text-gray-700 text-sm ">
            This house was built next year, it is cozy and has an access to a
            tarmac road and the house....
          </p>
          <div
            onClick={() => setIsHouseDetails(true)}
            className=" text-sm cursor-pointer inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default HouseCard;
