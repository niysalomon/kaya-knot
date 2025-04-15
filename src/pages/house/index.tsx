import Layout from "@/common/layout";
import HouseList from "@/feature/houses/houseList";
import { useState } from "react";

const Houses=()=>{
    const [open, setOpen] = useState(true);
    return( 
        <Layout open={open} setOpen={setOpen}>
        <HouseList open={open} setOpen={setOpen}/>
        </Layout> 
    )

}
export default Houses;