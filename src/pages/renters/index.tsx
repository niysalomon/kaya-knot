import Layout from "@/common/layout";
import HouseList from "@/feature/houses/houseList";
import RentersList from "@/feature/houses/rentersList";
import { useState } from "react";

const Renters=()=>{
    const [open, setOpen] = useState(true);
    return( 
         <Layout open={open} setOpen={setOpen}>
        <RentersList/>
        </Layout> 
    )

}
export default Renters;