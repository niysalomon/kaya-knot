import { useState } from "react";
import HouseCard from "./components/houseCard";
import HouseBackground from "./components/houseBackground";
import SingleHouseDetails from "./components/single-house-details";
import SingleRenterDetail from "./components/singleRenter";
import PhotoSlider from "./components/housCard";
const h = ["1", "2", "3", "4", "1", "2", "3", "4"];

const HouseList = () => {
  const [isHouseDetails, setIsHouseDetails] = useState<boolean>(false);
  const [showSingleRenter, setShowSingleRenter] = useState<boolean>(false);
  const [bookingInfo, setBookingInfo] = useState<boolean>(false);
  return (
    <>
      <div className="h-[calc(99vh-170px)] pr-0.5 overflow-auto px-4">
        <div className="grid grid-cols-10 ">
          <div className="col-span-10 sm:col-span-10">
            <HouseBackground />
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
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
