import Link from "next/link";
import {
  ChevronDoubleRightIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  BudgetIcon,
  CancelBlackIcon,
  DashboadIcon,
  HomeIcon,
  HousesIcon,
  LocationIcon,
  MessageIcon,
  SearchIcon,
  SettingsIcon,
  StatisticsIcon,
  TenantsIcon,
} from "@/assets/icons";
import { facilities, houses, locations } from "@/feature/houses/data/dummy";
import { useRef, useState } from "react";

const SearchSideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (_value: boolean) => void;
}) => {
  // const openingMenu = useRef<HTMLDivElement>(null);
  // const handleClickOutsideDropDownMenu = (e: any) => {
  //   if (open && !openingMenu.current?.contains(e.target as Node)) {
  //     setOpen(!open);
  //   }
  // };
  // if (typeof window !== "undefined") {
  //   window.addEventListener("click", handleClickOutsideDropDownMenu);
  // }
  let item = 1;
  return (
    <aside
      className={`xs:fixed sm:fixed md:fixed  lg:static sx:top-0 sx:left-0   bg-white text-darkColor shadow-lg sm:z-40 xs:z-40
      transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"} w-full  
      lg:translate-x-0 lg:w-full xs:w-[80%] sm:w-[80%] h-screen  overflow-auto inset-0    
      `}
    >
      <div className="relative h-screen  overflow-auto">
         

        <div
          className={`flex items-center mb-3 px-3  last:mb-0 cursor-pointer py-1 top-10 border-b border-gray-600 `}
        >
          <div className="flex items-center justify-between w-full">
          <div className={` pl-3 font-medium  `}>Search Parameters</div>
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            <Image src={CancelBlackIcon} alt="" width={35} height={35} />
          </button>
          </div>
        </div>
        <details
          className={`mb-2 last:mb-0 cursor-pointer py-1 px-3 top-10 border-b`}
          open={true}
        >
          <summary
            className={`font-medium flex justify-between items-center   `}
          >
            {" "}
            <div className="flex items-center">
              <Image src={HomeIcon} alt="" width={15} />
              <div className={` pl-3 font-medium  `}>Houses</div>
            </div>
            <span
              className={`w-4 h-4 flex justify-center items-center bg-primary text-xs font-semibold text-white rounded-full ${
                item > 0 ? "inline-flex" : "hidden"
              }`}
            >
              9
            </span>
          </summary>
          <ul className="mx-3 max-h-[300px] overflow-auto ">
            <li
              className={`    px-1 bg-white rounded-md duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <div className="relative w-full">
                <Image
                  className="absolute top-3 left-0"
                  src={SearchIcon}
                  alt=""
                  width={15}
                />
                <input
                  type="text"
                  className="block py-2 px-1 pl-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                  placeholder="search hotel name..."
                />
                <span
                  className={` absolute top-2 right-0 min-w-5 h-5 flex p-1 justify-center items-center bg-darkColor text-xs font-semibold text-white rounded-full ${
                    item > 0 ? "inline-flex" : "hidden"
                  }`}
                >
                  9
                </span>
              </div>
            </li>
            {houses.map((items, key) => (
              <li
                key={key}
                className={`px-1  py-2  hover:border-b-2 hover:border-darkColor duration-500 flex justify-between items-center cursor-pointer 
                         `}
              >
                <div className="group flex items-center gap-x-1 relative">
                  <div className="flex mx-[6px] relative">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    />
                    <span className={`text-sm ml-1`}>{items}</span>
                  </div>
                </div>
                <span
                  className={`min-w-5 h-5 flex p-1 justify-center items-center bg-darkColor text-xs font-semibold text-white rounded-full ${
                    item > 0 ? "inline-flex" : "hidden"
                  }`}
                >
                  {key + 1}
                </span>
              </li>
            ))}
          </ul>
        </details>
        <details
          className={`mb-2 last:mb-0 cursor-pointer py-1 px-3  `}
          open={false}
        >
          <summary
            className={`font-medium flex justify-between items-center border-b `}
          >
            {" "}
            <div className="flex items-center">
              <Image src={LocationIcon} alt="" width={15} />
              <div className={` pl-3 font-medium  `}>Locations</div>
            </div>
            <span
              className={`w-4 h-4 flex justify-center items-center bg-primary text-xs font-semibold text-white rounded-full ${
                item > 0 ? "inline-flex" : "hidden"
              }`}
            >
              9
            </span>
          </summary>
          <ul className="mx-3 max-h-[300px] overflow-auto ">
            <li
              className={`    px-1 bg-white rounded-md duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <div className="relative w-full">
                <Image
                  className="absolute top-3 left-0"
                  src={SearchIcon}
                  alt=""
                  width={15}
                />
                <input
                  type="text"
                  className="block py-2 px-1 pl-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                  placeholder="search hotel name..."
                />
                <span
                  className={` absolute top-2 right-0 min-w-5 h-5 flex p-1 justify-center items-center bg-darkColor text-xs font-semibold text-white rounded-full ${
                    item > 0 ? "inline-flex" : "hidden"
                  }`}
                >
                  9
                </span>
              </div>
            </li>
            {locations.map((items, key) => (
              <li
                key={key}
                className={`px-1  py-2  hover:border-b-2 hover:border-darkColor duration-500 flex justify-between items-center cursor-pointer 
                         `}
              >
                <div className="group flex items-center gap-x-1 relative">
                  <span>
                    <span className="absolute -right-12 top-0.5 mr-5 text-xs bg-primary text-white font-medium px-1  rounded-full"></span>
                  </span>
                  <div className="flex -mx-[6px] relative">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    />
                    <span className={`text-sm whitespace-pre ml-1 `}>
                      {items}
                    </span>
                  </div>
                </div>
                <span
                  className={`min-w-5 h-5 flex p-1 justify-center items-center bg-darkColor text-xs font-semibold text-white rounded-full ${
                    item > 0 ? "inline-flex" : "hidden"
                  }`}
                >
                  {key + 1}
                </span>
              </li>
            ))}
          </ul>
        </details>
        <details
          className={`mb-2 last:mb-0 cursor-pointer py-1 px-3  `}
          open={false}
        >
          <summary
            className={`font-medium flex justify-between items-center border-b `}
          >
            {" "}
            <div className="flex items-center">
              <Image src={BudgetIcon} alt="" width={15} />
              <div className={` pl-3 font-medium  `}>Amount</div>
            </div>
          </summary>
          <ul className=" max-h-[300px] overflow-auto ">
            <li
              className={` flex   duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <div className=" flex flex-col w-full">
                <div className="flex items-center">
                  {" "}
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <input
                    type="text"
                    className="block py-2 px-1 ml-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                    placeholder="Min..."
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <input
                    type="text"
                    className="block py-2 px-1 w-full my-1 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                    placeholder="Max..."
                  />
                </div>
              </div>
            </li>
          </ul>
        </details>
        <details
          className={`mb-2 last:mb-0 cursor-pointer py-1 px-3  `}
          open={false}
        >
          <summary
            className={`font-medium flex justify-between items-center border-b `}
          >
            {" "}
            <div className="flex items-center">
              <Image src={BudgetIcon} alt="" width={15} />
              <div className={` pl-3 font-medium  `}>Rooms</div>
            </div>
          </summary>
          <ul className=" max-h-[300px] overflow-auto ">
            <li
              className={` flex   duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <div className=" flex flex-col w-full">
                <div className="flex items-center">
                  {" "}
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <input
                    type="text"
                    className="block py-2 px-1 ml-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                    placeholder="Min..."
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <input
                    type="text"
                    className="block py-2 px-1 w-full my-1 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                    placeholder="Max..."
                  />
                </div>
              </div>
            </li>
          </ul>
        </details>

        <details
          className={`mb-2 last:mb-0 cursor-pointer py-1 px-3 top-10 border-b`}
          open={false}
        >
          <summary
            className={`font-medium flex justify-between items-center   `}
          >
            {" "}
            <div className="flex items-center">
              <Image src={HomeIcon} alt="" width={15} />
              <div className={` pl-3 font-medium  `}>Facities</div>
            </div>
          </summary>
          <ul className="mx-3 max-h-[300px] overflow-auto ">
            <li
              className={`    px-1 bg-white rounded-md duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <div className="relative w-full">
                <Image
                  className="absolute top-3 left-0"
                  src={SearchIcon}
                  alt=""
                  width={15}
                />
                <input
                  type="text"
                  className="block py-2 px-1 pl-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                  placeholder="search hotel name..."
                />
                <span
                  className={` absolute top-2 right-0 min-w-5 h-5 flex p-1 justify-center items-center bg-darkColor text-xs font-semibold text-white rounded-full ${
                    item > 0 ? "inline-flex" : "hidden"
                  }`}
                >
                  9
                </span>
              </div>
            </li>
            {facilities.map((items, key) => (
              <li
                key={key}
                className={`px-1  py-2  hover:border-b-2 hover:border-darkColor duration-500 flex justify-between items-center cursor-pointer 
                         `}
              >
                <div className="group flex items-center gap-x-1 relative">
                  <span>
                    <span className="absolute -right-12 top-0.5 mr-5 text-xs bg-primary text-white font-medium px-1  rounded-full"></span>
                  </span>
                  <div className="flex -mx-[6px] relative">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    />
                    <span className={`text-sm whitespace-pre ml-1 `}>
                      {items}
                    </span>
                  </div>
                </div>
                <span
                  className={`min-w-5 h-5 flex p-1  justify-center items-center bg-darkColor text-xs font-semibold text-white rounded-full ${
                    item > 0 ? "inline-flex" : "hidden"
                  }`}
                >
                  {key + 1}
                </span>
              </li>
            ))}
          </ul>
        </details>
        <details
          className={`mb-2 last:mb-0 cursor-pointer py-1 px-3  `}
          open={true}
        >
          <summary
            className={`font-medium flex justify-between items-center border-b `}
          >
            {" "}
            <div className="flex items-center">
              <Image src={BudgetIcon} alt="" width={15} />
              <div className={` pl-3 font-medium  `}>Date range</div>
            </div>
          </summary>
          <ul className=" max-h-[300px] overflow-auto ">
            <li
              className={` flex   duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <div className=" flex flex-col w-full">
                <div className="flex items-center">
                  {" "}
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <input
                    type="text"
                    className="block py-2 px-1 ml-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                    placeholder="From..."
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <input
                    type="text"
                    className="block py-2 px-1 w-full my-1 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                    placeholder="To..."
                  />
                </div>
              </div>
            </li>
          </ul>
        </details>
        <details
          className={`mb-2 last:mb-0 cursor-pointer py-1 px-3  `}
          open={true}
        >
          <summary
            className={`font-medium flex justify-between items-center border-b `}
          >
            {" "}
            <div className="flex items-center">
              <Image src={BudgetIcon} alt="" width={15} />
              <div className={` pl-3 font-medium  `}>Is Furnished</div>
            </div>
          </summary>
          <ul className=" max-h-[300px] overflow-auto ">
            <li
              className={` flex   duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <div className=" flex flex-col w-full">
                <div className="flex items-center">
                  {" "}
                  <input
                    type="radio" name="isFurnished"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                  <span className={` p-2 text-sm  `}> Furnished</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio" name="isFurnished"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                  />
                   <span className={` pl-2 text-sm   `}>Not Furnished</span>
                </div>
              </div>
            </li>
          </ul>
        </details>
      </div>
    </aside>
  );
};
export default SearchSideBar;
