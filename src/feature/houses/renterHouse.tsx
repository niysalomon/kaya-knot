import { useState } from "react";
import HouseBackground from "./components/houseBackground";
import HouseCard from "./components/houseCard";
import SingleHouseDetails from "./components/singleHouseDetails";
import SingleRenterDetail from "./components/singleRenter";
import HomeBackground from "./components/homeBackground";

const RenterHouse=()=>{
    const h = ["1", "2", "3", "4", "1", "2", "3", "4"];
    const [isHouseDetails, setIsHouseDetails] = useState<boolean>(false);
  const [showSingleRenter, setShowSingleRenter] = useState<boolean>(true);
   return( <>
    <div className="h-[calc(99vh-170px)] pr-0.5 overflow-auto px-4">
        {!isHouseDetails ? (
          <div className="grid grid-cols-10 ">
            <div className="col-span-10 sm:col-span-10">
              <HomeBackground />
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                {h.map((item) => (
                  <HouseCard setIsHouseDetails={setIsHouseDetails} />
                ))}
              </div>
            </div>
          </div>
        ) : showSingleRenter ? (
          <SingleRenterDetail setShowSingleRenter={setShowSingleRenter} />
        ) : (
          <div className="flex justify-center items-center">
            <div></div>
            <SingleHouseDetails
              setIsHouseDetails={setIsHouseDetails}
              setShowSingleRenter={setShowSingleRenter}
            />
            <div></div>
          </div>
          // <HomeImage/>
        )}
      </div>
    </>
   )

}
export default RenterHouse;