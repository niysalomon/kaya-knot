import {
  BackIcon,
  BudgetIcon,
  CalendarIcon,
  LocationIcon,
  SendIcon,
  SeperatorLine,
  UserIcon,
} from "@/assets/icons";
import Image from "next/image";
import RenterCard from "./rentersCard";
const SingleRenterDetail = ({
  setShowSingleRenter,
}: {
  setShowSingleRenter: (_value: boolean) => void;
}) => {
  const data = ["1", "2"];
  return (
    <>
      <div className=" text-gray-900 ">
        <div
          className="cursor-pointer pl-10"
          onClick={() => {
            setShowSingleRenter(false);
          }}
        >
          <Image src={BackIcon} alt="" />
        </div>
        <div className=" flex flex-col justify-between items-center">
          <div className=" flex justify-between">
            <div></div>
            <div>
              <div className="border-gray-600 border-8 rounded-full my-5">
                <Image
                  className=" w-96 h-96"
                  src={UserIcon}
                  alt="image description"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className=" flex flex-col justify-between items-center w-11/12 ps-28  ">
          <div className="flex flex-col items-center   w-full">
            <p className="font-bold text-xl">Peninah</p>
            <div className="flex items-center py-4">
              <span>Female</span>
              <span className="p-1 mx-2 mt-1 rounded-full text-xl bg-darkColor w-0.5 h-0.5"></span>{" "}
              <span>Banker</span>
            </div>
            <div
              className=" text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-darkColor focus:ring-primary-800 ml-4"
            >
              Add to my favorities
            </div>
            <Image src={SeperatorLine} alt="" className="py-5" />
            <div className="flex items-center justify-between w-full p-2 ">
              <div className="flex flex-col w-1/2">
                <div className="flex  py-2">
                  <Image src={BudgetIcon} alt="" />
                  <span className="px-2 ">Budget</span>{" "}
                  <span className="px-2 font-semibold">200k</span>
                  <span>Rwf/Month</span>{" "}
                </div>
                <div className="flex items-center">
                  <Image src={LocationIcon} alt="" />
                  <span className="px-2">looking </span>{" "}
                  <span className="px-2 bg-gray-300 py-1 px-5 rounded-full font-bold mx-1">
                    Muhima
                  </span>{" "}
                  <span className="px-2 bg-gray-300 py-1 px-5 rounded-full font-bold mx-1">
                    Kimironko
                  </span>{" "}
                  <span className="px-2 bg-gray-300 py-1 px-5 rounded-full font-bold mx-1">
                    Kicukiro
                  </span>{" "}
                </div>
                <div className="flex items-center py-4">
                  <Image src={CalendarIcon} alt="" />
                  <span className="px-2">Ready to move </span>
                  <span className="px-2 font-bold">19 April</span>
                </div>
                <hr className="" />
                <p className="py-5">
                  Hi, I am Peninah and i am a cashier in BK and would love to
                  move stay in Nyamirambo. Interested in a quiet place. Privacy
                  is always important. Please clean your stuff. I can also cook
                  home food. Looking for a long lasting place. Looking for a
                  room/apartment around for my tenure at BK .
                </p>
                <hr />
              </div>

              <div className=" w-1/3 bg-white border border-gray-200 rounded-xl shadow p-1 text-gray-600 bg-gray-50  ">
                <div className="p-5  max-h-[420px] overflow-auto">
                  <div className="flex items-start gap-2.5 my-1">
                    <Image src={UserIcon} alt="" />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-br-[42px]  ">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900  ">
                          Bonnie Green
                        </span>
                        <span className="text-sm font-normal text-gray-500  ">
                          11:46
                        </span>
                      </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900  ">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p> 
                    </div>
                  </div>
                  <div className="flex  items-start gap-2.5 justify-end">
                    <div className="flex  flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-bl-[42px]  ">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900  ">
                          Bonnie Green
                        </span>
                        <span className="text-sm font-normal text-gray-500  ">
                          11:46
                        </span>
                      </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900  ">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p> 
                    </div>
                    <Image src={UserIcon} alt="" />
                  </div>
                  <div className="flex items-start gap-2.5 my-1">
                    <Image src={UserIcon} alt="" />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-br-[42px]  ">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-lg text-gray-900  ">
                          Bonnie Green
                        </span>
                        <span className="text-sm font-normal text-gray-500  ">
                          11:46
                        </span>
                      </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900  ">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                       
                    </div>
                  </div>
                  <div className="flex  items-start gap-2.5 justify-end">
                    <div className="flex  flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-bl-[42px]  ">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900  ">
                          Bonnie Green
                        </span>
                        <span className="text-sm font-normal text-gray-500  ">
                          11:46
                        </span>
                      </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900  ">
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p> 
                    </div>
                    <Image src={UserIcon} alt="" />
                  </div>
                </div>
                <div className="flex items-center  pl-3 pb-3 sticky top-0 ">
                  <textarea
                    placeholder="chat with penina......"
                    className="w-full shadow rounded-md border p-2"
                  ></textarea>
                  <div className="  w-20">
                    <Image
                      className="bg-orange "
                      width={25}
                      src={SendIcon}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleRenterDetail;
