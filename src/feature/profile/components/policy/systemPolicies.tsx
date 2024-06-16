import Image from "next/image";
import { useState } from "react";
import SystemPolicyDetails from "./systemBookingPolicy";
import SystemBookingPolicy from "./systemBookingPolicy";
import SystemCancellingPolicy from "./systemCancellingPolicy";
const SystemPolicies=()=>{
    const [houseTabs, setHouseTabs] = useState<number>(0);
    return(
        <>
      <div className="p-4 sm:ml-64 h-screen text-gray-900   ">
        <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg bg-white">
          <div className="gap-4 mb-4 w-full">
            <div className="border-b border-gray-200 ">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-900 ">
                <li className="me-2" onClick={() => setHouseTabs(0)}>
                  <div
                    className={`inline-flex items-center justify-center p-2 ${
                      houseTabs === 0
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "border-b-2 border-transparent hover:text-blue-600 hover:border-gray-300"
                    }  rounded-t-lg cursor-pointer   `}
                  > 
                    <span className="ml-2">Booking</span>
                  </div>
                </li>
                <li className="me-2" onClick={() => setHouseTabs(1)}>
                  <div
                    className={`inline-flex items-center justify-center p-2 ${
                      houseTabs === 1
                        ? " text-blue-600 border-b-2 border-blue-600"
                        : "border-b-2 border-transparent hover:text-blue-600 hover:border-gray-300"
                    } rounded-t-lg cursor-pointer`}
                  > 
                    <span className="ml-2">Cancellation</span>
                  </div>
                </li>
              </ul>
            </div>
            {houseTabs === 0 ? 
            <SystemBookingPolicy/> 
            : <SystemCancellingPolicy/>}
          </div>
        </div>
      </div>
    </>
    )

}
export default SystemPolicies;