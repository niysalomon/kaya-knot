import Image from "next/image";
import {
  HomeIcon,
  HousesIcon,
  KayaLogo,
  SearchIcon,
  UserIcon,
} from "@/assets/icons";
import { useState } from "react";
import SingleHouseUnity from "./unityHouse/houseUnity";
import MainHouse from "./mainHouse/mainHouse";
const HousesPage = () => {
  const [houseTabs, setHouseTabs] = useState<number>(0);
  return (
    <>
      <div className="p-4 sm:ml-64 h-screen   ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg bg-white">
          <div className="gap-4 mb-4 w-full">
            <div className="border-b border-gray-200 ">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-900  ">
                <li className="me-2" onClick={() => setHouseTabs(0)}>
                  <div
                    className={`inline-flex items-center justify-center p-2 ${
                      houseTabs === 0
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
                    }  rounded-t-lg cursor-pointer   `}
                  >
                    <Image src={HousesIcon} alt="" width={17} />
                    <span className="ml-2">SINGLE UNITS</span>
                  </div>
                </li>
                <li className="me-2" onClick={() => setHouseTabs(1)}>
                  <div
                    className={`inline-flex items-center justify-center p-2 ${
                      houseTabs === 1
                        ? " text-blue-600 border-b-2 border-blue-600"
                        : "hover:text-gray-600 hover:border-gray-300"
                    } rounded-t-lg cursor-pointer`}
                  >
                    <Image src={HomeIcon} alt="" />{" "}
                    <span className="ml-2">MAIN HOUSE</span>
                  </div>
                </li>
              </ul>
            </div>
            {houseTabs === 0 ? <SingleHouseUnity /> : <MainHouse />}
          </div>
        </div>
      </div>
    </>
  );
};
export default HousesPage;
