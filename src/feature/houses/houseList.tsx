import { useState } from "react";
import HouseCard from "./components/houseCard";
import HouseBackground from "./components/houseBackground";
import SingleHouseDetails from "./components/single-house-details";
import SingleRenterDetail from "../renters/components/singleRenter";
import PhotoSlider from "./components/housCard";
import SingleLayout from "@/common/singleLayout";
import SearchSideBar from "@/common/searchSideBar";
import Link from "next/link";
const h = ["1", "2", "3", "4", "1", "2", "3", "4"];

const HouseList = ({open,setOpen}:{open:boolean; setOpen:(_value:boolean)=>void}) => {
  const [isHouseDetails, setIsHouseDetails] = useState<boolean>(false);
   
  return (
    <>
      <div className="  ">
        <div className="grid grid-cols-10 ">
          <div className="md:col-span-2 sm:col-span-0 sx:col-span-0  "> 
            
            <SearchSideBar open={open} setOpen={setOpen} />
          </div>
          <div className="md:col-span-10 sm:col-span-10 xs:col-span-10 lg:col-span-8 sm:col-span-10 h-screen   overflow-auto ">
            <HouseBackground /> 
            <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-4 mr-2">
              {h.map((item) => (
                <HouseCard setIsHouseDetails={setIsHouseDetails} key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HouseList;
