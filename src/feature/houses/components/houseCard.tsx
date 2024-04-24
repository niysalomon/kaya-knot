import Image from "next/image";
import { HouseImage } from "../data/images";
import { BathroomIcon, BedIcon, HomeIcon, LocationIcon } from "@/assets/icons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import sliderData from "../data/sliderData";
const HouseCard = ({
  setIsHouseDetails,
}: {
  setIsHouseDetails: (_value: boolean) => void;
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-1 text-gray-600 ">
        {/* <div>
          <Image src={HouseImage} alt="" width={380} height={260} />
        </div> */}
        <div
      className="overflow-hidden bg-gray-200  mx-auto flex items-center justify-center  "
      ref={emblaRef}>
      <div className="flex">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative h-full w-full" key={item.id}>

                {/* the image */}
              <img className="w-full h-full rounded-t-lg" src={item.url} alt="" />

              {/* title/subtitle */}
              {/* <h1 className="absolute top-1/2 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48 bg-cyan-600 py-2 lg:py-4 px-2 lg:px-8 text-xl lg:text-2xl text-white font-extrabold">
                {item.title}
              </h1> */}
            </div>
          );
        })}
      </div>
    </div>
        <div className="p-5">
          <div className="flex items-center justify-between ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Amahumbezi house
            </h5>
            <div className="px-4 bg-gray-500 rounded-full flex items-center justify-between text-white">
              <span className="text-white  ">500k</span>{" "}
              <span className="text-xs mt-1 ml-1">Rwf</span>
            </div>
          </div>
          <div className="flex justify-between items-center my-2">
            <div className="flex items-center">
              <Image src={HomeIcon} alt="" />
              <span className="font-bold ml-1">House</span>
            </div>

            <span className="text-gray-600 font-bold">Semi-booked</span>
          </div>
          <hr className="font-bold text-lg py-2" />
          <div className="flex justify-between items-center py-2">
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
          <div className="flex items-center py-1">
            <Image src={LocationIcon} alt="" />
            <span className="font-semibold ml-1">Muhima</span>
          </div>

          <p className="mb-3 font-normal text-gray-700 ">
            This house was built next year, it is cozy and has an access to a
            tarmac road and the house....
          </p>
          <div
            onClick={() => setIsHouseDetails(true)}
            className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
                stroke-linecap="round"
                stroke-linejoin="round"
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
