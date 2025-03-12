import {
  BackgroundHouseIcon,
  BackgroundIcon,
  HomeImageBackground,
} from "@/assets/icons";
import Image from "next/image";
import { HouseImage } from "../data/images";
import Link from "next/link";
const HomeBackground = () => {
  return (
    <>
      <div className="relative mb-2">
        <Image src={HomeImageBackground} alt="" className="w-full h-1/2 " />

        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>

        <div className="absolute inset-0 flex place-content-center justify-center text-white ml-5">
          <div></div>
          <div className="grid grid-cols-1 gap-4 place-content-center lg:mb-10 md:mb-10 sm:mb-3   ">
            <span className="lg:text-6xl md:text-4xl sm:text-2xl xs:text-xl lg:font-bold md:font-bold sm:font-bold xs:font-bold sm:text-center xs:text-center">
              Where Co-Renting Meets Convenience!
            </span>
            <h5 className="  lg:font-bold md:font-bold  lg:text-xl md:text-xl sm:text:sm pt-5 sm:pt-2 flex sm:text-center xs:text-center text-center">
              Embark on a co-renting journey where spaces and connections
              seamlessly align.{" "}
            </h5>
            <h5 className="  lg:font-bold md:font-bold  lg:text-xl md:text-xl sm:text:sm pt-5 sm:pt-2 sm:text-center xs:text-center ">
              Step into a world of delightful harmony in shared living.{" "}
            </h5>
            <div className="flex lg:mt-20 sm:mt-2 place-content-center">
              <Link href="/house">
                <div className="bg-white  px-10 xs:px-5 sm:xs:mx-2 xs:mx-2 mx-4 cursor-pointer md:text-xl sm:text:sm xs:text-xs text-gray-500 py-1 hover:bg-orange rounded">
                  Find Home
                </div>
              </Link>
              <Link href="/renters">
                <div className="bg-white px-10 xs:px-5 sm:xs:mx-2 xs:mx-2 mx-4 cursor-pointer md:text-xl sm:text:sm xs:text-xs text-gray-500 py-1 hover:bg-orange rounded">
                  Find a Roommate
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeBackground;
