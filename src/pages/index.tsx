import Layout from "@/common/layout";
import HouseRentersHome from "@/feature/houses/components/house-renters-home";
import RenterHouse from "@/feature/houses/renterHouse"; 
import Slider from "@/feature/houses/slide";
import { useState } from "react";

const Home=()=>{
     const [open, setOpen] = useState(true);
    return( 
        <Layout open={open} setOpen={setOpen}>
       <HouseRentersHome/> 
        </Layout> 
    )

}
export default Home;