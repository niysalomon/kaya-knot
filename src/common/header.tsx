import {
  ApartmentIcon,
  HotelIcon,
  HousesIcon,
  KayaLogo,
  SearchIcon,
  UserIcon,
} from "@/assets/icons";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "/node_modules/react-datepicker/dist/react-datepicker.css";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { format, differenceInDays } from "date-fns";
import { useState } from "react";
import Image from "next/image";
const Header = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const today = new Date();
  const [range, setRange] = useState<{ from: Date; to: Date }>({
    from: today,
    to: today, // Default both dates to today
  });
  const [isOpen, setIsOpen] = useState(false); // Modal visibility state

  // Handle date selection & close modal
  const handleSelect = (
    selectedRange: { from?: Date; to?: Date } | undefined
  ) => {
    // Ensure that both from and to are always defined
    if (selectedRange?.from && selectedRange?.to) {
      setRange({ from: selectedRange.from, to: selectedRange.to }); // Updating state with full Date objects
      // setTimeout(() => setIsOpen(false), 300); // Auto-close modal after selection
    }
  };
  return (
    <div className="bg-opacity-50 z-[9999] ">
      {/* <Image src={KayaLogo} alt="" /> */}

      <div className="w-full flex justify-between items-center  bg-gray-100 h-18   ">
        <Image src={KayaLogo} alt="" />
        <div className="   flex  items-center content-center  justify-center    ">
          <div className="flex flex-col">
            <div className="  flex items-center justify-center     p-4 bg-white w-full ">
              {/* Single Input for Date Range */}
              <div className="relative">
                <input
                  onClick={() => setShowFilter(!showFilter)}
                  type="text"
                  placeholder="Choose place"
                  className="border px-16 py-3 rounded"
                />
                {showFilter && (
                  <div className="bg-white absolute top-12 w-full z-10  divide-y divide-gray-100 p-2 text-black  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
                    <p>jhdsfugewu</p>
                    <p>jhdsfugewu</p>
                    <p>jhdsfugewu</p>
                  </div>
                )}
              </div>
              <div className="flex  z-10  bg-gradient-to-br from-blue-100 to-purple-200 ">
                <div
                  onClick={() => setIsOpen(true)}
                  className="px-6 py-3 border border-gray-400 font-semibold rounded-lg   hover:bg-green-600 transition"
                >
                  <span>{format(range.from, "dd/MM/yyyy")} - </span>
                  <span>{format(range.to, "yyyy/MM/dd")}</span>
                </div>

                {/* Display Selected Dates */}
                {range.from && range.to && (
                  <div className="  text-lg text-gray-700 font-medium bg-white p-2 rounded-lg shadow-md">
                    <p>{differenceInDays(range.to, range.from)} days</p>
                  </div>
                )}

                {isOpen && (
                  <div className=" absolute inset-0 flex  justify-around  w-full z-10 top-20  divide-y divide-gray-50 text-black   bg-opacity-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
                    <div className="fixed ">
                      <div className="bg-white shadow-2xl   p-6  w-auto text-center border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">
                          Select Date Range
                        </h2>

                        <DayPicker
                          mode="range"
                          selected={range} // Now we pass the range directly, which is compatible with the DateRange type
                          onSelect={handleSelect}
                          numberOfMonths={2}
                          className="rounded-lg shadow-md p-3 text-gray-700 border border-gray-300 bg-white hover:shadow-lg transition-all"
                          styles={{
                            day_selected: {
                              backgroundColor: "white",
                              border: "2px solid green",
                              color: "black",
                            },
                            day_range_start: {
                              backgroundColor: "green",
                              color: "white",
                              borderRadius: "8px",
                            },
                            day_range_end: {
                              backgroundColor: "green",
                              color: "white",
                              borderRadius: "8px",
                            },
                            day_range_middle: {
                              backgroundColor: "lightgreen",
                              color: "black",
                            },
                          }}
                        />

                        {/* Close Button */}
                        <button
                          onClick={() => setIsOpen(false)}
                          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="bg-white p-2 flex justify-end items-center rounded-full border border-primary m-1 px-6 text-black">
              
                <Image src={HotelIcon} alt="" /> <span className="pl-1">Hotel</span>
              </div> 
              <div>
                <Image src={ApartmentIcon} alt="" />
                Apartment
              </div> 
            </div>
          </div>
        </div> 
        <div
          className="inline-flex items-center px-1 py-1 text-white   rounded-full active   dark:bg-blue-600"
          aria-current="page"
        >
          <Image src={UserIcon} alt="" />
        </div>
      </div> 
      <hr />
    </div>
  );
};
export default Header;
