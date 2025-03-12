import { BackgroundIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
const RenterBackground = () => {
  return (
    <>
      <div className="relative w-full h-auto xl:h-auto lg:h-auto md:h-[800px] sm:h-[700px] xs:h-[650px] ">
        <Image src={BackgroundIcon} alt="" className="w-full h-auto " />

        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 "></div>

        <div className="h-full absolute inset-0 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col items-center justify-center text-white ">
          <div className="pl-5 w-full">
            <h1 className="g:text-6xl md:text-4xl sm:text-2xl xs:text-xl lg:font-bold md:font-bold sm:font-bold xs:font-bold sm:text-center xs:text-center">
              Discover the Perfect Roommate Match
            </h1>
            <h5 className=" lg:font-bold md:font-normal sm:font-light xs:font-light lg:text-xl md:text-sm sm:text-sm pt-5 sm:pt-2 sm:text-center xs:text-center">
              Search today to find the perfect roommate match for a joyful
              living experience.
            </h5>
            <div className="flex mt-10  ">
              <Link href="/house">
                <div className="bg-white  px-10 xs:px-5 sm:xs:mx-2 xs:mx-2 mx-4 cursor-pointer md:text-xl sm:text:sm xs:text-xs text-gray-500 py-1 hover:bg-orange rounded">
                  Find Home
                </div>
              </Link> 
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0 w-full ">
            <div className="w-full  rounded-lg shadow md:mt-0 lg:max-w-lg md:max-w-full sm:max-w-full xl:p-0  bg-darkColor border-gray-700">
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
