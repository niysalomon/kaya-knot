import {
  ApartmentIcon,
  BarIcon,
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
import { BellAlertIcon, HomeIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "@/feature/houses/components/breadCrumbs";
import NotificationComponent from "@/feature/profile/components/profile/notification";
import Link from "next/link";
const Header = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (_value: boolean) => void;
}) => {
  const breadcrumbLinks = [
    { name: "Home", href: "/" },
    { name: "Residential", href: "/house" },
    { name: "Renter", href: "/renter" },
    { name: "Kigali", href: "/house" },
    { name: "kabeza", href: "/" },
  ];

  const openingLocation = useRef<HTMLDivElement>(null);
  const openingdates = useRef<HTMLDivElement>(null);
  const openingNotification = useRef<HTMLDivElement>(null);
  const openingProfile = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<string>();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openNotification, setOpenNofication] = useState<boolean>(false);
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
    if (
      openNotification &&
      !openingNotification.current?.contains(e.target as Node)
    ) {
      setOpenNofication(false);
    }
    if (openProfile && !openingProfile.current?.contains(e.target as Node)) {
      setOpenProfile(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", handleClickOutsideDropDownMenu);
  }

  return (
    <div className="bg-opacity-50 z-[9999] ">
      <div className="xs:flex md:hidden w-full justify-between items-center  bg-gray-100 h-16 border-b shadow-2xl   ">
        <div className="  ">
          <Image src={KayaLogo} alt="" />
        </div>
        <div
          className="xs:inline md:hidden relative inline-flex items-center px-1 py-1 text-white rounded-full active mr-4 z-10  "
          aria-current="page"
        >
          <div className="flex items-center">
            <div
              ref={openingNotification}
              className="px-2 relative "
              onClick={() => setOpenNofication(!openNotification)}
            >
              <BellAlertIcon color="gray" width={27} />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-5 end-2 ">
                2
              </div>
            </div>
            <div ref={openingProfile}>
              <Image
                onClick={() => setOpenProfile(!openProfile)}
                src={UserIcon}
                width={30}
                alt=""
                className="min-w-[25px] min-h-[25px] object-contain"
              />
            </div>
          </div>
          {openNotification && (
            <div className=" absolute  w-full flex  justify-around  w-full  top-6 right-16 divide-y divide-gray-50 text-black   bg-opacity-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
              <div className="fixed p-2 w-64">
                <div className="bg-white shadow-2xl     text-center border border-gray-200 mr-2">
                  <NotificationComponent />
                </div>
              </div>
            </div>
          )}
          {openProfile && (
            <div className=" absolute   flex  justify-around  w-full  top-6 right-12 divide-y divide-gray-50 text-black   bg-opacity-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
              <div className="fixed p-2 w-64">
                <div className="bg-white shadow-2xl w-full border border-gray-200 mr-2">
                  <div className="px-4 py-3 text-sm text-gray-900 border border-gray-300 ">
                    <Image
                      onClick={() => setOpenProfile(!openProfile)}
                      src={UserIcon}
                      width={30}
                      alt=""
                      className="min-w-[35px] min-h-[35px] object-contain"
                    />
                    <div className="truncate">Kalisa John</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700  ">
                    <li className="border-b border-gray-100">
                      <a
                        href="./profile"
                        className="block px-4 py-2 hover:bg-gray-100  "
                      >
                        Profile
                      </a>
                    </li>
                    <li className="border-b border-gray-100">
                      <a
                        href="./profile/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100  "
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="border-b border-gray-100">
                      <a
                        href="./profile/setting"
                        className="block px-4 py-2 hover:bg-gray-100  "
                      >
                        Settings
                      </a>
                    </li>
                    <li className="border-b border-gray-100">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100  "
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className=" ">
                    <a
                      href="./../"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  "
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-between items-center  bg-gray-100 h-18   ">
        <div className=" xs:hidden md:inline ">
          <Image src={KayaLogo} alt="" />
        </div>

        <div className=" w-full  flex  items-center content-center justify-center ">
          <div className="flex flex-col  w-full">
            <div className=" relative flex items-center justify-center   md:p-4 xs:p-0  w-full ">
              <div className="flex items-center justify-center  w-full py-1   ">
                <button onClick={() => setOpen(!open)} className="lg:hidden">
                  <Image src={BarIcon} alt="" width={35} height={35} />
                </button>
                <div
                  className="flex  z-10  bg-gradient-to-br text-black  "
                  ref={openingdates}
                >
                  <div
                    onClick={() => setIsOpen(true)}
                    className="xs:px-1 sm:py-3  sm:px-1 md:px-2 lg:px-20 xs:py-3 md:py-4  w-full border border-darkColor font-semibold rounded-md  transition mx-2 xs:text-xs md:text-md"
                  >
                    <span>{format(range.from, "dd/MM/yyyy")} </span>
                    <span className="px-1">-</span>
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
                            selected={range}
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
                <div
                  className=" border border-darkColor text-black rounded"
                  ref={openingLocation}
                >
                  <input
                    onClick={() => setShowFilter(!showFilter)}
                    type="text"
                    value={location}
                    placeholder="Choose place"
                    className="border xs:px-5 sm:px-5  xs:py-2 sm:py-2 md:py-3  md:px-5 lg:px-20 xs:px-2 w-full rounded"
                  />
                  {showFilter && (
                    <div className=" absolute  bg-white flex  flex-col justify-around  md:w-1/2 xs:w-full z-10 top-20  divide-y divide-gray-50 text-black     shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
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

                <button
                  type="submit"
                  className=" text-white focus:ring-4 focus:outline-none   
                        font-medium rounded-lg text-sm px-8 xs:py-2.5 md:py-3.5 text-center mx-1 bg-darkColor focus:ring-primary-800"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="xs:hidden md:inline relative inline-flex items-center px-1 py-1 text-white rounded-full active mr-4 z-10  "
          aria-current="page"
        >
          <div className="flex items-center">
            <div
              ref={openingNotification}
              className="px-2 relative "
              onClick={() => setOpenNofication(!openNotification)}
            >
              <BellAlertIcon color="gray" width={27} />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  border-2 border-white rounded-full -top-5 end-2 ">
                2
              </div>
            </div>
            <div ref={openingProfile}>
              <Image
                onClick={() => setOpenProfile(!openProfile)}
                src={UserIcon}
                width={35}
                alt=""
                 className="min-w-[30px] min-h-[30px] object-contain"
              />
            </div>
          </div>
          {openNotification && (
            <div className=" absolute  w-full flex  justify-around  w-full  top-6 right-16 divide-y divide-gray-50 text-black   bg-opacity-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
              <div className="fixed p-2 w-64">
                <div className="bg-white shadow-2xl text-center border border-gray-200 mr-2">
                  <NotificationComponent />
                </div>
              </div>
            </div>
          )}
          {openProfile && (
            <div className=" absolute   flex  justify-around  w-full  top-6 right-12 divide-y divide-gray-50 text-black   bg-opacity-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]">
              <div className="fixed p-2 w-64">
                <div className="bg-white shadow-2xl w-full border border-gray-200 mr-2">
                  <div className="px-4 py-3 text-sm text-gray-900 border border-gray-300 ">
                    <Image
                      onClick={() => setOpenProfile(!openProfile)}
                      src={UserIcon}
                      width={30}
                      alt=""
                      className="min-w-[30px] min-h-[30px] object-contain"
                    />
                    <div className="truncate">Kalisa John</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700  ">
                    <li className="border-b border-gray-100">
                      <a
                        href="./profile"
                        className="block px-4 py-2 hover:bg-gray-100  "
                      >
                        Profile
                      </a>
                    </li>
                    <li className="border-b border-gray-100">
                      <a
                        href="./profile/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100  "
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="border-b border-gray-100">
                      <a
                        href="./profile/setting"
                        className="block px-4 py-2 hover:bg-gray-100  "
                      >
                        Settings
                      </a>
                    </li>
                    <li className="border-b border-gray-100">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100  "
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className=" ">
                    <a
                      href="./../"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  "
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex bg-darkColor justify-between items-center py-2 xs:flex-col sm:flex-col md:flex-row lg:flex-row ">
        <div className=" float-left  ">
          <Breadcrumbs links={breadcrumbLinks} />
        </div>
        <div className="flex justify-center items-center py-2 lg:gap-3 xs:gap-0 sm:gap-0 md:gap-0 mr-5">
          <Link
            href="./house"
            className="flex items-center justify-end m-1 px-3 py-1 text-white border border-primary rounded-full cursor-pointer hover:border-white"
          >
            <Image
              src={HouseWhiteIcon}
              alt="House"
              width={25}
              height={25}
              className="min-w-[25px] min-h-[25px] object-contain"
            />
            <span className="pl-1 hidden xl:inline">House</span>
          </Link>
          <Link
            href="./renters"
            className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1 cursor-pointer"
          >
            <Image
              src={TenantsWhiteIcon}
              alt=""
              width={25}
              height={25}
              className="min-w-[25px] min-h-[25px] object-contain"
            />{" "}
            <span className="pl-1 hidden xl:inline">Co-renter</span>
          </Link>
          <div className=" text-white  flex justify-end items-center rounded-full hover:border hover:border-white py-1 m-1 px-6 cursor-pointer ">
            <Image
              src={HotelIcon}
              alt=""
              width={25}
              height={25}
              className="min-w-[25px] min-h-[25px] object-contain"
            />{" "}
            <span className="pl-1 hidden xl:inline">Hotel</span>
          </div>
          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1 cursor-pointer">
            <Image
              src={ApartmentIcon}
              alt=""
              width={25}
              height={25}
              className="min-w-[25px] min-h-[25px] object-contain"
            />{" "}
            <span className="pl-1 hidden xl:inline">Apartment</span>
          </div>

          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1 cursor-pointer">
            <Image
              src={ApartmentIcon}
              alt=""
              width={25}
              height={25}
              className="min-w-[25px] min-h-[25px] object-contain"
            />{" "}
            <span className="pl-1 hidden xl:inline">Office</span>
          </div>

          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1 cursor-pointer">
            <Image
              src={LocationWhiteIcon}
              alt=""
              width={25}
              height={25}
              className="min-w-[25px] min-h-[25px] object-contain"
            />{" "}
            <span className="pl-1 hidden xl:inline">Kigali</span>
          </div>
          <div className=" text-white  flex justify-end items-center rounded-full  m-1 px-3 hover:border hover:border-white py-1 cursor-pointer">
            <Image
              src={HomeWhiteIcon}
              alt=""
              width={25}
              height={25}
              className="min-w-[25px] min-h-[25px] object-contain"
            />{" "}
            <span className="pl-1 hidden xl:inline">Ghetto</span>
            <HomeIcon />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Header;
