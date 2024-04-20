import Layout from "@/common/layout";
import ViewUserProfile from "@/feature/userManagement";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Layout>
        <ViewUserProfile/>
        </Layout>
        </> 
  );
}
