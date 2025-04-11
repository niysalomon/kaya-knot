import Image from "next/image";
import { HouseImage, RenterImage } from "../data/images";
import { 
  CalendarIcon,
  FillHeartIcon, 
  LocationIcon,
  OccupationIcon,
  OutlineHeart,
  UserIcon,
} from "@/assets/icons";
import { useState } from "react";
import Link from "next/link";
const RenterCard = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <>
      <div className="max-w-sm md:max-w-xl sm:max-w-lg xs:max-w-lg bg-white border border-gray-200 rounded-lg shadow p-1 text-gray-600 ">
      <Link href={`./renters/renter-details`}>
        <div className="w-full mx-auto xs:max-w-lg sm:max-w-lg md:max-w-lg cursor-pointer" 
        // onClick={() => setShowSingleRenter(true)}
        >

          <Image src={RenterImage} alt="" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        </div>
        </Link>
        <div className="p-5">
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <Image src={UserIcon} alt="" />
              <span className="font-bold ml-1">Penin</span>
            </div>
            <div className="px-4 bg-gray-500 rounded-full flex items-center justify-between text-white">
              <span className="text-white  ">500k</span>{" "}
              <span className="text-xs mt-1 ml-1">Rwf</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center py-2 ml-1">
              <Image src={OccupationIcon} width={15} alt="" />
              <div>
                <span className=" ml-1">Banker</span>
              </div>
            </div>
          </div>
          <hr className="font-bold text-lg" />
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div className="flex flex-col px-1">
                <div className="flex items-center justify-between">
                  {" "}
                  <Image src={CalendarIcon} width={20} alt="" />
                  <span className=" ml-1 text-sm">ready to move</span>
                </div>
                <span className=" ml-4 font-semibold">Apr 2024</span>
              </div>
            </div>

            <div className="flex items-center ">
              <div className="flex flex-col px-1">
                <div className="flex items-center justify-between">
                  {" "}
                  <Image src={LocationIcon} width={15} alt="" />
                  <span className=" ml-1 text-sm">room near</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold ml-4">Muhima</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-3 font-normal text-gray-700 ">
            Hi, I am Peninah and i am a cashier in BK and would love to move
            stay in Nyamirambo for.... ....
          </p> 
        </div>
      </div>
    </>
  );
};
export default RenterCard;
