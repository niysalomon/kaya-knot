import { FacebookIcon, InstagramIcon, KayaLogoDark, LinkedinIcon } from "@/assets/icons";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="bg-darkColor p-1">
        <div className="text-white flex flex-col atems-center justify-between py-2 px-5">
          <div className=" flex atems-center justify-between py-2">
            <Image src={KayaLogoDark} alt="" />
            <div></div>
            <div></div>
          </div>
          <div className=" flex   justify-between py-2 ">
            <div>
              {" "}
              <h5>Company</h5>
              <hr className="my-2"  />
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
        <div className=""> <hr/></div>
        <div className=" flex justify-between items-center text-white ">
          <div>© 2024 KAKA Knot</div>
          <div className=" flex  py-2">
          
          <Image className="px-1" src={FacebookIcon} alt=""/>
          <Image className="px-1 mt-2" src={InstagramIcon} alt=""/>
          <Image className="px-1" src={LinkedinIcon} alt=""/>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Footer;
