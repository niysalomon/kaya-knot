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
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
const HouseSuggestedCard = ({
  setIsHouseDetails,
}: {
  setIsHouseDetails: (_value: boolean) => void;
}) => {
  const router = useRouter();
  const images = [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
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
  return (
    <>
      <div className="flex max-w-sm md:max-w-xl sm:max-w-lg xs:max-w-lg bg-white border border-gray-200 rounded-lg shadow p-1 text-gray-600 ">
        <div
          className="overflow-hidden bg-gray-200  mx-auto flex items-center justify-center  "
          ref={emblaRef}
        >
          <div className="flex w-full">
            <div className="relative w-full mx-auto xs:max-w-lg sm:max-w-lg md:max-w-lg">
              <Link href={`./house/house-details`}>
                <img
                  src={slideData[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  onClick={() => setIsHouseDetails(true)}
                />
              </Link>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
              >
                <ChevronLeftIcon width={20} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
              >
                <ChevronRightIcon width={20} />
              </button>

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
        </div>
      </div>
    </>
  );
};
export default HouseSuggestedCard;
