import Layout from "@/common/layout";
import ViewUserProfile from "@/feature/userManagement";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);
  return( 
      <Layout open={open} setOpen={setOpen}>
        <ViewUserProfile/>
        </Layout> 
  );
}
