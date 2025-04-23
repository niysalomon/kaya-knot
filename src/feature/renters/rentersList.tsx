 
import RenterBackground from "./components/renterBackground";  
import SearchRenterSideBar from "@/common/searchRenterSideBar";
import RenterCard from "./components/rentersCard";

const RentersList = ({open,setOpen}:{open:boolean; setOpen:(_value:boolean)=>void})  => {
  const h = ["1", "2", "3", "4", "1", "2", "3", "4"]; 
  return (
    <> 
        <div className=" ">
          <div className="grid grid-cols-10 gap-4">
          <div className="col-span-2 sm:col-span-0 sx:col-span-0   ">
            <SearchRenterSideBar open={open} setOpen={setOpen}/>
          </div> 
            <div className="md:col-span-10 sm:col-span-10 xs:col-span-10 lg:col-span-8  h-screen   overflow-auto">
              <RenterBackground />
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 mb-4">
                {h.map((item) => (
                  <RenterCard   key={item}/>
                ))}
              </div>
            </div>
          </div>
        </div> 
    </>
  );
};
export default RentersList;
