import {
  FacebookIcon,
  InstagramIcon,
  KayaLogo,
  KayaLogoDark,
  LinkedinIcon,
  UserIcon,
} from "@/assets/icons";
import Footer from "./footer";
import Image from "next/image";
import SideBarMenu from "./sideBarMenus";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-white flex justify-between items-center px-5 sticky top-0 z-10">
        <Image src={KayaLogo} alt="" />

        <div
          className="inline-flex items-center px-1 py-1 text-white   rounded-full active   dark:bg-blue-600"
          aria-current="page"
        >
          <Image src={UserIcon} alt="" />
        </div>
      </div>
      <div>
        <SideBarMenu />
        {/* h-[calc(80vh-186px)] */}
        <div className="bg-gray-50">{children}</div>
        <div className=" bg-darkColor p-1">
          <div className="text-white flex flex-col atems-center justify-between py-2 px-5">
            <div className=" flex atems-center justify-between py-2">
              <Image src={KayaLogoDark} alt="" />
              <div></div>
              <div></div>
            </div>
            <div className=" flex justify-between py-2 ">
              <div>
                {" "}
                <h5>Company</h5>
                <hr className="my-2" />
              </div>

              <div>
                {" "}
                <h5>Legal dghh</h5>
                <hr className="my-2" />
              </div>
              <div></div>
            </div>
            <div className=" flex   justify-between py-2 ">
              <div>
                {" "}
                <h5>About us</h5>
                <h5>Careers</h5>
              </div>

              <div className="ml-4">
                {" "}
                <h5>Privacy policy</h5>
                <h5>Terms</h5>
              </div>
              <div></div>
            </div>
          </div>
          <div className="">
            {" "}
            <hr />
          </div>
          <div className=" flex justify-between items-center text-white ">
            <div>© 2024 KAKA Knot</div>
            <div className=" flex  py-2">
              <Image className="px-1" src={FacebookIcon} alt="" />
              <Image className="px-1 mt-2" src={InstagramIcon} alt="" />
              <Image className="px-1" src={LinkedinIcon} alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileLayout;
