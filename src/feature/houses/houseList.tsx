import { useState } from "react";
import HouseCard from "./components/houseCard";
import HouseBackground from "./components/houseBackground";
import SingleHouseDetails from "./components/single-house-details";
import SingleRenterDetail from "./components/singleRenter";
import PhotoSlider from "./components/housCard";
import SingleLayout from "@/common/singleLayout";
import SearchSideBar from "@/common/searchSideBar";
import Link from "next/link";
const h = ["1", "2", "3", "4", "1", "2", "3", "4"];

const HouseList = ({open,setOpen}:{open:boolean; setOpen:(_value:boolean)=>void}) => {
  const [isHouseDetails, setIsHouseDetails] = useState<boolean>(false);
  const [showSingleRenter, setShowSingleRenter] = useState<boolean>(false);
  const [bookingInfo, setBookingInfo] = useState<boolean>(false);
  const menuItems = [
    { href: "/dashboard", icon: "Home", label: "Dashboard" },
    { href: "/profile", icon: "User", label: "Profile" },
    { href: "/settings", icon: "Settings", label: "Settings" },
  ];

  return (
    <>
      <div className="  ">
        <div className="grid grid-cols-10 ">
          <div className="md:col-span-2 sm:col-span-0 sx:col-span-0  "> 
            {/* <button
              onClick={() => setOpen(true)}
              className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden"
            >
              Menu
            </button>
            <aside
              className={`
          fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg z-40
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          w-full max-w-xs
          lg:translate-x-0 lg:w-64
        `}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white lg:hidden"
              >
                ✕
              </button>

              <nav className="mt-16 flex flex-col gap-2 p-4">
                {menuItems.map(({ href, icon: Icon, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-800 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    ICON
                    <span className="xl:block">{label}</span>
                  </Link>
                ))}
              </nav>
            </aside> */}
            <SearchSideBar open={open} setOpen={setOpen} />
          </div>
          <div className="md:col-span-10 sm:col-span-10 xs:col-span-10 lg:col-span-8 sm:col-span-8 h-screen   overflow-auto ">
            <HouseBackground /> 
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-4 mr-2">
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
