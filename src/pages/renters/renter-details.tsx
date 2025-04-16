import Layout from "@/common/layout";
import SingleRenterDetail from "@/feature/renters/components/singleRenter";
import { useState } from "react";

const RenterDetails = () => {
  const [open, setOpen] = useState(true);
  return( 
      <Layout open={open} setOpen={setOpen}>
      <SingleRenterDetail />
    </Layout>
  );
};
export default RenterDetails;
