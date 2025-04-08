import Layout from "@/common/layout";
import SingleHouseDetails from "@/feature/houses/components/single-house-details";
import { useState } from "react";

const Houses=()=>{
      const [isHouseDetails, setIsHouseDetails] = useState<boolean>(false);
    return(
        <>
        <Layout>
        <div className="h-[calc(99vh-170px)] pr-0.5 overflow-auto px-4">
        <div className="flex justify-center items-center">
            <div></div>
            <SingleHouseDetails />
            <div></div>
          </div>
          </div>
        </Layout>
        </>
    )

}
export default Houses;