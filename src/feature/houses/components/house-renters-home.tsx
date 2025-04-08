import { useState } from "react";
import HomeBackground from "./homeBackground";
import HouseCard from "./houseCard";

const HouseRentersHome=()=>  {
    const h = ["1", "2", "3", "4", "1", "2", "3", "4"];
const [isHouseDetails, setIsHouseDetails] = useState<boolean>(false);
const [showSingleRenter, setShowSingleRenter] = useState<boolean>(true);
console.log("showSingleRenter",showSingleRenter)
return( <>
<div className="h-[calc(99vh-170px)] pr-0.5 overflow-auto px-4">
<div className="grid grid-cols-10 ">
    <div className="col-span-10 sm:col-span-10">
      <HomeBackground />
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-5 gap-4 mb-4">
        {h.map((item) => (
          <HouseCard setIsHouseDetails={setIsHouseDetails} key={item} />
        ))}
      </div>
    </div>
  </div>
  </div>
</>
)
}
export default HouseRentersHome;