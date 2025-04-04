import {
  ApartmentIcon,
  HomeWhiteIcon,
  HotelIcon,
  HousesIcon,
  HouseWhiteIcon,
  KayaLogo,
  LocationWhiteIcon,
  SearchIcon,
  TenantsIcon,
  TenantsWhiteIcon,
  UserIcon,
} from "@/assets/icons";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "/node_modules/react-datepicker/dist/react-datepicker.css";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { format, differenceInDays } from "date-fns";
import { useRef, useState } from "react";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "@/feature/houses/components/breadCrumbs";
const Header = () => {
  const breadcrumbLinks = [
    { name: "Home", href: "/" },
    { name: "Residential", href: "/house" },
    { name: "Renter", href: "/renter" },
    { name: "Kigali", href: "/house"},
    { name: "kabeza", href: "/" },
  ];

  const openingLocation = useRef<HTMLDivElement>(null);
  const openingdates = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<string>();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const today = new Date();
  const [range, setRange] = useState<{ from: Date; to: Date }>({
    from: today,
    to: today,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (
    selectedRange: { from?: Date; to?: Date } | undefined
  ) => {
    if (selectedRange?.from && selectedRange?.to) {
      setRange({ from: selectedRange.from, to: selectedRange.to });
    }
  };
  const handleClickOutsideDropDownMenu = (e: any) => {
    if (showFilter && !openingLocation.current?.contains(e.target as Node)) {
      setShowFilter(false);
    }
    if (isOpen && !openingdates.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", handleClickOutsideDropDownMenu);
  }
  return (
    <div className="bg-opacity-50 z-[9999] "> 

      <div className="w-full flex justify-between items-center  bg-gray-100 h-18   ">
        <div className="  ">
          <Image src={KayaLogo} alt="" />
        </div>

        <div className="  w-5/6 flex  items-center content-center  justify-center   ">
          <div className="flex flex-col  w-full">
            <div className=" relative flex items-center justify-center   p-4  w-full ">
              <div className="flex items-center justify-center  px-2 py-1  ">
                <div
                  className=" border border-darkColor text-black rounded"
                  ref={openingLocation}
                >
                  <input
                    onClick={() => setShowFilter(!showFilter)}
                    type="text"
                    value={location}
                    placeholder="Choose place"
                    className="border px-36 w-full py-3 rounded"
                  />
                  {showFilter && (
                    <div className=" absolute  bg-white flex  flex-col justify-around  w-1/2 z-10 top-20  divide-y divide-gray-50 text-black     shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
                      {/* <div className="bg-white flex flex-col  justify-center inset-x-0 top-0 absolute top-20 right-2 w-1/2 z-10  divide-y divide-gray-100 p-2 text-black  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]"> */}
                      <div
                        onClick={() => {
                          setShowFilter(!showFilter);
                          setLocation(" Kigali, Kanombe");
                        }}
                        className=" p-2 border-b "
                      >
                        Kigali, Kanombe
                      </div>
                      <div
                        onClick={() => {
                          setShowFilter(!showFilter);
                          setLocation("Kigali, Kacyiru");
                        }}
                        className=" p-2 border-b "
                      >
                        Kigali, Kacyiru
                      </div>
                      <div
                        onClick={() => {
                          setShowFilter(!showFilter);
                          setLocation("Kigali, kimisagara");
                        }}
                        className=" p-2 border-b "
                      >
                        Kigali, kimisagara
                      </div>
                      <div
                        onClick={() => {
                          setShowFilter(!showFilter);
                          setLocation("Gicumbi , Byumba");
                        }}
                        className=" p-2 border-b "
                      >
                        Gicumbi , Byumba
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="flex  z-10  bg-gradient-to-br text-black  "
                  ref={openingdates}
                >
                  <div
                    onClick={() => setIsOpen(true)}
                    className="px-6 py-3 border border-darkColor font-semibold rounded-lg  transition mx-2"
                  >
                    <span>{format(range.from, "dd/MM/yyyy")} </span>
                    <span className="px-2">-</span>
                    <span className=" ">{format(range.to, "dd/MM/yyyy")}</span>
                  </div>

                  {isOpen && (
                    <div className=" absolute inset-0 flex  justify-around  w-full z-10 top-20  divide-y divide-gray-50 text-black   bg-opacity-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
                      <div className="fixed ">
                        <div className="bg-white shadow-2xl   p-6  w-auto text-center border border-gray-200">
                          <h2 className="text-xl font-bold text-gray-700 mb-4">
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
                          {range.from && range.to && (
                            <div className="  text-lg text-gray-700 font-medium bg-white p-2 rounded-lg shadow-md">
                              <div
                                onClick={() => setIsOpen(true)}
                                className="px-6 py-3 border border-darkColor font-semibold rounded-lg  transition mx-2"
                              >
                                <span>{format(range.from, "dd/MM/yyyy")} </span>
                                <span className="px-2">-</span>
                                <span className=" ">
                                  {format(range.to, "dd/MM/yyyy")}
                                </span>
                              </div>{" "}
                              <p>
                                {differenceInDays(range.to, range.from)} days
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className=" text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-sm px-8 py-3.5 text-center  bg-darkColor focus:ring-primary-800"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="inline-flex items-center px-1 py-1 text-white    rounded-full active "
          aria-current="page"
        >
          <Image src={UserIcon} alt="" />
        </div>
      </div>
      <div className="flex bg-darkColor justify-between items-center py-2   ">
        <div className=" float-left  ">
          <Breadcrumbs links={breadcrumbLinks} />
        </div>
        <div className="flex justify-center items-center py-2 gap-6 mr-5">
          <div className=" text-white  flex justify-end items-center rounded-full border border-primary py-1 m-1 px-6 ">
            <Image src={HotelIcon} alt="" /> <span className="pl-1">Hotel</span>
          </div>
          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1">
            <Image src={ApartmentIcon} alt="" />{" "}
            <span className="pl-1">Apartment</span>
          </div>
          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1">
            <Image src={HouseWhiteIcon} alt="" />{" "}
            <span className="pl-1">House</span>
          </div>
          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1">
            <Image src={ApartmentIcon} alt="" />{" "}
            <span className="pl-1">Office</span>
          </div>
          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1">
            <Image src={TenantsWhiteIcon} alt="" width={22} />{" "}
            <span className="pl-1">Co-renter</span>
          </div>
          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1 ">
            <Image src={LocationWhiteIcon} alt="" />{" "}
            <span className="pl-1">Kigali</span>
          </div>
          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1 ">
            <Image src={HomeWhiteIcon} alt="" />{" "}
            <span className="pl-1">Ghetto</span>
            <HomeIcon />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Header;
