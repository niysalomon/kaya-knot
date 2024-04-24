import {
  BudgetIcon,
  CalendarIcon,
  EmptyUserProfile,
  LocationIcon,
  NoiseIcon,
} from "@/assets/icons";
import Image from "next/image";
const ViewUserProfile = () => {
  return (
    <div className="grid gap-4 px-10 text-gray-600">
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
              <div className="flex flex-col  justify-between items-center">
                <div className="flex justify-between items-center w-full px-4 py-5 ">
                  <div className="flex flex-col">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 py-3  ">
                      Penina
                    </h5>
                    <span>Female</span> <span className="py-2 ">Banker</span>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 py-3  ">
                      Contact
                    </h5>
                    <span>+250782396251</span>
                    <span className=" py-2">peninah@gmailcom</span>
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
            <div className=" block w-full p-6 m-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
              <div className="flex flex-col  justify-between items-center">
                <div className="flex justify-between items-center w-full px-4 py-1 ">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Image src={BudgetIcon} alt={""} />
                      <span className="px-2">Budget</span>
                      <span className="font-semibold">200k</span>
                    </div>
                    <div className="flex items-center py-2">
                      <Image src={LocationIcon} alt={""} />
                      <span className="px-2">Looking in </span>
                      <span className="font-semibold">Kanombe</span>
                    </div>
                    <div className="flex items-center">
                      <Image src={CalendarIcon} alt={""} />
                      <span className="px-2">ready to move on</span>
                      <span className="font-semibold">21/04/2024</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col   justify-between">
                <span className="ml-3 py-2">Description</span>
                <div className="flex items-center w-full pl-3 pb-3 sticky top-0 ">
                  <textarea
                    value={"this is penina descriptions......"}
                    placeholder="this is penina descriptions......"
                    className="w-full shadow rounded-md border p-2"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="flex p-2 m-2 border border-2 w-48 rounded-lg">
                <Image src={NoiseIcon} alt="" />{" "}
                <span className="px-2">Noise tolerance</span>
              </div>
              <div className="flex p-2 m-2 border border-2 w-48 rounded-lg">
                <Image src={NoiseIcon} alt="" />{" "}
                <span className="px-2">Noise tolerance</span>
              </div>
              <div className="flex p-2 m-2 border border-2 w-48 rounded-lg">
                <Image src={NoiseIcon} alt="" />{" "}
                <span className="px-2">Noise tolerance</span>
              </div>
              <div className="flex m-2 p-2 border border-2 w-48 rounded-lg">
                <Image src={NoiseIcon} alt="" />{" "}
                <span className="px-2">Noise tolerance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewUserProfile;
