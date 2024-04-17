import { BackIcon } from "@/assets/icons";
import RenterCard from "./rentersCard";
import Image from "next/image";

const RentersBooked = ({
  setShowRenters,
}: {
  setShowRenters: (_value: boolean) => void;
}) => {
  const data = ["1", "2", "3"];
  return (
    <>
      <div className=" text-gray-900 ">
        <div><Image src={BackIcon} alt="" /></div>
        <p className="text-4xl font-bold py-4">Already booked by 2 people</p>
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-10 sm:col-span-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              {data.map((key) => (
                <RenterCard />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RentersBooked;
