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
          <div className="grid grid-cols-1 gap-4 place-content-center mb-10    ">
            <h1 className="text-6xl font-bold ">
              Where Co-Renting Meets Convenience!
            </h1>
            <h5 className="  font-bold text-xl pt-5">
              Embark on a co-renting journey where spaces and connections
              seamlessly align.{" "}
            </h5>
            <h5 className="  font-bold text-xl  ">
              Step into a world of delightful harmony in shared living.{" "}
            </h5>
            <div className="flex mt-20 place-content-center">
              <Link href="/house">
                <div className="bg-white px-10 mx-4 cursor-pointer text-gray-500 py-1 hover:bg-orange rounded">
                  Find Home
                </div>
              </Link>
              <Link href="/renters">
                <div className="bg-white px-10 mx-4 cursor-pointer text-gray-500 py-1 hover:bg-orange rounded">
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
