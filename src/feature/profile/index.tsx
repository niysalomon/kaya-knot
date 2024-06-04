import Image from "next/image";
import {
  HomeIcon,
  HousesIcon,
  KayaLogo,
  SearchIcon,
  UserIcon,
} from "@/assets/icons";
import { useState } from "react"; 
const DashBoard = () => {
  const [houseTabs, setHouseTabs] = useState<number>(0);
  return (
    <>
      <div className="p-4 sm:ml-64 h-screen   ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg bg-white">
          <div className="gap-4 mb-4 w-full">
           
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
