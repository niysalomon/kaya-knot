import { BackgroundHouseIcon, BackgroundIcon } from "@/assets/icons";
import Image from "next/image";
import { HouseImage } from "../data/images";
const HouseBackground = () => {
  return (
    <>
      <div className="relative mb-2">
        <Image src={BackgroundHouseIcon} alt="" className="w-full h-1/2 " />

        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white ml-5">
          <div className="pl-5  w-full">
            <h1 className="text-4xl font-bold">
              Explore the Joy of Co-Renting
            </h1>
            <h5 className="  font-bold py-5">
              Start your search today for a space that feels just like home
            </h5>
          </div>
          <div className="flex flex-col items-center justify-center  py-8 mx-auto md:h-screen lg:py-0 w-full">
            <div className="w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  bg-darkColor border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight justify-center flex tracking-tight  md:text-2xl text-white space-x-6">
                  <span>Find a Home</span>
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Price range
                    </label>
                    <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-1 text-gray-900  ">
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                   
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Location
                    </label>
                    <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-1 text-gray-900  ">
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Bedrooms
                    </label>
                    <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-1 text-gray-900  ">
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                   
                   

                  <button
                    type="submit"
                    className="w-full text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-orange focus:ring-primary-800"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HouseBackground;
