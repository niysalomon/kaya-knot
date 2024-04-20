import { EmptyUserProfile } from "@/assets/icons";
import Image from "next/image";
const ViewUserProfile = () => {
  return (
    <div className="grid gap-4 px-10">
      <div className="grid grid-cols-8 gap-4">
        <div className=" w-full grid row-span-4 col-span-2  "></div>
        <div className=" w-full grid row-span-4 col-span-4  shadow-lg rounded p-5 m-4">
          <div className="min-w-fit grid row-span-2 col-span-4 p-3">
            <Image
              src={EmptyUserProfile}
              className="w-xl h-auto shadow-xl rounded-full border border-4 p-4"
              alt=""
            />
          </div>
          <div className="flex flex-col p-5">
          <div className=" block w-full p-6 m-4 text-gray-600 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 py-3  ">
              Basic information
            </h5>
            <div className="flex flex-col  justify-between items-center">
              <div className="flex justify-between items-center w-full px-4 py-5 ">
                <div className="flex flex-col">
                  <span>Location</span>{" "}
                  <span className="font-bold">Kanombe</span>
                </div>
                <div className="flex flex-col">
                  <span>Amount</span> <span className="font-bold">600k</span>
                </div>
              </div>
            </div>
            <hr className="bg-grayOrange size-lg" />
            <div className="flex flex-col   justify-between">
              <div className="flex  justify-between items-center py-4">
                <div className="flex  justify-between items-center"></div>
                <p className="p-2">
                  The house is wonderfully furnished, tastefully furnished. In
                  particular, we loved the roof terrace and pool. The location
                  is very nice and quiet.....
                </p>
              </div>
            </div>
          </div>
          <div className=" block w-full p-6 m-4 text-gray-600 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 py-3  ">
              Basic information
            </h5>
            <div className="flex flex-col  justify-between items-center">
              <div className="flex justify-between items-center w-full px-4 py-5 ">
                <div className="flex flex-col">
                  <span>Location</span>{" "}
                  <span className="font-bold">Kanombe</span>
                </div>
                <div className="flex flex-col">
                  <span>Amount</span> <span className="font-bold">600k</span>
                </div>
              </div>
            </div>
            <hr className="bg-grayOrange size-lg" />
            <div className="flex flex-col   justify-between">
              <div className="flex  justify-between items-center py-4">
                <div className="flex  justify-between items-center"></div>
                <p className="p-2">
                  The house is wonderfully furnished, tastefully furnished. In
                  particular, we loved the roof terrace and pool. The location
                  is very nice and quiet.....
                </p>
              </div>
            </div>
          </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};
export default ViewUserProfile;
