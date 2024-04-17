import { useState } from "react";
import HouseCard from "./components/houseCard";import HouseBackground from "./components/houseBackground";
import HomeImage from "./components/homeImage";
import SingleHouseDetails from "./components/singleHouseDetails";
const h = ["1", "2", "3", "4", "1", "2", "3", "4"];

const HouseList = () => {
  const [isHouseDetails, setIsHouseDetails] = useState<boolean>(true);
  return (
    <>
      <div className="h-[calc(99vh-170px)] pr-0.5 overflow-auto px-4">
        {!isHouseDetails ? (
          <div className="grid grid-cols-10 ">
            <div className="col-span-10 sm:col-span-10">
             <HouseBackground/>

              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                {h.map((item) => (
                  <HouseCard />
                ))}
              </div>
            </div>
          </div>
        ) : (
            <div className="flex justify-center items-center">
            <div></div>
          <SingleHouseDetails />
          <div></div>
          </div>
        // <HomeImage/>
        )}
      </div>
    </>
  );
};
export default HouseList;
