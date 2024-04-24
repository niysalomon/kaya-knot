import { BackgroundIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
const RenterBackground = () => {
  return (
    <>
      <div className="relative">
        <Image src={BackgroundIcon} alt="" className="w-full h-1/2 " />

        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white ml-5">
          <div className="pl-5  w-full">
            <h1 className="text-4xl font-bold">
              Discover the Perfect Roommate Match
            </h1>
            <h5 className="  font-bold py-5">
              Search today to find the perfect roommate match for a joyful
              living experience.
            </h5>
            <div className="flex mt-10  ">
              <Link href="/house">
                <div className="bg-white px-10 mx-4 cursor-pointer text-gray-500 py-1 hover:bg-orange rounded">
                  Find Home
                </div>
              </Link> 
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  py-8 mx-auto md:h-screen lg:py-0 w-full">
            <div className="w-full  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  bg-darkColor border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                  Filter the right match
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Gander
                    </label>
                    <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-1 text-gray-900  ">
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Age
                    </label>
                    <div className="flex">
                      <span className="mr-2">From</span>
                      <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  px-8 text-gray-900  ">
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      <span className="mx-2">To</span>
                      <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  px-8 text-gray-900   ">
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Noise Tolerance
                    </label>
                    <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-1 text-gray-900  ">
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Cleanliness
                    </label>
                    <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-1 text-gray-900  ">
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Smoking
                    </label>
                    <select className="bg-gray-50 border w-full  sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block  p-1 text-gray-900  ">
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="flex items-center ">
                    <label className="block mb-2 text-sm font-medium text-white w-5/6">
                      Pets
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
export default RenterBackground;
