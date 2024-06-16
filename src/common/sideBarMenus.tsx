import Link from "next/link";
import {
  ChevronDoubleRightIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { DashboadIcon, HomeIcon, MessageIcon, SettingsIcon, StatisticsIcon, TenantsIcon } from "@/assets/icons";

const SideBarMenu = () => {
  let item = 1;
  return (
    <aside
      className={`fixed w-[250px] h-full flex flex-col justify-between text-sm duration-500 bg-gray-100 text-gray-900`}
    >
      <div className="relative h-full px-4 border-r border-gray-300">
        <div
          className={`top-[90px] cursor-pointer w-full z-10 relative mb-10 left-[1.9rem]
                }`}
        >
          <div className="absolute rounded-md w-6 h-6 bg-gray-200 right-1">
            <ChevronDoubleRightIcon
              className={`w-4 h-4 m-auto my-1 rotate-180`}
            />
          </div>
        </div>
        
        <Link
        href="./dashboard"
          className={`flex items-center mb-3   last:mb-0 cursor-pointer py-1 top-10 border-b `}
        >
          <Image src={DashboadIcon} alt="" width={15} />
          <div className={` pl-3 font-medium  `}>Dashboard</div>
          </Link>
        
        <Link
        href=" ./houses"
          className={`flex items-center mb-3   last:mb-0 cursor-pointer  top-10 py-1 border-b `}
        >
          <Image src={HomeIcon} alt="" width={15} />
          <div className={` pl-3 font-medium  `}>Houses</div>
          
        </Link>
        <Link
        href=" ./tenants"
          className={`flex items-center mb-3   last:mb-0 cursor-pointer  top-10  py-1 border-b`}
        >
          <Image src={TenantsIcon} alt="" width={15} />
          <div className={` pl-3 font-medium  `}>Tenants</div>
          </Link>
        
        <div
          className={`flex items-center mb-3   last:mb-0 cursor-pointer  top-10 py-1 border-b `}
        >
          <Image src={StatisticsIcon} alt="" width={15} />
          <div className={` pl-3 font-medium  `}>Statistics</div>
        </div>
        <div
          className={`flex items-center mb-3   last:mb-0 cursor-pointer   py-1 border-b top-10 `}
        >
          <Image src={MessageIcon} alt="" width={15} />
          <div className={` pl-3 font-medium  `}>Meassage</div>
        </div>
        <div
          className={`flex items-center mb-3   last:mb-0 cursor-pointer  py-1 border-b top-10 `}
        >
          <Image src={SettingsIcon} alt="" width={15} />
          <div className={` pl-3 font-medium  `}>Settings</div>
        </div>
        <details
          className={`mb-3 last:mb-0 cursor-pointer py-1 border-b top-10`}
          open={true}
        >
          <summary className={`mb-3 font-medium  `}>
            <span className="pl-3">Policies</span>
          </summary>
          <ul>
            <li
              className={`px-1 py-2 hover:bg-primary-medium hover:text-black rounded-md duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <Link
                href="./policy/personal"
                className="group flex items-center gap-x-1 relative"
              >
                <span>
                  <span className="absolute -right-12 top-0.5 mr-5 text-xs bg-primary text-white font-medium px-1  rounded-full"></span>
                </span>
                <div className="flex -mx-[6px] relative">
                  <DocumentIcon className={`text-gray-300w-5 h-5`} />
                  <span className={`text-sm whitespace-pre `}>
                    Personal Policy
                  </span>
                </div>
              </Link>
              <span
                className={`w-4 h-4 flex justify-center items-center bg-primary text-xs font-semibold text-white rounded-full ${
                  item > 0 ? "inline-flex" : "hidden"
                }`}
              >
                9
              </span>
            </li>
            <li
              className={`px-1 py-2 hover:bg-primary-medium hover:text-black rounded-md duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <Link
                href="./policy/system"
                className="group flex items-center gap-x-1 relative"
              >
                <span>
                  <span className="absolute -right-12 top-0.5 mr-5 text-xs bg-primary text-white font-medium px-1  rounded-full"></span>
                </span>
                <div className="flex -mx-[6px] relative">
                  <DocumentIcon className={`text-gray-300w-5 h-5`} />
                  <span className={`text-sm whitespace-pre `}>
                    System Policy
                  </span>
                </div>
              </Link>
              <span
                className={`w-4 h-4 flex justify-center items-center bg-primary text-xs font-semibold text-white rounded-full ${
                  item > 0 ? "inline-flex" : "hidden"
                }`}
              >
                9
              </span>
            </li>
            <li
              className={`px-1 py-2 hover:bg-primary-medium hover:text-black rounded-md duration-500 flex justify-between items-center cursor-pointer 
                         `}
            >
              <Link
                href="./policy/landLord"
                className="group flex items-center gap-x-1 relative"
              >
                <span>
                  <span className="absolute -right-12 top-0.5 mr-5 text-xs bg-primary text-white font-medium px-1  rounded-full"></span>
                </span>
                <div className="flex -mx-[6px] relative">
                  <DocumentIcon className={`text-gray-300w-5 h-5`} />
                  <span className={`text-sm whitespace-pre `}>
                    LandLord Policy
                  </span>
                </div>
              </Link>
              <span
                className={`w-4 h-4 flex justify-center items-center bg-primary text-xs font-semibold text-white rounded-full ${
                  item > 0 ? "inline-flex" : "hidden"
                }`}
              >
                9
              </span>
            </li>
          </ul>
        </details>
      </div>
    </aside>
  );
};
export default SideBarMenu;
