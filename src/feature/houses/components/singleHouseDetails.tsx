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
// import Map from "./map";
const Map = dynamic(() => import("./map"), { ssr: false });
const SingleHouseDetails = ({
  setIsHouseDetails,
  setShowSingleRenter,
}: {
  setIsHouseDetails: (_value: boolean) => void;
  setShowSingleRenter: (_value: boolean) => void;
}) => {
  const [showRenters, setShowRenters] = useState<boolean>(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [showBookingConfirmation, setShowBookingConfirmation] =
    useState<boolean>(false);

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

  useEffect(() => {
    handleGetCurrentLocation();
  }, [latitude, longitude]);
  return (
    <>
      {showRenters ? (
        <RentersBooked
          setShowRenters={setShowRenters}
          setShowSingleRenter={setShowSingleRenter}
        />
      
      ) : (
        <div className="grid gap-4 px-10 text-gray-500">
          <div
            className="cursor-pointer pl-4"
            onClick={() => {
              setIsHouseDetails(false);
            }}
          >
            <Image src={BackIcon} alt="" />
          </div>
          <div className="grid grid-cols-8 gap-4">
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
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">
                  Individual share
                </h5>
                <div
                  className="w-full text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-md px-2 py-2.5 text-center  bg-grayOrange "
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
                  <div className="py-2 flex items-center py-4 px-4">
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
                        +99
                      </a>
                    </div>{" "}
                  </div>
                </div>

                <button
                  onClick={() => setShowBookingConfirmation(!showBookingConfirmation)}
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
          <div className="grid grid-cols-6 place-content-center gap-4 ">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={HouseImage}
                alt=""
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={HouseImage}
                alt=""
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={HouseImage}
                alt=""
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={HouseImage}
                alt=""
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={HouseImage}
                alt=""
              />
            </div>
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
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-br-[42px]  ">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900  ">
                        Bonnie Green
                      </span>
                      <span className="text-sm font-normal text-gray-500  ">
                        11:46
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900  ">
                      That's awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                  </div>
                </div>
                <div className="flex  items-start gap-2.5 justify-end">
                  <div className="flex  flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-bl-[42px]  ">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900  ">
                        Bonnie Green
                      </span>
                      <span className="text-sm font-normal text-gray-500  ">
                        11:46
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900  ">
                      That's awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                  </div>
                  <Image src={UserIcon} alt="" />
                </div>
                <div className="flex items-start gap-2.5 my-1">
                  <Image src={UserIcon} alt="" />
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-br-[42px]  ">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-lg text-gray-900  ">
                        Bonnie Green
                      </span>
                      <span className="text-sm font-normal text-gray-500  ">
                        11:46
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900  ">
                      That's awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                  </div>
                </div>
                <div className="flex  items-start gap-2.5 justify-end">
                  <div className="flex  flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-bl-[42px]  ">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-gray-900  ">
                        Bonnie Green
                      </span>
                      <span className="text-sm font-normal text-gray-500  ">
                        11:46
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900  ">
                      That's awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                  </div>
                  <Image src={UserIcon} alt="" />
                </div>
              </div>
              <div className="flex items-center  pl-3 pb-3 sticky top-0 ">
                <textarea
                  placeholder="chat with penina......"
                  className="w-full shadow rounded-md border p-2"
                ></textarea>
                <div className="  w-20">
                  <Image
                    className="bg-orange "
                    width={25}
                    src={SendIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
         { showBookingConfirmation &&
        <BookingConfirmation
          setShowBookingConfirmation={setShowBookingConfirmation}
        />}
        </div>
      )}
    </>
  );
};
export default SingleHouseDetails;
