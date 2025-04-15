import Image from "next/image";
import { HouseImage } from "../data/images";
import HouseBackground from "./houseBackground";
import {
  BackIcon,
  BackgroundHouseIcon,
  BathroomIcon,
  BedIcon,
  CarIcon,
  SendIcon,
  ShareIcon,
  UserIcon,
} from "@/assets/icons";
import { useEffect, useState } from "react";
import RentersBooked from "./rentersBooked";
import dynamic from "next/dynamic";
import BookingConfirmation from "./bookingConfirm";
import ImageSliderModal from "../slide";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import Map from "./map";
const Map = dynamic(() => import("./map"), { ssr: false });
const SingleHouseDetails = () => {
  const [showRenters, setShowRenters] = useState<boolean>(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const [showBookingConfirmation, setShowBookingConfirmation] =
    useState<boolean>(false);

  const images = [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
    "https://images.unsplash.com/photo-1599423300746-b62533397364",
  ];
  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toFixed(6));
          setLongitude(position.coords.longitude.toFixed(6));
          console.log("===latitude", latitude);
          console.log("===longitude", longitude);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    }
  };
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 5; // Number of images visible at a time

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (startIndex + visibleImages < images.length) {
      setStartIndex((prev) => prev + 1);
    }
  };
  useEffect(() => {
    handleGetCurrentLocation();
  }, [latitude, longitude]);
  return (
    <>
      {showRenters ? (
        <RentersBooked />
      ) : (
        <div className="grid gap-4 px-10 text-gray-500">
          <div className="grid grid-cols-8 gap-4 pt-2">
            <div className=" w-full grid row-span-4 col-span-2">
              <div className=" block max-w-sm p-6 ml-4 text-gray-600 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 py-3  ">
                  Basic information
                </h5>
                <div className="flex flex-col  justify-between items-center">
                  <div className="flex justify-between items-center w-full px-4 py-5 ">
                    <div className="flex flex-col">
                      <span>Location</span>{" "}
                      <span className="font-bold">Kanombe</span>
                    </div>
                    <div className="flex flex-col">
                      <span>Amount</span>{" "}
                      <span className="font-bold">600k</span>
                    </div>
                  </div>
                </div>
                <hr className="bg-grayOrange size-lg" />
                <div className="flex flex-col   justify-between">
                  <div className="flex  justify-between items-center py-4">
                    <div className="flex  justify-between items-center">
                      <Image src={BedIcon} alt="" width={20} />
                      <span className="px-1 xs">2 rooms</span>{" "}
                    </div>
                    <div className="flex  justify-between items-center">
                      {" "}
                      <Image src={BathroomIcon} width={15} alt="" />
                      <span className="px-1 xs">2 bath</span>{" "}
                    </div>
                    <div className="flex  justify-between items-center ">
                      {" "}
                      <Image src={CarIcon} alt="" width={15} />
                      <span className="px-1">1 car park</span>{" "}
                    </div>
                  </div>
                  <p className="p-2">
                    The house is wonderfully furnished, tastefully furnished. In
                    particular, we loved the roof terrace and pool. The location
                    is very nice and quiet.....
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-fit grid row-span-2 col-span-4">
              <Image
                src={BackgroundHouseIcon}
                className="w-xl h-auto shadow-xl"
                alt=""
              />
            </div>
            <div className="min-w-fit grid row-span-2 col-span-2 text-gray-700 ml-4">
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900  ">
                  Individual share
                </h5>
                <div
                  className="w-full text-darkColor focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-md px-2 py-2.5 text-center  border border-grayOrange "
                >
                  200k <span className="text-xs">Rwf/Month</span>
                </div>
                <div className=" justify-center p-4">
                  {" "}
                  <span>Shared rent</span> <span>600k</span>
                  <span className="text-xs">Rwf/Month</span>
                </div>
                <hr className="bg-grayOrange size-lg" />
                <div className="flex flex-col   justify-between">
                  <div className="flex  justify-between items-center">
                    <span>2 rooms booked</span> <span>1 room remains</span>
                  </div>
                  <div className="py-2 flex  items-center py-4 px-4">
                    Booked by
                    <div className="flex -space-x-4 rtl:space-x-reverse px-2">
                      <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src={UserIcon}
                        alt=""
                      />
                      <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src={UserIcon}
                        alt=""
                      />
                      <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src={UserIcon}
                        alt=""
                      />
                      <a
                        onClick={() => setShowRenters(true)}
                        className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                        href="#"
                      >
                        +1
                      </a>
                    </div>{" "}
                  </div>
                </div>

                <button
                  onClick={() =>
                    setShowBookingConfirmation(!showBookingConfirmation)
                  }
                  type="submit"
                  className="w-full text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-darkColor focus:ring-primary-800"
                >
                  Book
                </button>
                <div className="flex my-4 ml-5">
                  <Image src={ShareIcon} alt="" className="mx-2" />
                  <button className="p-2 border rounded-lg px-2">
                    Share to your favorities
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center ">
            <div className="flex items-center gap-2 overflow-hidden">
              <button
                onClick={prevSlide}
                className={`bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition ${
                  startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={startIndex === 0}
              >
                <ChevronLeftIcon width={20} />
              </button>

              <div className="flex gap-2">
                {images
                  .slice(startIndex, startIndex + visibleImages)
                  .map((src, index) => (
                    <img
                      onClick={() => setModalOpen(true)}
                      key={index}
                      src={src}
                      width={250}
                      alt={`Slide ${index + 1}`}
                      className="  object-cover rounded-lg shadow-lg transition transform hover:scale-105"
                    />
                  ))}
              </div>

              <button
                onClick={nextSlide}
                className={`bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition ${
                  startIndex + visibleImages >= images.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={startIndex + visibleImages >= images.length}
              >
                <ChevronRightIcon width={20} />
              </button>
            </div>
            <ImageSliderModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
          </div>
          <div className="grid  px-1 text-gray-500">
            <fieldset className="border p-2 rounded">
              <legend className="  px-2 py-1 font-medium">
                <span>Co-renting</span>
              </legend>
              <div className="grid grid-cols-5   ">
                <div className="flex flex-col  items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
                  <span className="">Individual share</span>
                  <div className="  rounded-lg px-1 py-2 ">
                    <span>200k </span>{" "}
                    <span className="text-xs">Rwf/Month</span>
                  </div>
                </div>
                <div className="flex flex-col items-center p-2 bg-white mx-2 border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
                  <span className="">Booked Rooms</span>
                  <div className="  rounded-lg px-2 py-2 ">
                    <span>3 </span> in <span className="text-xs">4</span>
                  </div>
                </div>
                <div className="flex flex-col items-center p-2 bg-white mx-2 border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
                  <span className=""> Booked by</span>
                  <div className="  rounded-lg px-2 py-2 ">
                    <div className="flex -space-x-4 rtl:space-x-reverse px-2">
                      <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src={UserIcon}
                        alt=""
                      />
                      <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src={UserIcon}
                        alt=""
                      />
                      <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src={UserIcon}
                        alt=""
                      />
                      <a
                        onClick={() => setShowRenters(true)}
                        className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                        href="#"
                      >
                        +1
                      </a>
                    </div>{" "}
                  </div>
                </div>
                <div className="flex flex-col items-center p-2 bg-white mx-2 border border-gray-200 rounded-lg shadow hover:bg-gray-100  ">
                  <button className="p-2  rounded-lg px-2">
                    Share to your favorities
                  </button>
                  <div className="  rounded-lg px-2 py-2 ">
                    <Image src={ShareIcon} alt="" className="mx-2" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center  p-2 bg-white mx-2   rounded-lg ">
                  <div></div>
                <button
              onClick={() =>
                setShowBookingConfirmation(!showBookingConfirmation)
              }
              type="submit"
              className="w-full text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-darkColor focus:ring-primary-800"
            >
              Book
            </button>
                </div>
              </div>
            </fieldset>
            
          </div>
          <div className="flex w-full  ">
            <div className="mx-5">
              <hr className="my-2" />
              <div className=" my-2">
                <span className="text-xl font-bold">Description</span>
                <h5>
                  Cozy Apartment in a secure neighborhood within walking
                  distance of woodland shopping center, restaurants and cafés.
                  All around such lovely experience. The space is modestly
                  beautiful and really adds to the experience of being up in the
                  mountains
                </h5>
              </div>
              <Map />
            </div>

            <div className=" w-1/3 bg-white border border-gray-200 rounded-xl shadow p-1 text-gray-600 bg-gray-50  ">
              <div className="p-5  max-h-[420px] overflow-auto">
                <div className="flex items-start gap-2.5 my-1">
                  <Image src={UserIcon} alt="" />
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 px-2 border-gray-200 bg-gray-100 rounded-[12px]  ">
                    <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse py-1">
                      <span className="text-sm font-semibold text-gray-900  ">
                        Bonnie Green
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900  ">
                      That is awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                    <div className="flex justify-end">
                      <span className="text-sm font-normal text-gray-500  ">
                        11:46
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex  items-start gap-2.5 justify-end">
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 px-2 border-gray-200 bg-gray-100 rounded-[12px]  ">
                    <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse py-1">
                      <span className="text-sm font-semibold text-gray-900  ">
                        Bonnie Green
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900  ">
                      That is awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                    <div className="flex justify-end">
                      <span className="text-sm font-normal text-gray-500  ">
                        11:46
                      </span>
                    </div>
                  </div>
                  <Image src={UserIcon} alt="" />
                </div>
                <div className="flex items-start gap-2.5 my-1">
                  <Image src={UserIcon} alt="" />
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 px-2 border-gray-200 bg-gray-100 rounded-[12px]  ">
                    <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse py-1">
                      <span className="text-sm font-semibold text-gray-900  ">
                        Bonnie Green
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900  ">
                      That is awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                    <div className="flex justify-end">
                      <span className="text-sm font-normal text-gray-500  ">
                        11:46
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex  items-start gap-2.5 justify-end">
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 px-2 border-gray-200 bg-gray-100 rounded-[12px]  ">
                    <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse py-1">
                      <span className="text-sm font-semibold text-gray-900  ">
                        Bonnie Green
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900  ">
                      That is awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                    <div className="flex justify-end">
                      <span className="text-sm font-normal text-gray-500  ">
                        11:46
                      </span>
                    </div>
                  </div>
                  <Image src={UserIcon} alt="" />
                </div>
              </div>
              <div className="flex items-center  pl-3 pb-3 sticky top-0 ">
                <textarea
                  placeholder="chat with penina......"
                  className="w-full shadow rounded-md border p-2"
                ></textarea>
                <div className=" relative bg-darkColor w-10 h-10 ml-1 rounded-full items-center">
                  <Image
                    className="absolute right-1 top-2 "
                    width={25}
                    src={SendIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {showBookingConfirmation && (
            <BookingConfirmation
              setShowBookingConfirmation={setShowBookingConfirmation}
            />
          )}
        </div>
      )}
    </>
  );
};
export default SingleHouseDetails;
