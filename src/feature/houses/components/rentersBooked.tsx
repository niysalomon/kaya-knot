import { BackIcon } from "@/assets/icons";
import RenterCard from "./rentersCard";
import Image from "next/image";
import { useState } from "react";

const RentersBooked = ({
  setShowRenters,
  setShowSingleRenter,
}: {
  setShowRenters: (_value: boolean) => void;
  setShowSingleRenter : (_value: boolean) => void;
}) => { 
  const data = ["1", "2", "3"];
  return (
    <>
      <div className=" text-gray-900 ">
        <div className="cursor-pointer pl-4" onClick={()=>{setShowRenters(false)}}><Image src={BackIcon} alt="" /></div>
        <p className="text-4xl font-bold py-4">Already booked by 2 people</p>
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-10 sm:col-span-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              {data.map((key) => (
                <RenterCard setShowSingleRenter={setShowSingleRenter} />
              ))}
            </div>
            <p>One room remains before they can settle in</p>
            <div className="flex items-center py-5"><p>Do you want to join? </p><button
                type="submit"
                className="w-48 text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-darkColor focus:ring-primary-800"
              >
                Book
              </button></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RentersBooked;
