import { BackgroundHouseIcon, BackgroundIcon } from "@/assets/icons";
import Image from "next/image";
import { HouseImage } from "../data/images";
import Link from "next/link";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "/node_modules/react-datepicker/dist/react-datepicker.css";

import { format, differenceInDays } from "date-fns";
import { useState } from "react";
const HouseBackground = () => {
  return (
    <>
      <div className="relative mb-2">
        <Image src={BackgroundHouseIcon} alt="" className=" " />

        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="h-full absolute inset-0 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col items-center justify-center text-white ">
          <div className="pl-5 w-full">
            <h1 className="g:text-6xl md:text-4xl sm:text-2xl xs:text-xl lg:font-bold md:font-bold sm:font-bold xs:font-bold sm:text-center xs:text-center">
              Explore the Joy of Co-Renting
            </h1>
            <h5 className=" lg:font-bold md:font-normal sm:font-light xs:font-light lg:text-xl md:text-sm sm:text-sm pt-5 sm:pt-2 sm:text-center xs:text-center">
              Start your search today for a space that feels just like home
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default HouseBackground;
