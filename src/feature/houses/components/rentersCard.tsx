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
const RenterCard = ({
  setShowSingleRenter,
}: {
  setShowSingleRenter: (_value: boolean) => void;
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-1 text-gray-600 text-sm">
        <div className="">
          <Image src={RenterImage} alt="" width={380} height={260} />
        </div>
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
          <div className="flex justify-between">
            <div
              onClick={() => setShowSingleRenter(true)}
              className="text-sm cursor-pointer inline-flex items-center px-3    text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
            <div
              onClick={() => setIsLiked(!isLiked)}
              className="rounded-full bg-white w-10 h-10   p-1"
            >
              {isLiked ? (
                <Image
                  className=" pt-0.5 rounded-full   "
                  src={FillHeartIcon}
                  width={25}
                  height={25}
                  alt=""
                />
              ) : (
                <Image
                  className=" pt-0.5 rounded-full   "
                  src={OutlineHeart}
                  width={25}
                  height={25}
                  alt=""
                />
              )}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default RenterCard;
