import { useState } from "react";
import HouseCard from "./components/houseCard";
import RenterBackground from "./components/renterBackground";
import RenterCard from "./components/rentersCard";
import SingleRenterDetail from "./components/singleRenter";

const RentersList = () => {
  const h = ["1", "2", "3", "4", "1", "2", "3", "4"];
const [showSingleRenter, setShowSingleRenter] = useState<boolean>(false);
  return (
    <>
      {showSingleRenter ? (
        <SingleRenterDetail setShowSingleRenter={setShowSingleRenter} />
      ) : (
        <div className="h-[calc(99vh-170px)] pr-0.5 overflow-auto px-4">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-10 sm:col-span-10">
              <RenterBackground />
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
                {h.map((item) => (
                  <RenterCard setShowSingleRenter={setShowSingleRenter} key={item}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default RentersList;
