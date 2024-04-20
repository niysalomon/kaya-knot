import Image from "next/image";
import { HouseImage } from "../data/images";
import HouseBackground from "./houseBackground";
import {
  BackIcon,
  BackgroundHouseIcon,
  BathroomIcon,
  BedIcon,
  CarIcon,
  ShareIcon,
  UserIcon,
} from "@/assets/icons";
import { useState } from "react";
import RentersBooked from "./rentersBooked";
const SingleHouseDetails = ({
  setIsHouseDetails,
  setShowSingleRenter,
}: {
  setIsHouseDetails: (_value: boolean) => void;
  setShowSingleRenter: (_value: boolean) => void;
}) => {
  const [showRenters, setShowRenters] = useState<boolean>(false);
  return (
    <>
      {showRenters ? (
        <RentersBooked
          setShowRenters={setShowRenters}
          setShowSingleRenter={setShowSingleRenter}
        />
      ) : (
        <div className="grid gap-4 px-10">
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
                      <Image src={BedIcon} alt="" />
                      <span className="px-1">2 rooms</span>{" "}
                    </div>
                    <div className="flex  justify-between items-center">
                      {" "}
                      <Image src={BathroomIcon} alt="" />
                      <span className="px-1">2 bath</span>{" "}
                    </div>
                    <div className="flex  justify-between items-center ">
                      {" "}
                      <Image src={CarIcon} alt="" />
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
                        +99``
                      </a>
                    </div>{" "}
                  </div>
                </div>

                <button
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
        </div>
      )}
    </>
  );
};
export default SingleHouseDetails;
