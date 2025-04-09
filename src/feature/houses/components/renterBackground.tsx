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
            
          </div>
           
        </div>
      </div>
    </>
  );
};
export default RenterBackground;
