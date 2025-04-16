import Layout from "@/common/layout";
import HouseList from "@/feature/houses/houseList";
import RentersList from "@/feature/renters/rentersList";
import { useState } from "react";

const Renters=()=>{
    const [open, setOpen] = useState(true);
    return( 
         <Layout open={open} setOpen={setOpen}>
        <RentersList  open={open} setOpen={setOpen}/>
        </Layout> 
    )

}
export default Renters;