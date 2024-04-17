import Image from "next/image";
import { HouseImage, RenterImage } from "../data/images";
import {
  BathroomIcon,
  BedIcon,
  CalendarIcon,
  HomeIcon,
  LocationIcon,
  OccupationIcon,
  UserIcon,
} from "@/assets/icons";
const RenterCard = () => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-1 text-gray-600 ">
        <div>
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
            <div className="flex items-center pl-2">
              <Image src={OccupationIcon} width={15} alt="" />
              <div>
                <span className=" ml-1">Banker</span>
              </div>
            </div>
          </div>
          <hr className="font-bold text-lg p-y-2" />
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <Image src={CalendarIcon} width={20} alt="" />
              <div className="flex flex-col px-1">
                <span className=" ml-1 text-sm">ready to move</span>
                <span className=" ml-1 font-semibold">Apr 2024</span>
              </div>
            </div>

            <div className="flex items-center">
              <Image src={LocationIcon} width={20} alt="" />
              <div className="flex flex-col px-1">
                <span className=" ml-1 text-sm">room near</span>
                <div className="flex items-center">
                  <span className="font-semibold ml-1">Muhima</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-3 font-normal text-gray-700 ">
            Hi, I am Peninah and i am a cashier in BK and would love to move
            stay in Nyamirambo for.... ....
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
          </a>
        </div>
      </div>
    </>
  );
};
export default RenterCard;
