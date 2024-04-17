import { KayaLogo, SearchIcon, UserIcon } from "@/assets/icons";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="bg-white flex justify-between items-center">
        <Image src={KayaLogo} alt="" />

        <div className="w-1/3 mr-10 ">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-10 pointer-events-none">
              <Image src={SearchIcon} alt="" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 ps-20 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500   "
              placeholder="Start searching..."
              required
            />
          </div>
        </div>

        <div
          className="inline-flex items-center px-1 py-1 text-white   rounded-full active   dark:bg-blue-600"
          aria-current="page"
        >
          <Image src={UserIcon} alt="" />
        </div>
      </div>
    </>
  );
};
export default Header;
