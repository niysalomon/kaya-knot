import { useState } from "react";
import HouseCard from "./components/houseCard";
import RenterBackground from "./components/renterBackground";
import RenterCard from "./components/rentersCard";
import SingleRenterDetail from "./components/singleRenter";
import SearchSideBar from "@/common/searchSideBar";

const RentersList = () => {
  const h = ["1", "2", "3", "4", "1", "2", "3", "4"];
const [showSingleRenter, setShowSingleRenter] = useState<boolean>(false);
  return (
    <> 
        <div className=" ">
          <div className="grid grid-cols-10 gap-4">
          <div className="col-span-2 sm:col-span-2 bg-red-500">
            <SearchSideBar />
          </div> 
            <div className="col-span-8 sm:col-span-8 h-screen   overflow-auto ">
              <RenterBackground />
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 mb-4">
                {h.map((item) => (
                  <RenterCard   key={item}/>
                ))}
              </div>
            </div>
          </div>
        </div> 
    </>
  );
};
export default RentersList;
